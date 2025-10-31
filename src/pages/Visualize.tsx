import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

interface Step {
  title: string;
  description: string;
  videoPath?: string;
  visual?: string;
}

const Visualize = () => {
  const location = useLocation();
  const topic = location.state?.topic || "Pythagorean Theorem";
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPythagorean = topic === "Pythagorean Theorem";

  // Pythagorean Theorem steps with videos
  const pythagoreanSteps: Step[] = [
    {
      title: "Draw the Triangle",
      description:
        "Consider a right-angled triangle with sides a, b, and hypotenuse c.",
      videoPath: "/videos/step1.mp4",
    },
    {
      title: "Construct Squares",
      description:
        "Construct squares on each of the three sides of the triangle.",
      videoPath: "/videos/step2.mp4",
    },
    {
      title: "Highlight Areas of a² and b²",
      description: "The areas of these two squares are a² and b².",
      videoPath: "/videos/step3.mp4",
    },
    {
      title: "Highlight Area of c²",
      description: "The area of the largest square is c².",
      videoPath: "/videos/step4.mp4",
    },
    {
      title: "Rearrange / Compare",
      description:
        "The sum of the areas of the two smaller squares equals the area of the largest square.",
      videoPath: "/videos/step5.mp4",
    },
    {
      title: "Final Equation",
      description: "Hence proved — in a right-angled triangle, a² + b² = c².",
      videoPath: "/videos/step6.mp4",
    },
  ];

  // Generic steps for other topics (3 steps trial)
  const genericSteps: Step[] = [
    {
      title: "Step 1",
      description: `Introduction to ${topic}. Understanding the basic concept and fundamental principles.`,
      visual: "📊",
    },
    {
      title: "Step 2",
      description: `Exploring the key components of ${topic}. Visual breakdown of the main elements.`,
      visual: "📈",
    },
    {
      title: "Step 3",
      description: `Summary and application of ${topic}. Putting it all together for practical understanding.`,
      visual: "✓",
    },
  ];

  const steps = isPythagorean ? pythagoreanSteps : genericSteps;
  const [currentStep, setCurrentStep] = useState(0);

  // Play video once when step changes (only for Pythagorean)
  useEffect(() => {
    if (isPythagorean && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [currentStep, isPythagorean]);

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
            {/* Visual Display - Video or Icon */}
            <Card className="p-4 card-shadow flex items-center justify-center min-h-[400px] bg-gradient-to-br from-primary/5 to-accent/5 border-2 shadow-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                {isPythagorean ? (
                  <video
                    ref={videoRef}
                    key={currentStep}
                    className="w-full h-full object-contain rounded-lg"
                    controls={false}
                    playsInline
                    muted
                  >
                    <source
                      src={steps[currentStep].videoPath}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="text-center animate-scale-in">
                    <div className="text-9xl mb-4">
                      {steps[currentStep].visual}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Visual representation
                    </p>
                  </div>
                )}
              </div>
            </Card>

            {/* Explanation */}
            <div className="space-y-6">
              <Card className="p-8 card-shadow h-full flex flex-col border-2 shadow-lg">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    {steps[currentStep].description}
                  </p>
                </div>

                {/* Step Indicators - Removed click functionality */}
                <div className="flex justify-center gap-2 mt-8">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentStep
                          ? "w-8 bg-primary"
                          : "w-2 bg-border"
                      }`}
                      aria-label={`Step ${index + 1}`}
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
