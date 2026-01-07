import React from 'react';
import { Globe, Landmark, Maximize2, Lock, ArrowRight, Shield, Siren, Scale, Activity } from "lucide-react";

const FintechFeatureSection = () => {
  return (
    <section className="relative bg-white py-24 font-sans text-slate-900">
      
      {/* BACKGROUND DOT PATTERN */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4">
            WHY CHOOSE FINECH?
          </p>
          <h2 className="text-5xl font-medium tracking-tight text-black mb-6">
            Powering the Future of Finance
          </h2>
          <p className="text-slate-500 text-lg">
            Unlock seamless transactions, secure financial services, and limitless
            scalability with our powerful, API-driven infrastructure.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* CARD 1: GLOBAL PAYMENTS */}
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                <h3 className="text-2xl font-medium">Global Payments</h3>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Accept payments in 100+ currencies with instant settlement,
                ensuring smooth transactions across borders.
              </p>
            </div>

            {/* --- FIXED VISUAL: Transfer List --- */}
            <div className="bg-white rounded-2xl border border-slate-100 p-3 shadow-sm">
              
              {/* Row 1: Active (Black Background) */}
              <div className="bg-black rounded-xl p-4 flex items-center justify-between mb-2 shadow-md">
                {/* Left: Origin */}
                <div>
                  <div className="text-white font-semibold text-lg">$1,237.58</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-slate-400 text-xs font-medium">USD</span>
                  </div>
                </div>
                
                {/* Center: Blue Arrow */}
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>

                {/* Right: Destination */}
                <div className="text-right">
                  <div className="text-white font-semibold text-lg">€1,130.32</div>
                  <div className="flex items-center justify-end gap-1.5 mt-1">
                    <span className="text-slate-400 text-xs font-medium">EUR</span>
                    <span className="text-sm">🇪🇺</span>
                  </div>
                </div>
              </div>

              {/* Row 2: Passive */}
              <div className="p-4 flex items-center justify-between border-b border-slate-50 last:border-0">
                <div>
                  <div className="text-slate-900 font-semibold text-lg">$1,237.58</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-slate-500 text-xs font-medium">USD</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-right">
                  <div className="text-slate-900 font-semibold text-lg">£972.29</div>
                  <div className="flex items-center justify-end gap-1.5 mt-1">
                    <span className="text-sm">🇬🇧</span>
                    <span className="text-slate-500 text-xs font-medium">GBP</span>
                  </div>
                </div>
              </div>

              {/* Row 3: Passive */}
              <div className="p-4 flex items-center justify-between border-b border-slate-50 last:border-0">
                <div>
                  <div className="text-slate-900 font-semibold text-lg">$1,237.58</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-slate-500 text-xs font-medium">USD</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-right">
                  <div className="text-slate-900 font-semibold text-lg">¥186,139.31</div>
                  <div className="flex items-center justify-end gap-1.5 mt-1">
                    <span className="text-sm">🇯🇵</span>
                    <span className="text-slate-500 text-xs font-medium">JPY</span>
                  </div>
                </div>
              </div>

              {/* Row 4: Passive */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-slate-900 font-semibold text-lg">$1,237.58</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-slate-500 text-xs font-medium">USD</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-right">
                  <div className="text-slate-900 font-semibold text-lg">A$1,884.74</div>
                  <div className="flex items-center justify-end gap-1.5 mt-1">
                    <span className="text-sm">🇦🇺</span>
                    <span className="text-slate-500 text-xs font-medium">AUD</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CARD 2: BANKING AS A SERVICE */}
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                <h3 className="text-2xl font-medium">Banking as a Service</h3>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Issue virtual and physical cards effortlessly, securely hold and manage funds, and seamlessly provide a wide range of financial services.
              </p>
            </div>

            {/* Visual: Cards & Form */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col md:flex-row gap-6">
              {/* Left: Card Visuals */}
              <div className="flex-1 relative min-h-[160px]">
                 {/* Dark Card */}
                 <div className="absolute top-0 left-0 w-full bg-[#1a1a1a] rounded-xl p-4 text-white z-10 shadow-lg h-40 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-5 bg-slate-600 rounded opacity-50"></div>
                        <div className="text-[10px] tracking-widest opacity-50">XXXX XXXX</div>
                    </div>
                    <div className="flex justify-between items-end">
                         <div className="space-y-1">
                            <div className="h-1 w-12 bg-slate-600 rounded"></div>
                            <div className="h-1 w-8 bg-slate-600 rounded"></div>
                         </div>
                         {/* Mastercard circles */}
                         <div className="flex -space-x-2">
                             <div className="w-6 h-6 rounded-full bg-red-500 opacity-80"></div>
                             <div className="w-6 h-6 rounded-full bg-orange-400 opacity-80"></div>
                         </div>
                    </div>
                 </div>
                 {/* Light Card (Behind) */}
                 <div className="absolute top-24 left-0 w-full bg-slate-200 rounded-xl p-4 h-12 z-0 opacity-60"></div>
              </div>

              {/* Right: Form */}
              <div className="flex-1 space-y-3">
                 <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase">Cardholder Name</label>
                    <div className="w-full border border-slate-200 rounded px-2 py-1.5 text-xs text-slate-400">Cardholder Name</div>
                 </div>
                 <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase">Card Type</label>
                    <div className="w-full border border-slate-200 rounded px-2 py-1.5 text-xs flex justify-between items-center">
                        <span>Virtual</span>
                        <ArrowRight className="w-3 h-3 rotate-90 text-slate-300" />
                    </div>
                 </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase">Card Network</label>
                    <div className="w-full border border-slate-200 rounded px-2 py-1.5 text-xs flex justify-between items-center">
                        <span>Visa</span>
                        <ArrowRight className="w-3 h-3 rotate-90 text-slate-300" />
                    </div>
                 </div>
                 <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 rounded-lg mt-2">Create Card Now</button>
              </div>
            </div>
          </div>

          {/* CARD 3: SCALABILITY */}
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Maximize2 className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                <h3 className="text-2xl font-medium">Scalability</h3>
              </div>
              <p className="text-slate-500 leading-relaxed">
                A robust, API-driven system built to seamlessly support startups and enterprises, providing the flexibility, scalability, and security.
              </p>
            </div>

            {/* Visual: API Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden text-sm">
                <div className="bg-black text-white grid grid-cols-12 p-3 font-medium text-xs">
                    <div className="col-span-3">Category</div>
                    <div className="col-span-4">API Example</div>
                    <div className="col-span-5">Purpose</div>
                </div>
                <div className="bg-white divide-y divide-slate-100">
                    {/* Row 1 */}
                    <div className="grid grid-cols-12 p-3 items-center">
                        <div className="col-span-3 font-medium text-slate-900 text-xs">Payments</div>
                        <div className="col-span-4"><span className="bg-orange-100 text-orange-700 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">POST</span> <span className="text-[10px] text-slate-500 font-mono">/payments</span></div>
                        <div className="col-span-5 text-slate-500 text-xs">Process transactions at scale</div>
                    </div>
                     {/* Row 2 */}
                     <div className="grid grid-cols-12 p-3 items-center">
                        <div className="col-span-3 font-medium text-slate-900 text-xs">Multi-Currency</div>
                        <div className="col-span-4"><span className="bg-green-100 text-green-700 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">GET</span> <span className="text-[10px] text-slate-500 font-mono">/exchange-rates</span></div>
                        <div className="col-span-5 text-slate-500 text-xs">Access live FX rates for 100+ currencies</div>
                    </div>
                     {/* Row 3 */}
                     <div className="grid grid-cols-12 p-3 items-center">
                        <div className="col-span-3 font-medium text-slate-900 text-xs">User Management</div>
                        <div className="col-span-4"><span className="bg-orange-100 text-orange-700 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">POST</span> <span className="text-[10px] text-slate-500 font-mono">/users</span></div>
                        <div className="col-span-5 text-slate-500 text-xs">Create & manage customers dynamically</div>
                    </div>
                     {/* Row 4 */}
                     <div className="grid grid-cols-12 p-3 items-center">
                        <div className="col-span-3 font-medium text-slate-900 text-xs">Security</div>
                        <div className="col-span-4"><span className="bg-orange-100 text-orange-700 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">POST</span> <span className="text-[10px] text-slate-500 font-mono">/fraud-detection</span></div>
                        <div className="col-span-5 text-slate-500 text-xs">AI-powered fraud detection for safe scaling</div>
                    </div>
                     {/* Row 5 */}
                     <div className="grid grid-cols-12 p-3 items-center">
                        <div className="col-span-3 font-medium text-slate-900 text-xs">Scalability</div>
                        <div className="col-span-4"><span className="bg-green-100 text-green-700 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">GET</span> <span className="text-[10px] text-slate-500 font-mono">/server-status</span></div>
                        <div className="col-span-5 text-slate-500 text-xs">Monitor infrastructure health & uptime</div>
                    </div>
                     {/* Row 6 */}
                     <div className="grid grid-cols-12 p-3 items-center">
                        <div className="col-span-3 font-medium text-slate-900 text-xs">Custom Workflows</div>
                        <div className="col-span-4"><span className="bg-orange-100 text-orange-700 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">POST</span> <span className="text-[10px] text-slate-500 font-mono">/webhooks</span></div>
                        <div className="col-span-5 text-slate-500 text-xs">Automate workflows with real-time webhooks</div>
                    </div>
                </div>
            </div>
          </div>

          {/* CARD 4: COMPLIANCE & SECURITY */}
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                <h3 className="text-2xl font-medium">Compliance & Security</h3>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Built-in KYC, AML, and fraud prevention measures to keep every transaction safe and compliant.
              </p>
            </div>

            {/* Visual: Grid of Cards */}
            <div className="bg-white rounded-2xl p-4">
                <div className="grid grid-cols-2 gap-4">
                    {/* Item 1 - Black */}
                    <div className="bg-black text-white rounded-xl p-6 flex flex-col items-center justify-center gap-3 h-32 shadow-lg">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <Lock className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-medium">Tokenization</span>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white border border-slate-100 text-slate-900 rounded-xl p-6 flex flex-col items-center justify-center gap-3 h-32 shadow-sm">
                        <div className="bg-slate-50 p-2 rounded-lg">
                             <div className="w-5 h-5 flex items-center justify-center font-bold text-slate-700 text-xs">|**|</div>
                        </div>
                        <span className="text-xs font-medium">MFA</span>
                    </div>

                     {/* Item 3 */}
                     <div className="bg-white border border-slate-100 text-slate-900 rounded-xl p-6 flex flex-col items-center justify-center gap-3 h-32 shadow-sm">
                        <div className="bg-slate-50 p-2 rounded-lg">
                            <Siren className="w-5 h-5 text-slate-700" />
                        </div>
                        <span className="text-xs font-medium">Fraud Detection</span>
                    </div>

                     {/* Item 4 */}
                     <div className="bg-white border border-slate-100 text-slate-900 rounded-xl p-6 flex flex-col items-center justify-center gap-3 h-32 shadow-sm">
                        <div className="bg-slate-50 p-2 rounded-lg">
                            <Lock className="w-5 h-5 text-slate-700" />
                        </div>
                        <span className="text-xs font-medium">PCI DSS Compliance</span>
                    </div>

                     {/* Item 5 */}
                     <div className="bg-white border border-slate-100 text-slate-900 rounded-xl p-6 flex flex-col items-center justify-center gap-3 h-32 shadow-sm">
                        <div className="bg-slate-50 p-2 rounded-lg">
                            <Scale className="w-5 h-5 text-slate-700" />
                        </div>
                        <span className="text-xs font-medium">Dispute Protection</span>
                    </div>

                     {/* Item 6 */}
                     <div className="bg-white border border-slate-100 text-slate-900 rounded-xl p-6 flex flex-col items-center justify-center gap-3 h-32 shadow-sm">
                        <div className="bg-slate-50 p-2 rounded-lg">
                            <Activity className="w-5 h-5 text-slate-700" />
                        </div>
                        <span className="text-xs font-medium">Monitoring</span>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FintechFeatureSection;