"use client";

const items = [
  "Business Operations",
  "Supply Chain",
  "Data & Analytics",
  "AI & Automation",
  "Project Management",
  "Cloud Computing",
  "Operations Analytics",
  "Strategy & Process",
  "LightPillar • Three.js",
];

export function Marquee() {
  const row = [...items, ...items, ...items];
  return (
    <div
      className="relative overflow-hidden border-y border-[#E1E0CC]/10 bg-[#0a0a0a] py-4"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[#E1E0CC]/40"
          >
            {item}
            <span className="text-[#E1E0CC]/80">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
