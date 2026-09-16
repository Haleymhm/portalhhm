# portalhhm-next

Portafolio personal de **Haleym Hidalgo M** — Refactorizado a **Next.js 16 (App Router)** sobre la base del template iPortfolio de BootstrapMade.

## Stack

- Next.js 16 (App Router, Server Components, Route Handlers)
- React 19, TypeScript
- Tailwind CSS v4 + `bootstrap-icons` (mantiene la cosmética del template original)
- Framer Motion (`useInView`, `motion`) para animaciones de entrada y barras de skills
- `swiper/react` para el carrusel de testimonios
- `react-countup` para contadores animados
- `typed.js` para el efecto de tipografía en el Hero
- `react-hook-form` + `zod` para el formulario de contacto
- `resend` para el envío de emails desde el Route Handler

## Estructura

```
app/
├── layout.tsx              # Root layout: fonts, metadata, Header/Footer
├── page.tsx                # Landing con todas las secciones
├── globals.css             # Tailwind + tokens de tema (CSS variables)
├── portfolio/[slug]/       # Rutas SSG de detalle por proyecto
├── services/[slug]/        # Rutas SSG de detalle por servicio
└── api/contact/route.ts    # POST endpoint (Resend + zod)

components/
├── layout/                 # Header, Footer, ScrollTop, Preloader
└── sections/               # Hero, About, Stats, Skills, Resume, Portfolio, Services, Testimonials, Contact

data/                       # Contenido tipado (profile, navigation, skills, resume, projects, services, testimonials, stats)
lib/                        # schemas (zod), cliente Resend
public/img/                 # assets migrados desde /assets/img del template original
```

## Comandos

```bash
npm install
cp .env.example .env.local  # editar con RESEND_API_KEY y CONTACT_TO_EMAIL
npm run dev                 # desarrollo
npm run build               # build de producción (genera 23 rutas estáticas)
npm run start               # servir build
npm run lint                # ESLint
```

## Variables de entorno

| Variable              | Descripción                                          |
| --------------------- | ---------------------------------------------------- |
| `RESEND_API_KEY`      | API key de [Resend](https://resend.com).             |
| `CONTACT_TO_EMAIL`    | Email destino de los mensajes. Por defecto `haleymhm@gmail.com`. |
| `CONTACT_FROM_EMAIL`  | Remitente verificado en Resend. Para tests: `onboarding@resend.dev`. |

> En entorno de **desarrollo**, si `RESEND_API_KEY` no está definida, el Route Handler responde `200 { ok: true, devMode: true }` y sólo registra el payload por consola.

## Notas

- Las plantillas HTML estáticas `portfolio-details.html`, `service-details.html` y `starter-page.html` del template original quedan **fuera de este nuevo proyecto** (se reemplazan por `/portfolio/[slug]` y `/services/[slug]`).
- El contenido sigue siendo el placeholder del template iPortfolio (Lorem ipsum, "Brandon Johnson", etc.). Reemplazar en `data/*.ts` cuando tengas los datos reales.
- El sidebar fijo de Header se muestra en `xl:` (≥1280px). En móvil es un drawer que se activa con el botón toggle.
