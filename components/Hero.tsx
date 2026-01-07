import React from "react";
import { ArrowRight, Mail, Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0F1A] pt-28 pb-32 lg:pt-36 lg:pb-40 font-sans selection:bg-blue-500/30">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Exact Dotted Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50 pointer-events-none" />

      {/* 2. Primary Blue Glow (Top Left) */}
      <div className="absolute left-[-20%] top-[-20%] w-[1000px] h-[1000px] bg-[#2563EB] rounded-full blur-[200px] opacity-20 pointer-events-none" />
      
      {/* 3. Secondary Subtle Glow (Bottom Right) */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[800px] h-[800px] bg-[#3B82F6] rounded-full blur-[180px] opacity-10 pointer-events-none" />


      <div className="relative max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* --- LEFT COLUMN: COPYWRITING --- */}
        <div className="z-10 max-w-[600px]">
          <p className="text-[#3B82F6] uppercase tracking-[0.15em] text-[11px] font-bold mb-5 ml-1">
            Finance Solution
          </p>

          <h1 className="text-white font-semibold leading-[1.15] text-[42px] sm:text-[52px] lg:text-[64px] tracking-tight">
            Empowering the <br />
            Next Generation <br />
            of Financial <br />
            Infrastructure, <br />
            <span className="text-white">Designed for You</span>
          </h1>

          <p className="mt-8 text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
            Powerful APIs and seamless integrations to help businesses move money,
            manage risk, and scale globally.
          </p>

          {/* EMAIL INPUT COMPONENT */}
          <div className="mt-10 relative max-w-[450px] group">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Send your email"
              className="w-full h-[52px] rounded-full bg-white pl-12 pr-40 text-slate-900 placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow shadow-xl"
            />
            {/* Icon */}
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
              <Mail size={18} strokeWidth={2} />
            </span>
            {/* Button */}
            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#2563EB] hover:bg-blue-700 transition-colors text-white text-[13px] font-medium px-5 rounded-full flex items-center gap-2">
              Talk to Sales <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* PARTNERS SECTION */}
          <div className="mt-16">
            <p className="text-[11px] text-slate-500 font-medium mb-6 tracking-wide">
              Partners in Financial Success
            </p>
            {/* Logos using CSS to match colors without SVGs */}
            <div className="flex flex-wrap gap-8 items-center opacity-90">
              {/* Slack */}
              <div className="flex items-center gap-2 font-bold text-lg text-white tracking-tight">
                 <div className="grid grid-cols-2 gap-0.5 rotate-[-10deg] scale-90">
                    <div className="w-2 h-2 rounded-full bg-[#36C5F0]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#2EB67D]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#E01E5A]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#ECB22E]"></div>
                 </div>
                 slack
              </div>

              {/* Amazon */}
              <span className="text-white font-medium text-lg">amazon</span>

              {/* Dropbox */}
              <span className="text-white font-semibold text-lg tracking-tight">Dropbox</span>

              {/* Loom */}
              <div className="flex items-center gap-1.5 font-bold text-lg text-white">
                 <span className="text-[#ffb86c] text-xl leading-none">❋</span>
                 loom
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: MOCKUPS --- */}
        {/* Fixed height container holding absolute items */}
        <div className="relative hidden lg:block h-[600px] w-full perspective-[1000px] translate-x-6">

          {/* 1. BACK CARD: CODE EDITOR (Dark, Rotated, Clipped) */}
          {/* Positioned negatively to be clipped by the overflow-hidden of the section/container */}
          <div className="absolute top-[-40px] -right-[40px] z-10">
            <div className="bg-[#1e293b] rounded-xl shadow-2xl w-[460px] p-1.5 rotate-[-6deg]">
               {/* Inner Dark Container */}
               <div className="bg-[#0f172a] rounded-lg p-6 min-h-[200px]">
                  {/* Window Controls (Mac Style, desaturated) */}
                  <div className="flex gap-1.5 mb-5 opacity-60">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  </div>
                  
                  {/* Code Content with exact colors */}
                  <div className="font-mono text-[13px] leading-[26px] font-medium tracking-tight text-slate-300">
                    <p>
                      <span className="text-[#22c55e]">GET</span> /payments
                    </p>
                    <p>
                      Host: <span className="text-[#3b82f6]">api.finech.com</span>
                    </p>
                    <p>
                      Authorization: Bearer <span className="text-[#f97316]">YOUR_API_KEY</span>
                    </p>
                    <p className="truncate">
                      Content-Type: application/<span className="text-[#0ea5e9]">json</span>
                    </p>
                  </div>
               </div>
            </div>
          </div>

          {/* 2. MIDDLE CARD: TRANSACTION (Main Focus, White) */}
          <div className="absolute top-[130px] right-[80px] z-20">
             <div className="bg-white rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-7 w-[420px]">
                
                {/* Header Row */}
                <div className="flex justify-between items-start mb-2">
                   <div className="flex items-center gap-2 text-slate-500 text-[13px] font-medium">
                      <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                         <span className="text-xs">↗</span>
                      </div>
                      Transfer Multi-Currency
                   </div>
                   {/* Success Badge */}
                   <div className="flex items-center gap-1.5 text-[#16A34A] text-[11px] font-bold bg-[#DCFCE7] px-2.5 py-1 rounded-full border border-[#bbf7d0]">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A] flex items-center justify-center">
                         <Check size={8} strokeWidth={4} className="text-white" />
                      </div>
                      Success
                   </div>
                </div>
                
                {/* Transaction Meta */}
                <div className="mb-8 pl-8">
                   <p className="text-[11px] text-slate-400 font-mono tracking-wide">TXN-9823745</p>
                   <p className="text-xs text-slate-500 mt-0.5">Business Payment</p>
                </div>

                {/* Progress Bar Visual (Exact match) */}
                <div className="relative h-px bg-slate-100 w-full mb-8">
                   {/* Green Progress Line (approx 65%) */}
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[65%] h-[2px] bg-[#22C55E]"></div>
                   
                   {/* Start Dot (Black with white border) */}
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-900 rounded-full border-[2px] border-white shadow-sm z-10"></div>
                   
                   {/* Current Progress Checkmark (Green with white border) */}
                   <div className="absolute left-[65%] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#22C55E] rounded-full flex items-center justify-center text-white border-[3px] border-white shadow-md z-10">
                      <Check size={10} strokeWidth={4} />
                   </div>
                   
                   {/* Date Stamp floating right */}
                   <div className="absolute right-0 top-[-22px] text-[10px] text-slate-300 text-right leading-tight">
                      <p>March 12, 2025</p>
                      <p>14:32 UTC</p>
                   </div>
                </div>

                {/* Amounts & Details Row */}
                <div className="flex justify-between items-end">
                   {/* Source Column */}
                   <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1.5">Source</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-bold text-slate-900 tracking-tight">$1,250.00</span>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">USD</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        {/* Placeholder Bank Logo (Chase Blue) */}
                        <div className="w-5 h-5 bg-[#117ACA] rounded-full flex items-center justify-center text-white text-[8px] font-bold"></div>
                        <div className="text-xs">
                           <p className="font-semibold text-slate-700">Michael Johnson</p>
                           <p className="text-slate-400 text-[10px] font-medium">JPMorgan Chase ••• 3456</p>
                        </div>
                      </div>
                   </div>

                   {/* Destination Column */}
                   <div className="text-right">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1.5">Destination</p>
                      <div className="flex items-baseline gap-1.5 justify-end">
                        <span className="text-2xl font-bold text-slate-900 tracking-tight">¥187,500</span>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">JPY</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3 flex-row-reverse">
                        {/* Placeholder Bank Logo (Mitsubishi Red) */}
                        <div className="w-5 h-5 bg-[#E60012] rounded-full flex items-center justify-center text-white text-[8px] font-bold"></div>
                        <div className="text-right text-xs">
                           <p className="font-semibold text-slate-700">Hiroshi Tanaka</p>
                           <p className="text-slate-400 text-[10px] font-medium">Mitsubishi UFJ ••• 1098</p>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* 3. FRONT CARDS: STATS (Floating with window dots) */}
          <div className="absolute top-[420px] right-[110px] z-30 flex gap-6">
             
             {/* Stat Card 1 (0.01%) */}
             <div className="relative bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] w-[150px] h-[140px] flex flex-col items-center justify-center border border-slate-50">
                {/* Window Dots (Greyed out) */}
                <div className="absolute top-4 left-4 flex gap-1 opacity-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>
                
                <div className="text-center mt-3">
                   <p className="text-[32px] font-bold text-slate-900 tracking-tight leading-none">0.01%</p>
                   <p className="text-[11px] text-slate-400 mt-2 font-medium">Failure Rate</p>
                </div>
             </div>

             {/* Stat Card 2 (95%) */}
             <div className="relative bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] w-[150px] h-[140px] flex flex-col items-center justify-center border border-slate-50">
                {/* Window Dots */}
                <div className="absolute top-4 left-4 flex gap-1 opacity-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>

                <div className="text-center mt-3">
                   <p className="text-[32px] font-bold text-slate-900 tracking-tight leading-none">95%</p>
                   <p className="text-[11px] text-slate-400 mt-2 font-medium">Faster Processing</p>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;