# Cafe De Anatolia - Website Clone

A modern Next.js recreation of the Cafe De Anatolia website, featuring a record label and artists management platform with events ticketing functionality.

## Features

- **Home Page** - Hero section with tagline, social links, and music platform badges
- **Releases Page** - Links to all major music platforms and YouTube channels
- **Artists Page** - Gallery of 100+ artists with images
- **Events Page** - Upcoming events with **5 touch button options** for purchasing tickets from different sellers
- **E-Shop Page** - External links to music stores and merchandise
- **About Page** - Brand story and statistics
- **Contact Page** - Contact form and social links

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling
- **Responsive Design** - Works on all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd cafe-de-anatolia
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
cafe-de-anatolia/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── artists/page.tsx   # Artists page
│   │   ├── events/page.tsx   # Events page
│   │   ├── releases/page.tsx # Releases page
│   │   ├── shop/page.tsx     # E-Shop page
│   │   ├── about/page.tsx    # About page
│   │   └── contact/page.tsx  # Contact page
│   └── components/
│       ├── Navbar.tsx         # Navigation
│       └── Footer.tsx         # Footer
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Customization

### Adding Events

Edit `src/app/events/page.tsx` to add or modify events. Each event can have up to 5 ticket seller links with custom names and colors.

### Adding Artists

Edit `src/app/artists/page.tsx` to add or modify artists.

### Modifying Colors

Edit `tailwind.config.ts` to change the color scheme.

## License

This is a learning project. The original website content belongs to Cafe De Anatolia.
