import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Rocket, Brain } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About VisualMath
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Making mathematics accessible and engaging through the power of
            visual learning
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <Card className="p-8 sm:p-12 card-shadow hover:card-shadow-hover transition-shadow duration-300 border-2 border-primary/30 shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shadow-md border-2 border-primary/20">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  VisualMath was created to address a fundamental challenge in
                  mathematics education: many students struggle not because
                  concepts are too difficult, but because traditional teaching
                  methods don't match how our brains naturally process
                  information.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By transforming abstract mathematical concepts into dynamic
                  visual stories, we help learners build intuitive understanding
                  that lasts.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Features Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Visual Learning Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Brain-Friendly",
                description:
                  "Our brains process visual information 60,000 times faster than text. We leverage this to accelerate learning.",
              },
              {
                icon: Lightbulb,
                title: "Intuitive Understanding",
                description:
                  "Step-by-step animations help you build deep, intuitive understanding instead of memorizing formulas.",
              },
              {
                icon: Rocket,
                title: "Self-Paced Learning",
                description:
                  "Navigate through concepts at your own speed. Review steps as many times as you need.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border-2 shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 shadow-md border-2 border-accent/20">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8 sm:p-12 card-shadow hover:card-shadow-hover transition-shadow duration-300 bg-gradient-to-br from-primary/5 to-accent/5 border-2 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Future Scope
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  AI-Driven Animations:
                </span>{" "}
                We're working on advanced AI that can automatically generate
                custom animations for any mathematical concept, no matter how
                complex or niche.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  Interactive Simulations:
                </span>{" "}
                Soon you'll be able to manipulate variables in real-time and see
                how they affect mathematical relationships.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  Audio Explanations:
                </span>{" "}
                Text-to-speech integration will provide narrated walkthroughs
                for accessibility and multi-sensory learning.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  Personalized Learning Paths:
                </span>{" "}
                Adaptive algorithms will identify your learning style and create
                customized visualization sequences.
              </p>
            </div>
          </Card>
        </div>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Swapnil",
                initials: "SW",
                color: "from-primary to-accent",
              },
              {
                name: "Mansi",
                initials: "MA",
                color: "from-accent to-primary",
              },
              {
                name: "Dhanshree",
                initials: "DH",
                color: "from-primary to-accent",
              },
              {
                name: "Gunjan",
                initials: "GU",
                color: "from-accent to-primary",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border-2 shadow-lg"
              >
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-xl border-2 border-white/20`}
                >
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">
                  AI-ML Department
                </p>
              </Card>
            ))}
          </div>
          <Card className="p-8 card-shadow hover:card-shadow-hover transition-shadow duration-300 mt-12 border-2 shadow-xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              This project was developed as a Minor Project exploring the
              intersection of artificial intelligence, educational technology,
              and visual learning. The goal is to make quality math education
              accessible to everyone, regardless of their learning style or
              background.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
