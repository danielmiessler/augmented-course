export function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="bg-orb bg-orb-1 -top-[200px] -left-[200px]" />
      <div className="bg-orb bg-orb-2 top-[40%] -right-[150px]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Noise overlay */}
      <div className="bg-noise absolute inset-0" />
    </div>
  );
}
