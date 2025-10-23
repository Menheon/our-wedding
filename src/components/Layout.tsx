import { Outlet, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-rose-600 hover:text-rose-700 transition-colors">
              Our Wedding
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
                activeProps={{ className: "text-rose-600 font-semibold" }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
                activeProps={{ className: "text-rose-600 font-semibold" }}
              >
                Our Story
              </Link>
              <Link 
                to="/gallery" 
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
                activeProps={{ className: "text-rose-600 font-semibold" }}
              >
                Gallery
              </Link>
              <Link 
                to="/rsvp" 
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
                activeProps={{ className: "text-rose-600 font-semibold" }}
              >
                RSVP
              </Link>
              <Link 
                to="/registry" 
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
                activeProps={{ className: "text-rose-600 font-semibold" }}
              >
                Registry
              </Link>
              <Link 
                to="/contact" 
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
      <footer className="bg-white/80 backdrop-blur-sm border-t border-rose-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="text-lg font-medium text-rose-600 mb-2">
              Join us in celebrating our special day
            </p>
            <p className="text-sm">
              © 2024 Our Wedding Website. Made with ❤️
            </p>
          </div>
        </div>
      </footer>

      {/* Router Devtools */}
      <TanStackRouterDevtools />
    </div>
  )
}