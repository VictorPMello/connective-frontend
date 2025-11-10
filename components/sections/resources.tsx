import { BarChart3, Globe, Kanban, Zap } from "lucide-react";

export function Resources() {
  const benefits = [
    {
      title: "Simple & Intuitive",
      description:
        "Manage your projects, clients, and data easily — without needing tutorials.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Stay Organized",
      description:
        "Stay organized with visual boards and detailed client tables that keep everything clear.",
      icon: <Kanban className="w-8 h-8" />,
    },
    {
      title: "Smart Analytics",
      description:
        "Make smarter decisions with visual dashboards and performance charts.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "100% Online & Secure",
      description:
        "Work 100% online, with encrypted data and instant access from any device.",
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  return (
    <section
      id="resources"
      className="w-screen h-screen flex flex-col justify-around items-center gap-3
         lg:max-w-7xl mx-auto mt-24 relative text-center"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-destructive">
              Connective?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm
              border border-white/10 rounded-2xl p-8 hover:border-primary/30 
              transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className="w-16 h-16 bg-gradient-to-br from-primary/10 to-destructive/10
                rounded-xl flex items-center justify-center mb-6 text-primary"
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
