# The Sacred Canvas - Site Specification

## Overview
A worldbuilding blog documenting the creation of a fantasy universe. Public workshop style - showing process and outcomes together.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS (or CSS modules)
- Markdown for blog posts (use gray-matter + remark/rehype or next-mdx-remote)

---

## Project Structure

```
/app
  layout.tsx          # Global layout with Nav + Footer
  globals.css         # Global styles + CSS variables
  page.tsx            # Home
  /blog
    page.tsx          # Blog listing
    /[slug]
      page.tsx        # Individual blog post
  /about
    page.tsx          # About page
/components
  Nav.tsx
  Footer.tsx
  PostCard.tsx        # For blog listing
/content
  /posts              # Markdown blog posts
    why-im-building-this-world.md
/lib
  posts.ts            # Functions to read/parse markdown posts
```

---

## Color Palette (Golden Luxe)

```css
:root {
  --bg-primary: #f2f0eb;      /* Alabaster - page background */
  --bg-secondary: #e8e4db;    /* Darker Alabaster - cards, callouts */
  --nav-bg: #d2b48c;          /* Tan - navigation background */
  --accent: #b87333;          /* Copper - titles, links, borders */
  --text-primary: #222222;    /* Jet - headers */
  --text-secondary: #555555;  /* Davy's Gray - body text */
  --text-muted: #848482;      /* Battleship Gray - meta, captions */
}
```

| Hex | Name | Variable | Usage |
| --- | --- | --- | --- |
| #f2f0eb | Alabaster | --bg-primary | Page background |
| #e8e4db | Darker Alabaster | --bg-secondary | Secondary surfaces |
| #d2b48c | Tan | --nav-bg | Nav background |
| #b87333 | Copper | --accent | Titles, links, accents |
| #222222 | Jet | --text-primary | Headers |
| #555555 | Davy's Gray | --text-secondary | Body text |
| #848482 | Battleship Gray | --text-muted | Muted text |

---

## Typography

```css
/* Fonts - import from Google Fonts */
--font-serif: 'Lora', Georgia, serif;
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Usage */
h1, h2, h3 { font-family: var(--font-serif); }
body, p { font-family: var(--font-sans); }

/* Sizing */
body { font-size: 18px; line-height: 1.8; }
h1 { font-size: 2.75rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.35rem; }

/* Content width */
max-width: 780px;
```

---

## Navigation

**Style: Glassmorphism with Tan base**

```css
nav {
  background: rgba(210, 180, 140, 0.85);  /* Tan with transparency */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1.25rem 2rem;
  /* No border, no shadow */
}
```

**Layout:**
- Left: Logo text "The Sacred Canvas" (Lora font, Jet color)
- Right: Links - Home, Blog, About (Davy's Gray, hover to Copper)

**Logo styling:**
```css
.logo {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--accent);  /* Copper - warm, harmonizes with tan background */
  letter-spacing: 0.02em;
}
```

> **Design note:** Logo uses Copper instead of Jet. The warm copper harmonizes with the tan background and fits the "Golden Luxe" theme. Hierarchy is maintained through size, weight, and font family.

**Nav links:**
```css
.nav-link {
  color: var(--text-secondary);  /* Davy's Gray - better contrast on tan */
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s ease;
}
.nav-link:hover {
  color: var(--accent);
}
```

> **Design note:** Nav links use Davy's Gray (#555555) instead of Battleship Gray for better contrast against the tan background. Battleship Gray was too washed out.

---

## Page Layouts

### Home (/)
Simple intro page.

```
[Nav]

# The Sacred Canvas

A public workshop where a fantasy world takes shape.

This project documents the creation of a fictional universe from the ground up - 
cosmology, history, language, cultures - developed together rather than in isolation.

[Link to latest post or Blog]

[Footer]
```

- Title: Copper (#b87333), Lora
- Body text: Davy's Gray, Inter
- Keep it minimal - one section, centered

### Blog Listing (/blog)

```
[Nav]

# Blog

[PostCard]
[PostCard]
[PostCard]
...

[Footer]
```

**PostCard component:**
- Title (Copper, link)
- Date (Battleship Gray, muted)
- Excerpt (Davy's Gray)
- No images for now

### Blog Post (/blog/[slug])

```
[Nav]

<article>
  <header>
    <h1>Post Title</h1>              /* Copper */
    <div class="meta">
      January 11, 2026 · 8 min read  /* Battleship Gray */
    </div>
  </header>
  
  <div class="content">
    [Markdown content rendered here]
  </div>
</article>

[Footer]
```

**Content styling:**
- h2: Jet, Lora, 1.75rem
- h3: Jet, Lora, 1.35rem
- p: Davy's Gray, Inter, 18px
- a: Copper with underline
- blockquote: Copper left border, italic, muted text
- strong: Jet color

**Callout box (optional):**
```css
.callout {
  background: var(--bg-secondary);
  border-left: 4px solid var(--accent);
  padding: 1.5rem 2rem;
  border-radius: 8px;
}
```

### About (/about)

```
[Nav]

# About

[Content about who you are, why this project exists, what it is]

[Footer]
```

Keep it simple prose. Can match blog post styling.

---

## Footer

Minimal:

```css
footer {
  background: var(--bg-secondary);
  padding: 2rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}
```

Content:
```
© 2026 Gianmarco Fiorilla. All rights reserved.
```

---

## Markdown Blog Posts

Location: `/content/posts/`

**Frontmatter format:**
```yaml
---
title: "Why I'm Building This World"
date: "2026-01-11"
excerpt: "A brief description for the listing page"
---

Markdown content here...
```

**Reading posts (lib/posts.ts):**
- Use `gray-matter` to parse frontmatter
- Use `remark` + `remark-html` or `next-mdx-remote` to render markdown
- Sort by date descending
- Generate slugs from filename

---

## First Blog Post Content

Create `/content/posts/why-im-building-this-world.md` with the blog post content from the HTML mockup (the "Why I'm Building This World" post).

---

## Responsive Design

- Mobile: Stack nav vertically or use hamburger menu
- Content max-width 780px with padding on sides
- Font sizes can reduce slightly on mobile

---

## Summary Checklist

- [ ] Set up Next.js with App Router
- [ ] Configure Tailwind or CSS modules with color variables
- [ ] Import Lora and Inter fonts
- [ ] Create Nav component with glassmorphism
- [ ] Create Footer component
- [ ] Create layout.tsx with Nav + Footer
- [ ] Create Home page
- [ ] Create Blog listing page
- [ ] Create Blog post page with dynamic routing
- [ ] Create About page
- [ ] Set up markdown parsing for blog posts
- [ ] Add first blog post
- [ ] Test on mobile

---

## Notes for Claude Code

1. Delete all existing content in /app and /components - start fresh
2. Keep package.json but may need to add: gray-matter, remark, remark-html (or next-mdx-remote)
3. The design should feel calm, literary, workshop-like - not flashy
4. No animations beyond hover transitions
5. No images for now - text only
