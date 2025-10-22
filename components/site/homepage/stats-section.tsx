"use client";

export function StatsSection() {
  const stats = [
    {
      number: "10,000+",
      label: "Successful Students Served",
    },
    {
      number: "15+",
      label: "Years of Dedicated Service",
    },
    {
      number: "2600+",
      label: "Classes Completed",
    },
    {
      number: "5+",
      label: "Locations Available",
    },
  ];

  return (
    <section className="relative w-full bg-brand-red py-12 md:py-16">
      {/* Decorative curved shape on the left */}
      <div className="absolute left-0 top-0 h-full w-32 overflow-hidden">
        <div className="absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border-8 border-white/10"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-8 text-center ${
                index < stats.length - 1 ? "lg:border-r lg:border-white/20" : ""
              }`}
            >
              <h3 className="text-4xl font-bold text-white md:text-5xl">
                {stat.number}
              </h3>
              <p className="mt-2 text-base text-white/90 md:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
