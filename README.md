# EQ Counseling & Testing — Website

Professional website for **EQ Counseling & Testing LLC** — a mental health practice in Orlando, FL, founded in 2012 by Dr. Ronit Navon.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Language:** TypeScript
- **Icons:** [Lucide React](https://lucide.dev)
- **Fonts:** Montserrat (headings) + Inter (body) via `next/font/google`

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Services, About, Testimonials, CTA |
| `/therapists` | Team profiles — Dr. Navon, Dr. Polanco, Sandra Zeni, Veronica Dickens |
| `/assessments` | Psychological evaluations & testing |
| `/counseling` | Individual, couples, family & teen/child therapy |
| `/supervision` | Clinical supervision for LMHC & LMFT interns |
| `/mediation` | EQ Divorce Mediation services |
| `/rates` | Session fees, testing costs, insurance info |
| `/forms` | Client forms (portal placeholder) |
| `/contact` | Contact info, hours, office locations |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout + metadata + fonts
│   ├── globals.css         # Global styles + Tailwind directives
│   ├── page.tsx            # Homepage
│   ├── therapists/
│   ├── assessments/
│   ├── counseling/
│   ├── supervision/
│   ├── mediation/
│   ├── rates/
│   ├── forms/
│   └── contact/
├── components/
│   ├── Navbar.tsx          # Sticky navbar with mobile menu & dropdown
│   ├── Footer.tsx          # Full footer with links & contact
│   ├── Logo.tsx            # SVG logo component
│   ├── PageHero.tsx        # Reusable inner-page hero banner
│   └── TherapistAvatar.tsx # Avatar placeholder for therapist photos
└── public/
    └── images/             # Place therapist & site images here
```

## Adding Therapist Photos

Replace the `TherapistAvatar` components with `next/image` once real photos are available:

1. Add photos to `/public/images/` (e.g., `dr-navon.jpg`)
2. In `app/therapists/page.tsx`, replace `<TherapistAvatar ... />` with:
   ```tsx
   import Image from 'next/image'
   <Image src="/images/dr-navon.jpg" alt="Dr. Ronit Navon" width={144} height={144} className="rounded-full object-cover" />
   ```

## Contact

- **Phone:** 407-461-9721
- **Email:** ronit@eqcounselingtesting.com
- **Website:** [eqcounselingtesting.com](https://eqcounselingtesting.com)
