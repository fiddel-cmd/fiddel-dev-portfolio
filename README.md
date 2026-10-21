# Fidel Dev Portfolio

Portfolio for Fidel, a BBIT student at Strathmore University. This project is
being migrated in confirmed phases to Next.js App Router, TypeScript, and static
export.

## Development

Requirements: Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Create a static production export in `out/`:

```sh
npm run build
```

Deploy the contents of `out/` to a static host such as Vercel or Netlify.

## Migration status

- Phase 1: App Router scaffold, design tokens, shared navigation, footer, and theme toggle.
- Phase 3: Added a project portfolio page and linked featured project summaries from the homepage.
- The original HTML, CSS, and JavaScript files remain in the repository as migration references. They are not part of the Next.js export.
