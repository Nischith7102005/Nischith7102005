const items = [
  "Business Operations",
  "Supply Chain",
  "Data & Analytics",
  "AI & Automation",
  "Project Management",
  "Cloud Computing",
  "Operations Analytics",
  "Strategy & Process",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden border-y border-primary/10 py-5"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary/45"
          >
            {item}
            <span className="text-primary">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
