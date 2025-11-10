import Link from "next/link";

import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section
      className="w-screen h-screen flex flex-col justify-evenly items-center gap-3
           lg:max-w-7xl mx-auto relative text-center"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-destructive/20 to-primary/20 blur-3xl"></div>

          <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/20 rounded-3xl p-12 md:p-16 text-center backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already growing with Connective
            </p>
            <Link
              href="/login"
              className="
              group cursor-pointer max-w-64 px-10 py-5 bg-gradient-to-r from-primary to-destructive text-white font-bold rounded-full
              hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105 flex items-center justify-center gap-2 mx-auto text-lg"
            >
              Watch Demo
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
