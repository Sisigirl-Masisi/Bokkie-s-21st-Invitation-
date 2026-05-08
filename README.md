# Next.js

A custom-designed digital invitation platform developed for a 21st birthday weekend getaway .
This project transforms a traditional invite into an interactive online experience.

## Features

- **Next.js 15** — Latest version with improved performance and features
- **React 19** — Latest React version with enhanced capabilities
- **Tailwind CSS** — Utility-first CSS framework for a stunning, responsive UI
- **Custom Invitation Design** — Tailored specifically for a 21st birthday celebration
- **RSVP Functionality** — Guests can confirm their attendance seamlessly

## Installation

1. Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  ```

2. Start the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```
3. Open [http://localhost:4028](http://localhost:4028) with your browser to see the result.

## 📁 Project Structure

```
nextjs/
├── public/             # Images and static assets
├── src/
│   ├── app/            # App router
│   │   ├── layout.tsx
│   │   └── page.tsx    # Main invitation page
│   ├── components/     # Reusable components
│   ├── styles/         # Tailwind + global styles
├── next.config.mjs
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

##  Styling

This project uses Tailwind CSS for styling with the following features:
- Utility-first approach for rapid development
- Custom theme configuration
- Responsive design utilities
- PostCSS and Autoprefixer integration

## 📦 Available Scripts

- `npm run dev` - Start development server on port 4028
- `npm run build` - Build the application for production
- `npm run start` - Start the development server
- `npm run serve` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier



``````