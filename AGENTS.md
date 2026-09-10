# Agent Guide

This file is the shared operating contract for AI coding agents working in this repository. Keep changes focused, verify them locally, and prefer the project's existing patterns over new conventions.

## Project

- **React Template** — a Create React App (`react-scripts@5`) project customized via `craco.config.ts`, using React 19 and TypeScript. This is not Next.js: there is no app router, no server components, no `"use client"` boundaries.
- Client-side routing via `react-router-dom` v7. Routes/paths live in `src/app/routes` (`router.tsx`, `paths.ts`); providers live in `src/app/providers`.
- Components follow an atomic-design layout: `src/components/{atoms,molecules,organisms,pages}`, each with a barrel `index.ts`. `pages` are grouped by area (`components-pages`, `data-fetching-pages`, `form-validation-pages`, `main-pages`, `store-pages`).
- Styling is Tailwind CSS v4, configured CSS-first: theme tokens (colors, custom animations/keyframes) live in `@theme` inside `src/index.css`. There is no `tailwind.config.js` — it was removed when the project migrated to v4.
- State management: both Redux Toolkit (`src/store/redux-toolkit`) and Zustand (`src/store/zustand`) exist side by side as parallel demos. Match whichever the surrounding feature already uses; don't introduce a third state layer.
- Data fetching: TanStack Query (`@tanstack/react-query`) and Axios for REST calls; an RTK Query slice example lives in `store/redux-toolkit/todosApiSlice.ts`.
- Forms: `react-hook-form` with `zod` or `yup` resolvers via `@hookform/resolvers`. Schemas and form options live in `src/form-validation/{zod,yup}`.
- Icons: `lucide-react` only. It dropped brand/logo icons (GitHub, etc.) in v1 — use an inline SVG for brand marks instead (see `Header.tsx`), don't add another icon package.
- Path aliases (`tsconfig.json` and `craco.config.ts` must stay in sync): `@app/*`, `@components/*`, `@form-validation/*`, `@services/*`, `@store/*`, `@interfaces/*` (→ `src/types/interfaces`) support sub-paths; `@constants`, `@code` (→ `src/constants/code`), `@hooks`, `@utils` are folder-level only (no `/*`) — import from that folder's `index.ts` barrel, not a sub-path.

## Commands

- Start dev server: `npm run start` (`craco start`)
- Build: `npm run build` (`craco build`)
- Test: `npm run test` (`craco test`)
- Format all files: `npm run format`
- Lint: `npm run lint` (`npm run lint:fix` to auto-fix)

Lint runs as a **standalone ESLint 9 flat config** (`eslint.config.js`, root of the repo) — a separate top-level `eslint` devDependency, fully decoupled from `react-scripts`'s bundled `eslint-webpack-plugin` (which stays disabled — see **Dependencies & Toolchain**). It is not wired into `start`/`build` at all; run it explicitly. Pin `eslint` to `^9.x` — `eslint-plugin-react` doesn't yet support ESLint 10's removed legacy `context` API (confirmed: linting crashes under eslint@10 with `contextOrFilename.getFilename is not a function`). Run `npm run build` after a change too; it type-checks and bundles in one pass and is the fastest signal for compile correctness (lint catches a different class of issues — unused vars, hooks rules, accessibility — that a successful build doesn't). For UI changes, also run `npm run start` and click through the affected page.

## Code Style

- TypeScript is strict; avoid `any` unless there is no safe local type. Exception: this codebase's compound components (`cloneElement`-based prop injection in `Accordion`, `Dropdown`, `Select`, `Tabs`, `Avatar`, etc.) intentionally cast children to `ReactElement<any>` because the child can be any one of several sibling components with different prop shapes. Match that existing pattern rather than fighting it with a narrower cast.
- Components use `forwardRef` throughout (`export const X = forwardRef<HTMLElement, Props>(...)`), a pre-React-19 pattern that predates plain-`ref`-as-prop support. Match the `forwardRef` style already used in the file/family you're editing rather than mixing conventions within one component tree.
- All components and hooks use a single-line named export — `export const Name = (...) => {...};` (or `export const Name = forwardRef(...)` for ref-forwarding atoms) — never a separate `export default Name;` line and never `export default function Name() {}`. Every component/hook file has a colocated `index.ts` barrel that re-exports it as a named export too (`export { Name } from './Name';`), consumed by the parent folder's barrel — match this two-level barrel structure for new components.
- Reuse existing atoms/molecules/organisms, hooks, schemas, store slices, and utils before adding new ones.
- Do not add console logging except `console.warn`/`console.error` when intentionally useful.
- Add comments only where genuinely needed (non-obvious logic, `TODO`/`FIXME`, workarounds) — prefer self-explanatory code over restating what it does.
- Use type-only imports where possible.
- Prettier: 4-space indent, single quotes, no trailing commas, 120 print width, LF endings (`.prettierrc`). `prettier-plugin-tailwindcss` sorts Tailwind classes and also sorts arguments passed to the `cn(...)` helper (`tailwindFunctions: ["cn"]`) — don't hand-order classes inside `cn()`.

