import { Outlet, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export const Layout = () => {
  // Scroll to top on route change
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-blush-50 to-sage-50">
      {/* Navigation */}
      <nav className="bg-wedding-cream/95 backdrop-blur-md shadow-lg border-b border-sage-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <Link
              to="/"
              className="text-3xl font-script font-bold bg-gradient-to-r from-wedding-navy to-sage-600 bg-clip-text text-transparent hover:from-wedding-navy hover:to-terracotta-500 transition-all duration-300"
            >
              Lylian & Kasper
            </Link>
            <div className="hidden md:flex space-x-10">
              <Link
                to="/our-wedding"
                className="relative text-wedding-navy hover:text-terracotta-500 transition-all duration-300 font-medium text-lg group"
                activeProps={{ className: "text-terracotta-500 font-semibold" }}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-wedding-navy to-terracotta-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/our-wedding/our-story"
                className="relative text-wedding-navy hover:text-terracotta-500 transition-all duration-300 font-medium text-lg group"
                activeProps={{ className: "text-terracotta-500 font-semibold" }}
              >
                Our Story
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-wedding-navy to-terracotta-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/our-wedding/gallery"
                className="relative text-wedding-navy hover:text-terracotta-500 transition-all duration-300 font-medium text-lg group"
                activeProps={{ className: "text-terracotta-500 font-semibold" }}
              >
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-wedding-navy to-terracotta-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/our-wedding/rsvp"
                className="relative text-wedding-navy hover:text-terracotta-500 transition-all duration-300 font-medium text-lg group"
                activeProps={{ className: "text-terracotta-500 font-semibold" }}
              >
                RSVP
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-wedding-navy to-terracotta-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/our-wedding/registry"
                className="relative text-wedding-navy hover:text-terracotta-500 transition-all duration-300 font-medium text-lg group"
                activeProps={{ className: "text-rose-600 font-semibold" }}
              >
                Registry
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/our-wedding/contact"
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
                activeProps={{ className: "text-rose-600 font-semibold" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-wedding-cream via-blush-100 to-sage-50 border-t border-sage-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-3xl font-script font-bold bg-gradient-to-r from-wedding-navy to-terracotta-500 bg-clip-text text-transparent mb-3">
                Lylian & Kasper
              </h3>
              <p className="text-lg font-medium text-wedding-navy mb-2">
                Join us in celebrating our special day
              </p>
              <p className="text-sage-600">
                May 30, 2026 • Topkær Fest • Århus, Denmark
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
