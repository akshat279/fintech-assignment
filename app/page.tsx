import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhiteFeatureSection from "../components/WhiteFeatureSection";
import FeatureCard from "../components/FeatureCard";
import DeveloperSection from "../components/DeveloperSection";
import SecuritySection from "../components/SecuritySection";
import Testimonials from "../components/Testimonials";
import PricingCard from "../components/PricingCard";
import Footer from "../components/Footer";
import { ShoppingCart, Workflow, Landmark, Building2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <WhiteFeatureSection />

      {/* Dark Grid Section - "Who Is It For?" */}
      <section className="py-24 px-6 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
        {/* Subtle CSS Grid Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-blue-500 font-bold mb-4 uppercase text-xs tracking-widest">
              Who Is It For?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Financial Solutions for Every Industry
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Our platform empowers you to handle transactions, streamline operations, and integrate financial services seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<ShoppingCart className="w-8 h-8 text-white" strokeWidth={1.5} />} 
              title="For Marketplaces" 
              description="Seamless money movement between buyers and sellers." 
            />
            <FeatureCard 
              icon={<Workflow className="w-8 h-8 text-white" strokeWidth={1.5} />} 
              title="For SaaS Platforms" 
              description="Embed financial services into your software with minimal effort." 
            />
            <FeatureCard 
              icon={<Landmark className="w-8 h-8 text-white" strokeWidth={1.5} />} 
              title="For Fintech Startups" 
              description="Build your own banking solutions with ease." 
            />
            <FeatureCard 
              icon={<Building2 className="w-8 h-8 text-white" strokeWidth={1.5} />} 
              title="For Enterprises" 
              description="Custom financial solutions to optimize operations at scale." 
            />
          </div>
        </div>
      </section>

      {/* Developer Section (Matches the bottom half of your screenshot) */}
      <DeveloperSection />
      
      <SecuritySection />
      <Testimonials />

      {/* Pricing Section - Kept as is */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Find the Right Plan</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              <PricingCard planName="Starter" price="$0" description="For freelancers." features={["Basic Access"]} />
              <PricingCard planName="Growth" price="$99" isPopular={true} description="For scaling teams." features={["Priority Support"]} />
              <PricingCard planName="Scale" price="Custom" description="For enterprises." features={["Everything unlimited"]} />
           </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 px-6 bg-[#0B0F19] text-center relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[100px] rounded-full -z-10" />
         <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Scale Your Payments?</h2>
         <p className="text-slate-400 mb-8 max-w-xl mx-auto">Join thousands of businesses worldwide using Fintech to simplify transactions.</p>
         <div className="flex justify-center gap-4">
             <div className="relative">
                <input type="email" placeholder="Send your email" className="bg-white/10 text-white pl-6 pr-32 py-3 rounded-full border border-white/20 focus:border-blue-500 outline-none w-80 backdrop-blur-sm" />
                <button className="absolute right-1 top-1 bottom-1 bg-blue-600 text-white px-4 rounded-full text-sm font-bold hover:bg-blue-500 transition-colors">Talk to Sales</button>
             </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}