### Tailwind CSS v4

This project runs Tailwind v4. Write v4 syntax, not v3:

- Important modifier goes at the end: `bg-red-500!`, not `!bg-red-500`.
- Shifted scales — the v3 names still compile but now mean a different size, so never copy them from v3 snippets: `shadow-sm`→`shadow-xs`, `shadow`→`shadow-sm`, `blur`→`blur-sm`, `backdrop-blur`→`backdrop-blur-sm`, `rounded`→`rounded-sm`, `rounded-sm`→`rounded-xs`, `ring`→`ring-3`. Same trap for `outline-none`, which now means `outline-style: none` — use `outline-hidden` for the old behavior.
- Renamed: `bg-gradient-to-*`→`bg-linear-to-*`, `break-words`→`wrap-break-word`, `start-*`/`end-*`→`inset-s-*`/`inset-e-*`, `flex-shrink-*`/`flex-grow-*`→`shrink-*`/`grow-*`. `*-opacity-*` utilities are gone — use the `/50` slash modifier.
- Variants stack left-to-right: `dark:hover:bg-x`, not `hover:dark:bg-x`.
- Boolean data attributes have a shorthand: `data-disabled:`, `data-active:`. Keep the bracket form for values: `data-[state=open]:`.
- CSS variables in arbitrary values use parentheses: `w-(--radix-select-trigger-width)`, not `w-[--radix-...]`.
- `dark:` is now zero-specificity (`:where(.dark, …)`), so `hover:` beats `dark:` on the same property. Pair them explicitly: `hover:bg-a dark:bg-b dark:hover:bg-c`. This project doesn't currently toggle a `.dark` class or rely on `dark:` variants in real UI — don't assume a dark-mode system exists without checking.
- `hover:` only applies on devices that report `hover: hover`; never rely on it for touch interactions.
- Theme tokens (colors, custom `animate-*` keyframes) live in `@theme` in `src/index.css` — there is no `tailwind.config.js` and no `@config` directive. Add new tokens there, not in a JS config file.
- Custom reusable classes in this project are plain CSS rules in `src/index.css`, wrapped in `@layer components` (e.g. `.page-container { @apply m-auto w-full ... }`), not the `@utility` at-rule Tailwind v4 recommends. Match that existing style for one-off helper classes; `@apply` still works fine in v4. The `@layer components` wrapper matters: an unlayered rule always beats every Tailwind utility regardless of source order (per the CSS Cascade Layers spec), so a combo like `<div className="page-container md:w-200">` would silently lose the `md:w-200` override without it.
- Never name a custom class the same as a real Tailwind utility (`container`, `group`, `peer`, `sr-only`, `truncate`, etc. are all reserved words in v4's utility set). Tailwind's content scanner does naive text extraction over every scanned file — it has no idea whether a match is a JSX `className` or something unrelated like a JS object key — so _any_ literal occurrence of the word anywhere in `src` auto-generates that utility in `@layer utilities`, which then outranks a same-named `@layer components` rule and silently wins. This exact collision happened with `.container` (renamed to `.page-container`): `Sidebar.tsx`'s `useScroll({ container: sidebarListRef })` (a real `framer-motion` option, nothing to do with CSS) was enough to trigger Tailwind's built-in `container` utility (breakpoints up to 96rem), which then overrode the project's version (capped at `xl:max-w-318`). The bare `.container` rule still shows up unused in the compiled CSS — harmless, since nothing applies that class name anymore, but a reminder that `grep`-checking "is this word used as a class" isn't enough; assume the collision risk exists for any reserved utility name regardless of what else the word is doing in the file.
- `translate-*` / `scale-*` / `rotate-*` now emit the standalone `translate`/`scale`/`rotate` properties instead of one `transform`. Two consequences:
    - They no longer override `tailwindcss-animate`-style keyframes (which animate `transform`) — they stack. Do not combine `translate-x-[-50%]`-style centering with `slide-in-from-*` / `slide-out-to-*`; the offsets add up and the element starts far off-position.
    - An arbitrary transition list must name the real property: `transition-[rotate,width]`, not `transition-[transform,width]`, or the movement is not animated at all. `transition`, `transition-all`, and `transition-transform` already cover `transform, translate, scale, rotate`.
- v4 targets Safari 16.4+, Chrome 111+, Firefox 128+, and there is no autoprefixer — do not add vendor-prefixed properties by hand unless Lightning CSS misses one.
- Add icons only through `lucide-react`. Do not add new SVG assets or icon libraries — pick an existing lucide icon name, or fall back to a hand-written inline SVG only for brand marks lucide doesn't ship (see `Header.tsx`).

## React & Routing

- No Next.js — this is plain CRA + `react-router-dom` v7. Don't reach for Next.js APIs (`next/image`, `next/navigation`, app-router file conventions, `"use client"`) — they don't exist in this project.
- `RouterProvider` takes no `future` flags — v7 behavior is already the default (an old `v7_startTransition` opt-in was removed when the project moved off v6).
- Keep React Query cache keys stable and include all query dependencies.
- Keep Zustand store updates predictable and narrowly scoped; keep Redux Toolkit slices/selectors colocated in `src/store/redux-toolkit`.
- New components may accept `ref` as a plain prop (React 19); existing components follow the `forwardRef` pattern described above — don't convert an existing component's ref handling as a drive-by change.

## UX

- Reuse the existing design language before creating new UI primitives.
- Build responsive states for tablet and desktop.
- Keep loading, empty, error, disabled, and optimistic states in mind when changing user flows.
- Preserve accessibility: semantic elements, keyboard interaction, focus states, labels, and readable contrast.
- Do not introduce visible instructional copy unless the product experience requires it.

## Tests

- `npm run test` runs CRA's built-in Jest runner (via craco), with `@testing-library/react` and `@testing-library/jest-dom` already installed. It matches `src/**/__tests__/**/*.{js,jsx,ts,tsx}` or `src/**/*.{spec,test}.{js,jsx,ts,tsx}`.
- No test files currently exist in the repo — `npm run test` exits with "No tests found". If you add the first test, follow standard React Testing Library conventions (render, query by role/label, `userEvent`).
- There is no E2E setup, no Vitest, and no Storybook in this project. Don't add any of them as a side effect of an unrelated change — only set them up if the user explicitly asks for it as its own task.
- If a check cannot be run, state why and mention the remaining risk.

## Dependencies & Toolchain

This project recently went through a full major-version dependency upgrade (React 19, Tailwind v4, react-router-dom v7, zod v4, etc.) on top of an aging `react-scripts@5`/CRA toolchain. A few resulting pieces of config are load-bearing — don't remove or "clean up" them without re-testing a full `npm run build` and `npm run start` from a clean `node_modules`/`package-lock.json`:

- `package.json`'s `overrides` pin `ajv` to different major versions in different subtrees: `fork-ts-checker-webpack-plugin`, `babel-loader`, `file-loader`, and (our own top-level) `eslint` are scoped to `ajv@^6.12.4`; everything else to `ajv@^8.17.1`. `react-scripts@5` bundles legacy build tooling — and `eslint` itself — that hardcodes the ajv v6 API (`ajv/lib/refs/json-schema-draft-04.json`, `_opts.defaultMeta`) alongside newer tooling (the webpack refresh plugin, workbox, `@hookform/resolvers`'s optional ajv-based validator peer) that needs ajv v8 — without this split, either the build crashes with `Cannot find module 'ajv/dist/compile/codegen'` or `eslint`/`react-scripts`'s bundled eslint-webpack-plugin crashes with `Cannot set properties of undefined (setting 'defaultMeta')`. The exact scoping was found empirically; changing it (including adding a new package here) requires re-verifying both `npm run build` and `npm run lint`, not just `npm ls`.
- `.env` sets `DISABLE_ESLINT_PLUGIN=true` — CRA's built-in `eslint-webpack-plugin` hits the ajv conflict above and is not worth fixing (`react-scripts`'s bundled `eslint-config-react-app` is old and CRA is unmaintained). ESLint still runs — see `npm run lint` above — as a fully standalone process via `eslint.config.js`, decoupled from webpack entirely, so this `.env` setting doesn't affect it.
- `typescript` is pinned to `^5.9.3`, not the current major. `ts-node`/`cosmiconfig-typescript-loader` (used by craco to load `craco.config.ts`) and `react-scripts`'s bundled tooling only support TypeScript ≤5. Don't bump TypeScript past 5.x without re-verifying craco still loads its config.
- `daisyui` was removed as a dependency — it was a declared Tailwind plugin but no daisyui component classes were ever used in `src`. Don't re-add it to "support" a component; the atoms in this repo (`Btn`, `Card`, `Badge`, etc.) are hand-built, not daisyui-based.
- Keep other dependency changes intentional and explain why they're needed — this toolchain is fragile enough that an unreviewed bump can silently break the build again.

## Safety

- Never commit secrets, tokens, or real private data.
- Treat `.env.*` files as sensitive; do not print or copy values into code or docs. (The committed `.env` in this repo only sets `DISABLE_ESLINT_PLUGIN` — no secrets belong there or in any `.env.local`.)
- Do not rewrite unrelated files or undo user changes.
- Avoid destructive commands unless the user explicitly asks for them.
- Keep dependency changes intentional and explain why they are needed.

## Git

- Before editing, check the working tree and respect existing uncommitted changes.
- Keep commits focused on one logical change.
- Do not amend, rebase, reset, or force-push unless the user explicitly asks.
- When reporting work, summarize changed files and verification performed.
