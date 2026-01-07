import { Lock, ShieldCheck, Activity, FileCheck } from "lucide-react";

const features = [
  {
    title: "End-to-End Encryption",
    desc:
      "Every transaction is encrypted, safeguarding sensitive financial data from unauthorized access.",
    icon: Lock,
  },
  {
    title: "PCI DSS Level 1 Compliance",
    desc:
      "Ensuring the highest level of payment security for processing transactions.",
    icon: ShieldCheck,
  },
  {
    title: "AI-Powered Fraud Detection",
    desc:
      "Advanced machine learning models analyze transaction patterns to detect and prevent fraud in real time.",
    icon: Activity,
  },
  {
    title: "Regulatory Compliance (KYC, AML, PSD2)",
    desc:
      "Built-in compliance solutions to meet global financial regulations and ensure seamless user verification.",
    icon: FileCheck,
  },
];

const SecuritySection = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">

      {/* DOT GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:22px_22px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Security & Compliance
          </p>

          <h2 className="text-4xl font-semibold text-slate-900 mb-6">
            Enterprise-Grade Protection for Your Business
          </h2>

          <p className="text-slate-500 max-w-xl mb-12">
            Our platform is designed to meet the highest industry standards,
            ensuring your transactions, customer data, and financial operations
            remain secure and fully compliant.
          </p>

          {/* FEATURE LIST */}
          <div className="space-y-8 border-l border-slate-200 pl-6">
            {features.map((item, i) => (
              <div key={i} className="flex gap-4">
                <item.icon className="w-5 h-5 text-slate-700 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center">

          {/* CARD MOCK */}
          <div className="relative bg-[#0B0F1A] rounded-2xl p-8 w-[340px] shadow-[0_25px_60px_rgba(0,0,0,0.15)]">

            {/* LOCK ICON */}
            <div className="absolute -top-4 left-6 bg-white rounded-full p-2 shadow">
              <Lock className="w-4 h-4 text-slate-900" />
            </div>

            {/* CARD CONTENT */}
            <div className="h-4 w-20 bg-slate-700 rounded mb-6" />

            <div className="space-y-3 mb-6">
              <div className="h-3 bg-slate-700 rounded w-full" />
              <div className="h-3 bg-slate-700 rounded w-5/6" />
              <div className="h-3 bg-slate-700 rounded w-4/6" />
            </div>

            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <div className="h-3 w-24 bg-slate-700 rounded" />
                <div className="h-3 w-16 bg-slate-700 rounded" />
              </div>
              <div className="w-10 h-6 bg-gradient-to-r from-red-500 to-yellow-400 rounded-sm" />
            </div>
          </div>
        </div>
      </div>

{/* LOGO CLOUD SECTION - DEFAULT BLACK CIRCLE */}
<div className="w-full py-12 border-b border-slate-100 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-wrap justify-between items-center gap-8 opacity-80">
      
      {/* Generate 4 identical default logos */}
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="flex items-center gap-3">
          {/* Black Circle Icon */}
          <div className="w-10 h-10 bg-black rounded-full shadow-sm" />
          
          {/* Text */}
          <span className="text-2xl font-bold text-slate-400 font-sans tracking-tight">
            Logoipsum
          </span>
        </div>
      ))}

    </div>
  </div>
</div>
    </section>
  );
};

export default SecuritySection;
