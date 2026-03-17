# JUNK IT V5 — Junk Removal Landing Page

## Setup Instructions

### 1. Formspree (Form Submission)
The quote form submits to Formspree. To activate:
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID (e.g., `xrgvalob`)
3. In `src/components/QuoteForm.tsx`, replace `YOUR_FORMSPREE_ID` with your actual ID
4. In Formspree settings, set the forwarding email to `junkitv5@gmail.com`

### 2. Replacing Images
- **Hero trailer image**: Replace the placeholder in `src/components/Hero.tsx` (right column div) with an `<img>` tag pointing to your trailer photo
- **Owner portrait**: Replace the placeholder in `src/components/About.tsx` with an `<img>` tag pointing to the owner's photo
- Place images in `public/` folder (e.g., `public/trailer.jpg`) and reference as `/trailer.jpg`

### 3. Google Reviews Integration (Optional)
To add real Google Reviews:
1. Get your Google Place ID from [Google's Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Use a widget service like Elfsight or embed the Google Reviews API
3. Replace the sample testimonials in `src/components/Reviews.tsx`

## Contact Info
- Phone: 940-373-0322
- Email: junkitv5@gmail.com

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion (animations)
- Formspree (form handling)
