import { Outlet, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

export const Layout = () => {
  // Scroll to top on route change
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-blush-50 to-sage-50">
      {/* Navigation */}
      <nav className="bg-wedding-cream/95 backdrop-blur-md shadow-lg border-b border-sage-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <Link
              to="/our-wedding"
              className="text-3xl font-script font-bold bg-gradient-to-r from-wedding-navy to-sage-600 bg-clip-text text-transparent hover:from-wedding-navy hover:to-terracotta-500 transition-all duration-300"
            >
              Lylian & Kasper
            </Link>

            {/* Desktop Navigation */}
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
                activeProps={{ className: "text-terracotta-500 font-semibold" }}
              >
                Registry
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-wedding-navy to-terracotta-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-wedding-navy hover:text-terracotta-500 hover:bg-sage-100/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-terracotta-500 transition-all duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <svg
                  className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close Icon */}
                <svg
                  className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-wedding-cream/95 backdrop-blur-md border-t border-sage-200/50 shadow-lg">
              <Link
                to="/our-wedding"
                className="block px-4 py-3 text-wedding-navy hover:text-terracotta-500 hover:bg-sage-50/50 rounded-lg transition-all duration-200 font-medium text-lg"
                activeProps={{
                  className: "text-terracotta-500 bg-sage-50/50 font-semibold",
                }}
              >
                Home
              </Link>
              <Link
                to="/our-wedding/our-story"
                className="block px-4 py-3 text-wedding-navy hover:text-terracotta-500 hover:bg-sage-50/50 rounded-lg transition-all duration-200 font-medium text-lg"
                activeProps={{
                  className: "text-terracotta-500 bg-sage-50/50 font-semibold",
                }}
              >
                Our Story
              </Link>
              <Link
                to="/our-wedding/gallery"
                className="block px-4 py-3 text-wedding-navy hover:text-terracotta-500 hover:bg-sage-50/50 rounded-lg transition-all duration-200 font-medium text-lg"
                activeProps={{
                  className: "text-terracotta-500 bg-sage-50/50 font-semibold",
                }}
              >
                Gallery
              </Link>
              <Link
                to="/our-wedding/rsvp"
                className="block px-4 py-3 text-wedding-navy hover:text-terracotta-500 hover:bg-sage-50/50 rounded-lg transition-all duration-200 font-medium text-lg"
                activeProps={{
                  className: "text-terracotta-500 bg-sage-50/50 font-semibold",
                }}
              >
                RSVP
              </Link>
              <Link
                to="/our-wedding/registry"
                className="block px-4 py-3 text-wedding-navy hover:text-terracotta-500 hover:bg-sage-50/50 rounded-lg transition-all duration-200 font-medium text-lg"
                activeProps={{
                  className: "text-terracotta-500 bg-sage-50/50 font-semibold",
                }}
              >
                Registry
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
