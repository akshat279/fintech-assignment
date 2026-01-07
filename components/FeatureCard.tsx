import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div
      className="
        bg-[#111827]
        rounded-2xl
        p-8
        border border-white/5
        transition-all duration-300
        hover:border-blue-500/40
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]
      "
    >
      {/* ICON */}
      <div
        className="
          w-12 h-12
          rounded-xl
          bg-blue-600/10
          text-blue-500
          flex items-center justify-center
          mb-6
        "
      >
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-white text-lg font-semibold mb-3">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
