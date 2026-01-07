import { Check } from "lucide-react";

interface PricingCardProps {
  planName: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({
  planName,
  price,
  description,
  features,
  isPopular = false,
}: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col border transition-all
        ${
          isPopular
            ? "bg-[#0B0F1A] text-white border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            : "bg-white text-slate-900 border-slate-200"
        }`}
    >
      {/* POPULAR BADGE */}
      {isPopular && (
        <span className="absolute top-5 right-5 text-[10px] tracking-widest uppercase font-semibold text-blue-500">
          Most Popular
        </span>
      )}

      {/* PLAN NAME */}
      <h3 className="text-lg font-semibold mb-2">
        {planName}
      </h3>

      {/* PRICE */}
      <div className="flex items-end gap-1 mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && (
          <span
            className={`text-sm mb-1 ${
              isPopular ? "text-slate-400" : "text-slate-500"
            }`}
          >
            /month
          </span>
        )}
      </div>

      {/* SUBTEXT */}
      <p
        className={`text-sm mb-8 leading-relaxed ${
          isPopular ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {description}
      </p>

      {/* FEATURES */}
      <ul className="space-y-4 mb-10 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex gap-3 text-sm">
            <span
              className={`mt-[2px] flex items-center justify-center w-5 h-5 rounded-full
                ${
                  isPopular
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-600"
                }`}
            >
              <Check size={12} />
            </span>
            <span
              className={
                isPopular ? "text-slate-300" : "text-slate-600"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA BUTTON */}
      <button
        className={`w-full h-11 rounded-full text-sm font-medium transition
          ${
            isPopular
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "border border-blue-600 text-blue-600 hover:bg-blue-50"
          }`}
      >
        {isPopular ? "Choose Plan" : planName === "Scale" ? "Discuss Now" : "Start Now"}
      </button>
    </div>
  );
};

export default PricingCard;
