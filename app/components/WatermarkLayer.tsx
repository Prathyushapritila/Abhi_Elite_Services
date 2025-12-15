export default function WatermarkLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage: "url('/abhi-logo.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "40%",
        opacity: 0.08,
      }}
    />
  );
}

