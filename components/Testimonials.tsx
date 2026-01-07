const testimonials = [
  {
    quote:
      "Managing enterprise transactions at scale requires reliability. Finech’s uptime and real-time monitoring make them the perfect partner.",
    name: "Frances Swann",
    role: "CEO of Toggl",
    company: "toggl",
    dark: false,
  },
  {
    quote:
      "Issuing virtual and physical cards used to be complex, but with Finech, we did it in just days. Our customers love the seamless experience!",
    name: "Rhonda Rhodes",
    role: "Risk Manager at UpWork",
    company: "upwork",
    dark: false,
  },
  {
    quote:
      "Finech’s API-first approach allowed us to integrate financial services effortlessly. As our business scaled, their infrastructure adapted without friction.",
    name: "Eddie Lake",
    role: "COO at Zoom",
    company: "zoom",
    dark: true,
  },
  {
    quote:
      "Security was our top concern, and Finech exceeded expectations. Their PCI DSS compliance and AI-powered fraud detection give us peace of mind.",
    name: "Autumn Phillips",
    role: "CTO at Spotify",
    company: "spotify",
    dark: true,
  },
  {
    quote:
      "Finech has completely transformed our cross-border transactions. With seamless multi-currency support, we now process international payments 50% faster!",
    name: "Paula Mora",
    role: "CFO at Tesla",
    company: "tesla",
    dark: false,
  },
  {
    quote:
      "Finech helped us reduce payout times from days to minutes. Our sellers are happier than ever, and disputes have dropped significantly.",
    name: "Iva Ryan",
    role: "CTO at Discord",
    company: "discord",
    dark: false,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">

      {/* DOT GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:22px_22px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Success Story
          </p>
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">
            How Businesses Thrive with Finech
          </h2>
          <p className="text-slate-500 text-base">
            Join the growing list of companies that trust Finech to power their
            payments, banking, and financial services.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 shadow-sm border transition
                ${
                  t.dark
                    ? "bg-[#0B0F1A] text-white border-white/5"
                    : "bg-white text-slate-900 border-slate-100"
                }`}
            >
              <p
                className={`text-sm leading-relaxed mb-8 ${
                  t.dark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                “{t.quote}”
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200" />
                <div className="text-sm">
                  <p className="font-semibold">{t.name}</p>
                  <p
                    className={`text-xs ${
                      t.dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>

                <span
                  className={`ml-auto text-xs font-semibold uppercase opacity-70 ${
                    t.dark ? "text-slate-400" : "text-slate-400"
                  }`}
                >
                  {t.company}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full text-sm font-medium">
            Explore Case Studies →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
