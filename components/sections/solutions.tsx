import { BarChart3, Kanban, Users } from "lucide-react";

export function Solutions() {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Client Insights",
      description:
        "See total clients and project metrics at a glance, track your growth over time.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Organized Client List",
      description:
        "Manage all your client details in one simple table, from contact info to history.",
    },
    {
      icon: <Kanban className="w-6 h-6" />,
      title: "Visual Project Board",
      description:
        "Use an intuitive Kanban to follow every task, status, and progress in real time.",
    },
  ];

  return (
    <section
      id="solutions"
      className="w-screen h-screen flex flex-col justify-around items-center gap-3
       lg:max-w-7xl mx-auto relative text-center"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-destructive">
              Everything
            </span>{" "}
            you need to organize
          </h2>
          <p className="text-xl text-gray-400">
            All your clients and projects in one place
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div key={i} className="group relative">
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-destructive/5 to-primary/0 
                rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 
                rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 bg-gradient-to-br from-primary/20 to-destructive/20 
                  rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary"
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
