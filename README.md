# Wedding E-Invitation

A beautiful, modern wedding invitation website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Beautiful, elegant design with custom animations
- ⏰ Live countdown timer to the wedding day
- 📱 Fully responsive design
- 🎭 Smooth scroll animations using Framer Motion
- 📝 RSVP form for guests
- 🖼️ Photo gallery section
- 💌 Our Story section
- 🎯 Event details with date, time, and venue information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Update Wedding Details

Edit the following files to customize your invitation:

- **Hero Section**: `components/Hero.tsx`
  - Change couple names
  - Update date, time, and venue

- **Event Details**: `components/EventDetails.tsx`
  - Update countdown timer target date
  - Modify event information

- **Our Story**: `components/OurStory.tsx`
  - Add your personal love story

- **RSVP Form**: `components/RSVP.tsx`
  - Customize form fields
  - Connect to your backend API

### Colors & Theme

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  cream: "#F5F0E8",
  gold: "#D4AF37",
  sage: "#8A9A5B",
}
```

### Fonts

Current fonts used:
- **Script Font**: Great Vibes (for couple names)
- **Body Font**: Cormorant Garamond (for text)

Change fonts in `app/globals.css` by updating the Google Fonts import.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with main invitation
│   ├── EventDetails.tsx    # Event info & countdown
│   ├── OurStory.tsx        # Love story section
│   ├── Gallery.tsx         # Photo gallery
│   ├── RSVP.tsx           # RSVP form
│   └── Footer.tsx         # Footer with social links
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

### Other Hosting Options

- **Netlify**: Connect your GitHub repo and deploy
- **AWS Amplify**: Use AWS hosting services
- **Custom Server**: Build with `npm run build` and serve the `.next` folder

## RSVP Form Backend

The current RSVP form logs data to the console. To make it functional:

1. **Option 1**: Use a service like [Formspree](https://formspree.io/) or [Getform](https://getform.io/)
2. **Option 2**: Build your own API endpoint in `app/api/rsvp/route.ts`
3. **Option 3**: Use a database like Firebase or Supabase

## License

This project is open source and available for personal use.

## Support

For questions or issues, please open an issue on GitHub.

---

**Made with ❤️ for Sophia & Andre's special day**
