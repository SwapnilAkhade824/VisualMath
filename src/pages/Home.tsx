import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Lightbulb, Play, Sparkles } from "lucide-react";
import { toast } from "sonner";
const Home = () => {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      toast.success("Generating visualization...");
      navigate("/visualize", {
        state: {
          topic
        }
      });
    } else {
      toast.error("Please enter a math concept");
    }
  };
  const exampleTopics = ["Pythagorean Theorem", "Quadratic Equations", "Derivatives", "Integration"];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Visual Learning
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent my-[10px] mx-[10px] py-[10px] lg:text-6xl">
              Turn any math concept into a visual story
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Type a concept you find hard, and we'll explain it with step-by-step animations that make complex ideas simple.
            </p>
            
            {/* Input Section */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-card rounded-2xl card-shadow">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input type="text" placeholder="Enter a math concept..." value={topic} onChange={e => setTopic(e.target.value)} className="pl-12 h-14 text-lg border-0 focus-visible:ring-0 bg-transparent" />
                </div>
                <Button type="submit" size="lg" className="gradient-primary font-semibold h-14 px-8 hover:opacity-90 transition-opacity">
                  Generate Visualization
                </Button>
              </div>
            </form>
            
            {/* Example Topics */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-muted-foreground text-sm text-center my-[7px]">Try:</span>
              {exampleTopics.map(example => <Button key={example} variant="outline" size="sm" onClick={() => setTopic(example)} className="text-sm hover:border-primary hover:text-primary transition-colors">
                  {example}
                </Button>)}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your math learning experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{
            icon: Search,
            title: "Enter Your Topic",
            description: "Type any math concept you're struggling with, from basic algebra to advanced calculus.",
            color: "text-primary",
            bg: "bg-primary/10"
          }, {
            icon: Play,
            title: "Watch Visual Explanation",
            description: "See step-by-step animations that break down complex ideas into simple visual stories.",
            color: "text-accent",
            bg: "bg-accent/10"
          }, {
            icon: Lightbulb,
            title: "Learn Interactively",
            description: "Navigate through each step at your own pace, building understanding progressively.",
            color: "text-primary",
            bg: "bg-primary/10"
          }].map((step, index) => <Card key={index} className="p-8 text-center hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border/50" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bg} mb-6`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 VisualMath | Made by Swapnil Santosh Akhade
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:visualmath@example.com">
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Home;