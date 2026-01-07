import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-white pt-24 pb-12 border-t border-gray-100 overflow-hidden">
      {/* Background Dot Pattern (simulated with CSS) */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 gap-x-8 mb-20">

          {/* COL 1: BRAND & LOGO */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start">
            {/* Logo Section */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                 {/* Simple geometric icon to match screenshot */}
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16v4h-10v4h8v4h-8v4h-6z" fill="white" />
                 </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">finech</span>
            </div>
            
            {/* Email Link */}
            <a href="mailto:support@finech.com" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
              support@finech.com
            </a>
          </div>

          {/* COL 2: COMPANY */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* COL 3: PRODUCTS */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Payments</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">API & Developer Docs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Security</a></li>
            </ul>
          </div>

          {/* COL 4: RESOURCES */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Webinars</a></li>
            </ul>
          </div>

          {/* COL 5: LEGAL */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Security & Trust</a></li>
            </ul>
          </div>

           {/* COL 6: CONTACT */}
           <div>
            <h4 className="text-gray-900 font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Partnerships</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2025 Finech. All Rights Reserved.
          </p>

          <div className="flex gap-8 font-medium text-gray-900">
            <a href="#" className="hover:text-blue-600 transition-colors">Login</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Sign Up</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;