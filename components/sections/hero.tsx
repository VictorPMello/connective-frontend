import { ArrowRight, BarChart3, Kanban, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 border rounded-full 
            border-primary/20 bg-primary/10 text-primary
            text-sm font-semibold backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            All-in-one CRM Solution
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl  lg:text-6xl font-bold leading-tight">
            Connect your{" "}
            <span
              className="text-transparent bg-clip-text 
              bg-gradient-to-r from-primary via-destructive to-primary
              animate-gradient"
            >
              clients, goals,
            </span>
            <br />
            and growth
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Connective helps{" "}
            <span className="text-foreground font-semibold">
              freelancers and small teams
            </span>{" "}
            simplify their workflow, organize opportunities, and grow smarter —
            not harder.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/login"
              className="
              group cursor-pointer px-8 py-4 bg-gradient-to-r from-primary to-destructive text-white font-bold rounded-full hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105 flex items-center gap-2"
            >
              Watch Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
            <div className="flex justify-center items-center">
              <div className="text-2xl font-bold bg-gradient-to-r  from-primary to-destructive bg-clip-text text-transparent">
                In Launch Phase
              </div>
            </div>
            <div className="flex justify-center items-center border-x border-white/10">
              <div className="text-2xl font-bold bg-gradient-to-r  from-primary to-destructive bg-clip-text text-transparent">
                Tested by Real Teams
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-2xl font-bold bg-gradient-to-r  from-primary to-destructive bg-clip-text text-transparent">
                Friendly Support Available
              </div>
            </div>
          </div>

          {/* Dashboard Preview Mockup */}
          <div className="pt-16">
            <div className="relative max-w-5xl mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-destructive/20 to-primary/20 blur-3xl"></div>

              {/* Dashboard Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
                <div className="space-y-4">
                  {/* Content Preview */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-2xl font-bold mb-1">
                        Future Clients
                      </div>
                      <div className="text-sm text-gray-400">Coming Soon</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <div className="w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center mb-3">
                        <Kanban className="w-5 h-5 text-destructive" />
                      </div>
                      <div className="text-2xl font-bold mb-1">
                        Building Together
                      </div>
                      <div className="text-sm text-gray-400">
                        Pilot Projects
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <div className="w-10 h-10 bg-sidebar-ring/20 rounded-lg flex items-center justify-center mb-3">
                        <BarChart3 className="w-5 h-5 text-sidebar-ring" />
                      </div>
                      <div className="text-2xl font-bold mb-1">Scaling Up</div>
                      <div className="text-sm text-gray-400">Step by Step</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
