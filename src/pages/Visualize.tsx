import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

interface Step {
  title: string;
  description: string;
  visual: string;
}

const Visualize = () => {
  const location = useLocation();
  const topic = location.state?.topic || "Pythagorean Theorem";
  
  // Mock data for demonstration
  const steps: Step[] = [
    {
      title: "Introduction",
      description: `Welcome to the visualization of ${topic}. This interactive lesson will guide you through each concept step by step.`,
      visual: "📐",
    },
    {
      title: "Basic Concept",
      description: "Let's start with the fundamental idea. Draw a right triangle and label its sides as a, b, and c, where c is the hypotenuse.",
      visual: "△",
    },
    {
      title: "Visual Proof",
      description: "The area of the square on side c equals the sum of the areas of squares on sides a and b: a² + b² = c²",
      visual: "▢",
    },
    {
      title: "Example Application",
      description: "Let's apply this to a real problem. If a = 3 and b = 4, then c² = 9 + 16 = 25, so c = 5.",
      visual: "✓",
    },
    {
      title: "Summary",
      description: "You've now learned the complete concept! Practice with different values to strengthen your understanding.",
      visual: "🎓",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:bg-secondary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Topic Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{topic}</h1>
          <p className="text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Main Visualization Area */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Visual Display */}
            <Card className="p-8 card-shadow flex items-center justify-center min-h-[400px] bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="text-center animate-scale-in">
                <div className="text-9xl mb-4">{steps[currentStep].visual}</div>
                <p className="text-sm text-muted-foreground">Visual representation</p>
              </div>
            </Card>

            {/* Explanation */}
            <div className="space-y-6">
              <Card className="p-8 card-shadow h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    {steps[currentStep].description}
                  </p>
                </div>

                {/* Step Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentStep 
                          ? "w-8 bg-primary" 
                          : "w-2 bg-border hover:bg-primary/50"
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={prevStep}
              disabled={currentStep === 0}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <ChevronLeft className="h-5 w-5" />
              Previous
            </Button>
            
            <div className="text-sm text-muted-foreground">
              {currentStep + 1} / {steps.length}
            </div>
            
            <Button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              size="lg"
              className="gradient-primary gap-2 hover:opacity-90 transition-opacity"
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualize;
