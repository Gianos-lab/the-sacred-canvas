# The Sacred Canvas - Project Rules

## READ THIS FIRST
You are building a worldbuilding blog. Keep it simple, consistent, and maintainable. When in doubt, do less.

---

## Stack (MANDATORY - NO EXCEPTIONS)

| Layer | Tool | Notes |
|-------|------|-------|
| Framework | Next.js 14+ | App Router only |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | Utility classes only |
| Components | shadcn/ui | Install via CLI |
| Icons | Lucide React | Only icon library allowed |
| Fonts | Google Fonts | Lora (serif), Inter (sans) |
| Markdown | MDX or gray-matter + remark | For blog posts |

---

## Absolute Rules

### 1. NO CUSTOM CSS
- ❌ No CSS files (except globals.css for variables)
- ❌ No CSS modules
- ❌ No styled-components
- ❌ No inline style={{}} attributes
- ❌ No @apply in Tailwind (leads to mess)
- ✅ Only Tailwind utility classes
- ✅ Only CSS variables in globals.css

### 2. SHADCN/UI FIRST
Before creating ANY component, check if shadcn/ui has it:
- Navigation? → Use `navigation-menu` or build with shadcn primitives
- Cards? → `npx shadcn@latest add card`
- Buttons? → `npx shadcn@latest add button`
- Forms? → `npx shadcn@latest add form input label`

Install components as needed:
```bash
npx shadcn@latest add [component-name]
```

Browse available components: https://ui.shadcn.com/docs/components

### 3. ASK BEFORE CUSTOM WORK
If you think you need something custom:
1. STOP
2. Tell me what you're trying to do
3. Wait for my approval
4. Only then proceed

### 4. USE CSS VARIABLES FOR COLORS
Never hardcode hex values. Always use the variables defined below.

---

## Color Palette (Golden Luxe)

Add this to `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Backgrounds */
    --background: 40 33% 94%;           /* #f2f0eb - Alabaster */
    --background-secondary: 40 25% 88%; /* #e8e4db - Darker Alabaster */
    --nav-bg: 34 44% 69%;               /* #d2b48c - Tan */
    
    /* Text */
    --foreground: 0 0% 13%;             /* #222222 - Jet */
    --foreground-secondary: 0 0% 33%;   /* #555555 - Davy's Gray */
    --muted-foreground: 60 1% 51%;      /* #848482 - Battleship Gray */
    
    /* Accent */
    --primary: 25 52% 46%;              /* #b87333 - Copper */
    --primary-foreground: 40 33% 94%;   /* Light text on copper */
    
    /* Required shadcn variables */
    --card: 40 33% 94%;
    --card-foreground: 0 0% 13%;
    --popover: 40 33% 94%;
    --popover-foreground: 0 0% 13%;
    --secondary: 40 25% 88%;
    --secondary-foreground: 0 0% 13%;
    --muted: 40 25% 88%;
    --accent: 25 52% 46%;
    --accent-foreground: 40 33% 94%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 40 20% 82%;
    --input: 40 20% 82%;
    --ring: 25 52% 46%;
    --radius: 0.5rem;
  }
}

@layer base {
  body {
    @apply bg-background text-foreground-secondary;
    font-family: 'Inter', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lora', serif;
    @apply text-foreground;
  }
}
```

### Using Colors in Components

```tsx
// ✅ Correct - uses CSS variables via Tailwind
<div className="bg-background text-foreground">
<h1 className="text-primary">        // Copper
<p className="text-muted-foreground"> // Battleship Gray
<nav className="bg-[hsl(var(--nav-bg))]"> // Tan

// ❌ Wrong - hardcoded colors
<div style={{ backgroundColor: '#f2f0eb' }}>
<h1 className="text-[#b87333]">
```

---

## Typography

### Fonts Setup (in layout.tsx)

