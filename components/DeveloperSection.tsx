import React from 'react';
import { ArrowRight, CodeXml, FileCode, Box } from 'lucide-react';

export default function DeveloperSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0F19] relative overflow-hidden">
       
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        
        <div>
          <span className="text-blue-500 font-bold uppercase text-xs tracking-widest mb-4 block">
            API & Developer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Seamless Integration with Powerful Developer Tools
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Integrate Fintech effortlessly with our developer-friendly APIs, designed for speed, security, and scalability.
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all mb-10">
            Explore API Docs <ArrowRight className="w-4 h-4" />
          </button>

          <div className="space-y-5">
            <div className="flex items-center gap-3 text-slate-300">
              <CodeXml className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
              <span className="text-base font-medium">RESTful APIs & Webhooks</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <FileCode className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
              <span className="text-base font-medium">SDKs for Multiple Languages</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Box className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
              <span className="text-base font-medium">Sandbox for Testing</span>
            </div>
          </div>
        </div>

        
        <div className="relative">
            
            <div className="bg-white rounded-xl border border-slate-200 shadow-2xl shadow-blue-900/5 overflow-hidden font-mono text-sm relative z-20">
                
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>

                
                <div className="p-6 text-slate-800 leading-relaxed overflow-x-auto bg-white">
                    <div className="mb-1">
                        <span className="text-emerald-600 font-bold">GET</span> <span className="text-slate-600">/transactions/</span><span className="text-blue-600">txn_67890</span>
                    </div>
                    <div>
                        <span className="text-slate-500">Host:</span> <span className="text-emerald-600">api.fintech.com</span>
                    </div>
                    <div>
                        <span className="text-slate-500">Authorization:</span> <span className="text-slate-800">Bearer</span> <span className="text-orange-600">YOUR_API_KEY</span>
                    </div>
                    <div>
                        <span className="text-slate-500">Content-Type:</span> <span className="text-blue-600">application</span><span className="text-slate-400">/</span><span className="text-blue-600">json</span>
                    </div>
                    <div>
                        <span className="text-slate-500">Accept:</span> <span className="text-blue-600">application</span><span className="text-slate-400">/</span><span className="text-blue-600">json</span>
                    </div>
                    <div>
                        <span className="text-slate-500">User-Agent:</span> <span className="text-slate-800">PaymentClient</span><span className="text-blue-600">/1.0</span>
                    </div>
                    <div>
                        <span className="text-slate-500">Connection:</span> <span className="text-emerald-600">keep-alive</span>
                    </div>
                    <div>
                        <span className="text-slate-500">X-Request-ID:</span> <span className="text-blue-600">req_123456789</span>
                    </div>
                    <div>
                        <span className="text-slate-500">X-Client-Version:</span> <span className="text-blue-600">1.2.3</span>
                    </div>
                    <div>
                        <span className="text-slate-500">Referer:</span> <span className="text-emerald-600">https://dashboard.paymentprovider.com</span>
                    </div>
                    <div>
                        <span className="text-slate-500">Cache-Control:</span> <span className="text-emerald-600">no-cache</span>
                    </div>
                    <div>
                        <span className="text-slate-500">Accept-Encoding:</span> <span className="text-orange-600">gzip</span><span className="text-slate-400">,</span> <span className="text-orange-600">deflate</span><span className="text-slate-400">,</span> <span className="text-orange-600">br</span>
                    </div>
                    <div>
                        <span className="text-slate-500">Accept-Language:</span> <span className="text-orange-600">en-US</span><span className="text-slate-400">,</span><span className="text-orange-600">en</span><span className="text-slate-400">;q=</span><span className="text-blue-600">0.9</span>
                    </div>
                    <div>
                        <span className="text-slate-500">X-Forwarded-For:</span> <span className="text-emerald-600">192.168.1.100</span>
                    </div>
                    <div>
                        <span className="text-slate-500">X-Api-Signature:</span> <span className="text-orange-600">sha256</span><span className="text-slate-400">=</span><span className="text-blue-600">abcdef1234567890</span>
                    </div>
                    <div>
                        <span className="text-slate-500">DNT:</span> <span className="text-blue-600">1</span>
                    </div>
                    <div>
                        <span className="text-slate-500">Pragma:</span> <span className="text-slate-800">no-cache</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}