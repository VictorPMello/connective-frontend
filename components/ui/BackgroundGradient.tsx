export function BackgroundGradient() {
  return (
    <>
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-black to-orange-950/20 pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div
        className="fixed inset-0 opacity-[1]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </>
  );
}