```tsx
import { Lora, Inter } from 'next/font/google'

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html className={`${lora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

### Typography Scale

| Element | Font | Size | Class |
|---------|------|------|-------|
| H1 | Lora | 2.75rem | `font-serif text-4xl md:text-5xl` |
| H2 | Lora | 1.75rem | `font-serif text-2xl md:text-3xl` |
| H3 | Lora | 1.35rem | `font-serif text-xl` |
| Body | Inter | 1.125rem | `text-lg` |
| Small | Inter | 0.875rem | `text-sm` |
| Meta/Caption | Inter | 0.875rem | `text-sm text-muted-foreground` |

### Content Width
```tsx
<main className="max-w-3xl mx-auto px-4">  // 780px max
```

### Line Height
```tsx
<article className="prose leading-relaxed">  // 1.75 line height
// or
<p className="leading-[1.8]">  // 1.8 exactly
```

---

## Tailwind Config

Add to `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      colors: {
        background: "hsl(var(--background))",
        "background-secondary": "hsl(var(--background-secondary))",
        "nav-bg": "hsl(var(--nav-bg))",
        foreground: "hsl(var(--foreground))",
        "foreground-secondary": "hsl(var(--foreground-secondary))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... rest of shadcn defaults
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

---

## Navigation (Glassmorphism)

The navbar should use this pattern:

```tsx
<nav className="sticky top-0 z-50 bg-[hsl(var(--nav-bg))]/85 backdrop-blur-md">
  <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
    <Link href="/" className="font-serif text-xl font-semibold text-foreground">
      The Sacred Canvas
    </Link>
    <div className="flex gap-6">
      <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
        Home
      </Link>
      <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
        Blog
      </Link>
      <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
        About
      </Link>
    </div>
  </div>
</nav>
```

Key points:
- `/85` = 85% opacity for glassmorphism
- `backdrop-blur-md` = blur effect
- No border, no shadow (the tan color provides separation)
- Hover transitions to copper (primary)

---

## Project Structure

```
/app
  layout.tsx        # Global layout with fonts + nav + footer
  globals.css       # CSS variables only
  page.tsx          # Home
  /blog
    page.tsx        # Blog listing
    /[slug]
      page.tsx      # Blog post
  /about
    page.tsx
/components
  /ui               # shadcn components go here (auto-generated)
  nav.tsx           # Navigation
  footer.tsx        # Footer
  post-card.tsx     # Blog post preview card
/content
  /posts            # Markdown blog posts
/lib
  utils.ts          # shadcn utility (cn function)
  posts.ts          # Functions to read markdown
```

---

## Common Patterns

### Page Container
```tsx
<main className="max-w-3xl mx-auto px-4 py-12">
  {children}
</main>
```

### Section Spacing
```tsx
<section className="space-y-6">  // Consistent vertical rhythm
```

### Blog Post Title
```tsx
<h1 className="font-serif text-4xl text-primary mb-4">
  {title}
</h1>
<p className="text-sm text-muted-foreground mb-8">
  {formatDate(date)} · {readingTime} min read
</p>
```

### Links
```tsx
// In prose
<a className="text-primary underline underline-offset-2 hover:text-primary/80">

// In navigation  
<Link className="text-muted-foreground hover:text-primary transition-colors">
```

### Cards (for blog listing)
```tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

<Card className="bg-background-secondary border-0 hover:shadow-md transition-shadow">
  <CardHeader>
    <CardTitle className="font-serif text-primary">{title}</CardTitle>
    <CardDescription>{excerpt}</CardDescription>
  </CardHeader>
</Card>
```

---

## What NOT To Do

```tsx
// ❌ Custom CSS file
import "./custom-styles.css"

// ❌ Inline styles
<div style={{ marginTop: '20px', backgroundColor: '#f2f0eb' }}>

// ❌ Arbitrary values when Tailwind has it
<div className="mt-[20px]">  // Use mt-5 instead

// ❌ Creating components shadcn already has
const CustomButton = () => <button className="...">  // Use shadcn Button

// ❌ Mixing color systems
<p className="text-gray-500">  // Use text-muted-foreground

// ❌ Random fonts
<p className="font-mono">  // Stick to serif/sans

// ❌ Complex animations without asking
<div className="animate-[wiggle_1s_ease-in-out_infinite]">
```

---

## Checklist Before Each Change

- [ ] Am I using a shadcn component if one exists?
- [ ] Am I using Tailwind utilities (not custom CSS)?
- [ ] Am I using CSS variables for colors?
- [ ] Does this match the existing design patterns?
- [ ] Have I asked before doing something custom?

---

## Quick Reference

| Need | Solution |
|------|----------|
| Button | `npx shadcn@latest add button` |
| Card | `npx shadcn@latest add card` |
| Form inputs | `npx shadcn@latest add input label` |
| Navigation | Build with Links + Tailwind (see pattern above) |
| Icons | `import { IconName } from "lucide-react"` |
| Spacing | Use Tailwind: `p-4`, `my-8`, `gap-6` |
| Colors | Use variables: `text-primary`, `bg-background` |
| Fonts | Use classes: `font-serif`, `font-sans` |
