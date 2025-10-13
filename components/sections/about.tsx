export function About() {
  return (
    <section
      id="about"
      className="w-screen h-screen
        flex flex-col justify-evenly items-center gap-3
        lg:max-w-7xl mx-auto
        relative text-center"
    >
      <h2 className="text-4xl">
        <span className="font-bold text-sidebar-ring dark:text-primary">
          Who
        </span>{" "}
        we are
      </h2>

      <div className="flex gap-3 max-w-md text-left self-start">
        <p className="text-2xl">
          At Connective, we believe that strong relationships are the foundation
          of every successful business. Our mission is to deliver a modern,
          accessible, and efficient solution that empowers companies of all
          sizes to grow, connect, and build long-lasting customer loyalty.
        </p>
      </div>
    </section>
  );
}
