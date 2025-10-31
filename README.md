# Wedding Website

A beautiful, modern wedding website built with React 19, Vite, Tailwind CSS 4, and TanStack Router.

## 🌟 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS 4
- **Client-side Routing**: TanStack Router for smooth navigation
- **Responsive Design**: Beautiful on all devices
- **Wedding-focused Pages**: Home, Our Story, RSVP, Gallery, Registry, Contact
- **Interactive Elements**: RSVP form, countdown timer, photo gallery
- **Performance Optimized**: Fast loading with Vite and Rolldown

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone or download this project
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout.tsx      # Main layout with navigation
├── pages/              # Route components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # Our story page
│   ├── RSVP.tsx        # RSVP form page
│   ├── Gallery.tsx     # Photo gallery
│   ├── Registry.tsx    # Wedding registry (coming soon)
├── router.tsx          # TanStack Router configuration
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles with Tailwind
```

## 🎨 Customization

### Content

## 🛠 Technology Stack

- **React 19**: Latest React with new features and optimizations
- **TypeScript**: Type safety and better development experience
- **Vite**: Fast build tool with Rolldown bundler
- **Tailwind CSS 4**: Utility-first CSS framework (latest version)
- **TanStack Router**: Type-safe client-side routing

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

---

Made with ❤️ using modern web technologies
