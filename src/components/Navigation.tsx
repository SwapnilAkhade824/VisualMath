import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleStartLearning = () => {
    if (location.pathname === "/") {
      // If on home page, scroll to the input box
      const inputElement = document.querySelector(
        'input[type="text"]'
      ) as HTMLInputElement;
      if (inputElement) {
        inputElement.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => inputElement.focus(), 500);
      }
    } else {
      // If on another page, navigate to home
      navigate("/");
    }
  };

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary rounded-lg p-1.5 group-hover:scale-110 transition-transform">
              <Calculator className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              VisualMath
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className="font-medium"
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant={isActive("/about") ? "default" : "ghost"}
                className="font-medium"
              >
                About
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant={isActive("/contact") ? "default" : "ghost"}
                className="font-medium"
              >
                Contact
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              onClick={handleStartLearning}
              className="gradient-primary font-semibold hover:opacity-90 transition-opacity"
            >
              Start Learning
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
