export function About() {
  return (
    <section
      id="about"
      className="w-screen h-screen flex flex-col justify-evenly items-center gap-3
           lg:max-w-7xl mx-auto relative text-center"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-destructive">
                Who
              </span>{" "}
              we are
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <p className="text-xl text-gray-300 leading-relaxed text-center">
              At Connective, we believe that{" "}
              <span className="text-white font-semibold">
                strong relationships are the foundation
              </span>{" "}
              of every successful business. Our mission is to deliver a modern,
              accessible, and efficient solution that empowers companies of all
              sizes to grow, connect, and build long-lasting customer loyalty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
