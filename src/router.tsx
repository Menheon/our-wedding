import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import RSVP from './pages/RSVP'

// Create the root route
const rootRoute = createRootRoute({
  component: Layout,
})

// Create the index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: () => <div>Photo Gallery - Coming Soon!</div>,
})

const rsvpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rsvp',
  component: RSVP,
})

const registryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/registry',
  component: () => <div>Wedding Registry - Coming Soon!</div>,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => <div>Contact Us - Coming Soon!</div>,
})

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  galleryRoute,
  rsvpRoute,
  registryRoute,
  contactRoute,
])

// Create the router
export const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}