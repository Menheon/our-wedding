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

## 📧 RSVP Email Setup

Since you're using **GitHub Pages**, here are the best options for email integration:

### Option 1: Formspree (Recommended for GitHub Pages)

Perfect for static sites on GitHub Pages! The form is already configured with proper field names.

**Setup Steps:**

1. Sign up at [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Create a new form and get your form endpoint
3. Update the form action in `src/pages/RSVP.tsx`:
   ```tsx
   <form
     action="https://formspree.io/f/YOUR_FORM_ID"
     method="POST"
     className="space-y-8"
   >
   ```
4. Remove the Netlify-specific attributes:
   - Remove `data-netlify="true"`
   - Remove `netlify-honeypot="bot-field"`
   - Keep the honeypot field for spam protection

**Benefits:**

- ✅ Works perfectly with GitHub Pages
- ✅ Emails sent directly to kasper.d.borg@gmail.com
- ✅ Built-in spam protection
- ✅ Form submissions dashboard
- ✅ Free tier available

### Option 2: EmailJS (Client-side only)

**No backend needed - sends emails directly from the browser!**

**Setup Steps:**

1. Sign up at [emailjs.com](https://emailjs.com) (free tier: 200 emails/month)
2. Create email service (connect your Gmail)
3. Install EmailJS: `pnpm add @emailjs/browser`
4. Replace the form with EmailJS integration

**Benefits:**

- ✅ Works perfectly with GitHub Pages
- ✅ No server required
- ✅ Send emails directly from your Gmail account
- ✅ Custom email templates

### Option 3: Web3Forms (Alternative)

**Another great option for static sites:**

1. Sign up at [web3forms.com](https://web3forms.com) (free: unlimited submissions)
2. Get your access key
3. Update form action to `https://api.web3forms.com/submit`
4. Add access key as hidden input

### Option 4: Netlify Forms (If you want to switch)

You could deploy to Netlify instead of GitHub Pages - the form is already configured for this.

### Option 5: Custom Backend (Advanced)

Build a Node.js/Express backend with:

- Gmail API or Nodemailer for sending emails
- Deploy to Vercel, Railway, or similar platform

## 🎨 Customization

### Content

- Update wedding details in `Home.tsx`
- Modify the love story in `OurStory.tsx`
- Add your photos to `src/assets/images/`
- Update contact information in `RSVP.tsx`

### Colors

The wedding color palette is defined in `tailwind.config.js`:

- Navy: `#215076`
- Sage: `#708F7B`
- Terracotta: `#CF9D85`
- Blush: `#F1CBBC`
- Cream: `#FFFAF3`

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
