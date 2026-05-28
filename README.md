# ProfitTrack — Landing Page

Landing page for ProfitTrack, built with Next.js 14 + Tailwind CSS.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Google Fonts: Syne + DM Sans

## Deploy en Vercel

1. Sube este repo a GitHub
2. Ve a vercel.com → New Project → Import el repo
3. Vercel detecta Next.js automáticamente
4. Click Deploy

Listo. No necesitas configurar nada más para la landing.

## Para agregar el waitlist real (próxima fase)

Cuando tengas Supabase configurado:
1. Crea un proyecto en supabase.com
2. Crea tabla `waitlist` con columnas: `id`, `email`, `created_at`
3. Agrega `.env.local` con:
   ```
   NEXT_PUBLIC_SUPABASE_URL=tu_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key
   ```
4. El formulario ya está listo — solo hay que conectarlo

## Dev local

```bash
npm install
npm run dev
```

Abre http://localhost:3000
