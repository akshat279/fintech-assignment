import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-[#0B0F1A]/80 backdrop-blur-md border-b border-white/5" />

      <nav className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-white">

        {/* LOGO */}
        <div className="text-lg font-semibold tracking-tight">
          finech
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-sm text-slate-300">
          <Link href="#" className="hover:text-white transition">
            Home
          </Link>
          <Link href="#" className="hover:text-white transition">
            Solutions
          </Link>
          <Link href="#" className="hover:text-white transition">
            Integrations
          </Link>
          <Link href="#" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="#" className="hover:text-white transition">
            Resources
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-5">
          <button className="text-sm text-slate-300 hover:text-white transition">
            Login
          </button>
          <button className="h-9 px-5 rounded-full bg-blue-600 hover:bg-blue-700 transition text-sm font-medium text-white">
            Get Started →
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
