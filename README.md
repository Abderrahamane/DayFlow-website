# DayFlow Website

Official website for DayFlow, a smart daily planner Android application that helps users organize tasks, build habits, manage focus sessions, and keep notes in one calm, intuitive interface.

**Live Website:** https://day-flow-website.vercel.app/

## Overview

This is the marketing and information website for the DayFlow mobile application. Built with modern web technologies to provide a clean, professional, and responsive experience across all devices.

## Technology Stack

- **Framework:** Next.js 16.1.0 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React (with custom SVG icons)
- **Theme:** next-themes (light/dark mode support)
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── page.tsx      # Home page
│   ├── features/     # Features page
│   ├── screenshots/  # Screenshots carousel
│   ├── team/         # Team page with member profiles
│   ├── download/     # Download and installation
│   └── about/        # About DayFlow
├── components/       # Reusable React components
└── content/          # Site content and configuration

public/
├── features/         # Custom feature icons (SVG)
├── screenshots/      # App screenshots
├── team/             # Team member photos
└── dayflow.apk       # Android APK download
```

## Pages

- **Home** - Hero section with app overview and call-to-action
- **Features** - Detailed feature breakdown with custom icons
- **Screenshots** - Interactive carousel showcasing app screens
- **Team** - Team member profiles with expandable modals
- **Download** - APK download and installation instructions
- **About** - Project information and vision

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
```

## Deployment

The website is automatically deployed on Vercel. Any push to the master branch triggers a new deployment.

For manual deployment or other platforms, see `DEPLOYMENT.md`.

## Features

- Fully responsive design (mobile-first approach)
- Light and dark theme support with smooth transitions
- Static site generation for optimal performance
- SEO optimized with Open Graph and Twitter Card metadata
- Accessible navigation and interactive elements
- Custom SVG icons for features
- Smooth animations and transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a private project for the DayFlow application. For questions or suggestions, please contact the team through the website.

## Repository

https://github.com/Abderrahamane/DayFlow-website

## License

Copyright 2025 DayFlow Team. All rights reserved.
