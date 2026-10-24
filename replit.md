# AI Chroney

## Overview
AI Chroney is a business-focused AI agent platform website built with React + Express. It showcases autonomous agents for Website, WhatsApp, and Instagram channels — answering product queries, capturing leads, and supporting customers. Also includes AI Vista (Visual Intelligence Platform).

## Project Architecture
- **Frontend**: React 18 + Vite + TypeScript + Tailwind CSS + shadcn/ui components + framer-motion
- **Backend**: Express.js serving both API routes and the Vite dev server
- **Routing**: wouter (client-side)
- **State**: @tanstack/react-query
- **Storage**: In-memory storage for contact form submissions
- **Icons**: lucide-react + react-icons (FaWhatsapp, FaInstagram)

## Project Structure
```
├── client/             # React frontend source
│   ├── src/
│   │   ├── components/ # UI components (navigation, footer, logo, etc.)
│   │   ├── pages/      # Page components (home, faq, contact, chroney-assist, whatsapp-agent, instagram-agent, ai-vista)
│   │   ├── hooks/      # Custom React hooks
│   │   └── lib/        # Utility libraries
│   ├── index.html      # HTML entry point
│   └── public/         # Static assets
├── server/             # Express backend
│   ├── index.ts        # Server entry point (port 5000)
│   ├── routes.ts       # API routes (contact form, admin)
│   ├── storage.ts      # In-memory data storage
│   └── vite.ts         # Vite dev server integration
├── shared/             # Shared types/utilities
├── vite.config.ts      # Vite configuration
├── package.json        # Dependencies and scripts
└── attached_assets/    # Image assets
```

## Key Pages
- **Home** (`/`): Hero with 3 channel icons, chat demo tabs (Website/WhatsApp/Instagram), channel agent cards, trusted brands
- **Chroney Assist / Website Agent** (`/products/chroney-assist`): Website AI chatbot product page
- **WhatsApp Agent** (`/products/whatsapp-agent`): WhatsApp Business AI agent product page
- **Instagram Agent** (`/products/instagram-agent`): Instagram DM automation product page
- **AI Vista** (`/products/ai-vista`): Visual Intelligence Platform product page
- **FAQ** (`/faq`): 10 channel-focused questions with accordion UI
- **Contact** (`/contact`): Contact info + AI chatbot CTA (no form)

## Key Scripts
- `npm run dev` - Start development server (port 5000)
- `npm run build` - Build for production
- `npm run start` - Start production server

## Navigation
- Products dropdown: 4 items in 2 groups (AI Agents: Website/WhatsApp/Instagram + Tools: AI Vista)
- All CTAs link to WhatsApp: `https://wa.me/919999080825`
- Admin route: `GET /api/admin/contact` with Bearer token `Abhk#8shm3`

## Recent Changes
- 2026-03-01: Created dedicated WhatsApp Agent and Instagram Agent pages with channel-specific theming, chat widgets, stats, features, and CTAs
- 2026-03-01: Updated nav dropdown links to point to separate pages for each channel agent
- 2026-03-01: Removed AI Vista section from home page
- 2026-03-01: Restructured Products dropdown to show 3 channel agents + AI Vista with grouped labels and icons
- 2026-03-01: Polished FAQ, Playground, and Contact pages with consistent elegant styling (gradient badges, motion animations, rounded cards)
- 2026-02-16: Initial import and Replit environment setup
