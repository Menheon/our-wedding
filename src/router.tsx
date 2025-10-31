import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { OurStory } from "./pages/OurStory";
import { RSVP } from "./pages/RSVP";
import { Gallery } from "./pages/Gallery";

// Create the root route
const rootRoute = createRootRoute({
  component: Layout,
});

// Create the index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/our-wedding",
  component: Home,
});

const outStoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/our-wedding/our-story",
  component: OurStory,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/our-wedding/gallery",
  component: Gallery,
});

const rsvpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/our-wedding/rsvp",
  component: RSVP,
});

const registryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/our-wedding/registry",
  component: () => <div>Wedding Registry - Coming Soon!</div>,
});

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  outStoryRoute,
  galleryRoute,
  rsvpRoute,
  registryRoute,
]);

// Create the router
export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
