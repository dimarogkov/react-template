<div align="center">

# ⚛️ React Template

**A component library that doubles as a playground.**
Every primitive gets its own doc page with a live preview and byte-accurate source — and every core pattern
(forms, data fetching, state) ships in **two competing flavors** side by side, so you can actually compare them
instead of taking someone's word for it.

[**🚀 Live Demo**](https://react-template-mocha.vercel.app/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=reactrouter&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

</div>

## ✨ Why this exists

Most templates ship one opinion per problem. This one ships two, on purpose:

| Pattern          | Flavor A                    | vs. | Flavor B                    |
| ---------------- | --------------------------- | :-: | --------------------------- |
| Form validation  | `react-hook-form` + **Yup** | 🆚  | `react-hook-form` + **Zod** |
| Data fetching    | **TanStack Query**          | 🆚  | **RTK Query**               |
| State management | **Redux Toolkit**           | 🆚  | **Zustand**                 |

Same UI, same data, two implementations — pick whichever page reads closer to how you'd actually write it.

## 🧩 30 components, fully documented

Every atom in `src/components/atoms` has a matching page with a live preview plus **Code / Demo / Usage** tabs,
highlighted with `shiki` and sourced straight from `src/constants/code` — kept byte-accurate to the real component,
not hand-copied and left to rot.

> Accordion · Alert · Avatar · Badge · Blockquote · Breadcrumb · Button · Card · Carousel · Checkbox · Dropdown ·
> Input / InputPassword · Label · Loader · Modal · Pagination · PinInput · Progress · Radio · Select · Separator ·
> SimpleLink · Switch · Tabs · Text · Textarea · Title · Toast · Tooltip · Reorder (drag-and-drop, via `framer-motion`)

## 🛠️ Built with

| Concern              | Library                                                           |
| -------------------- | ----------------------------------------------------------------- |
| Framework            | React 19 + TypeScript, on Create React App 5 via `craco`          |
| Routing              | react-router-dom v7                                               |
| Styling              | Tailwind CSS v4 — CSS-first config, no `tailwind.config.js`       |
| Forms                | react-hook-form + `yup` / `zod` resolvers                         |
| Data fetching        | TanStack Query, Axios, RTK Query                                  |
| State management     | Redux Toolkit, Zustand                                            |
| Animation            | Framer Motion, Embla Carousel, `ogl` (WebGL background)           |
| Icons                | lucide-react                                                      |
| Code highlighting    | shiki                                                             |
| Linting / formatting | ESLint 9 (flat config) + Prettier + `prettier-plugin-tailwindcss` |

## 🚀 Quick start

```bash
git clone https://github.com/dimarogkov/react-template.git
cd react-template
npm install
npm run start
```

Requires Node.js 18+ (a recent LTS is recommended). No secrets, no `.env` to fill in — it just runs.

## 📜 Scripts

| Command            | What it does                                                          |
| ------------------ | --------------------------------------------------------------------- |
| `npm run start`    | Start the dev server (`craco start`)                                  |
| `npm run build`    | Type-check and produce a production build                             |
| `npm run test`     | Run the CRA/Jest test runner                                          |
| `npm run lint`     | Run ESLint over `src` (standalone — not wired into `start` / `build`) |
| `npm run lint:fix` | Same, with `--fix`                                                    |
| `npm run format`   | Format the whole repo with Prettier                                   |

## 🗂️ Project structure

```bash
src
├── app
│   ├── providers
│   └── routes
├── components
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── pages
├── constants
│   └── code
├── form-validation
│   ├── yup
│   └── zod
├── hooks
├── services
├── store
│   ├── redux-toolkit
│   └── zustand
├── types
│   └── interfaces
└── utils
```

`components/pages` mirrors the sidebar: `components-pages` (one page per atom), `data-fetching-pages`
(TanStack Query / RTK Query), `form-validation-pages` (Yup / Zod), `store-pages` (Redux Toolkit / Zustand), and
`main-pages` (Home, Documentation, 404).

## 🧭 Path aliases

Configured in both `tsconfig.json` and `craco.config.ts` — keep the two in sync when adding one.

| Alias                | Resolves to              |  Sub-paths  |
| -------------------- | ------------------------ | :---------: |
| `@app/*`             | `src/app/*`              |     ✅      |
| `@components/*`      | `src/components/*`       |     ✅      |
| `@form-validation/*` | `src/form-validation/*`  |     ✅      |
| `@services/*`        | `src/services/*`         |     ✅      |
| `@store/*`           | `src/store/*`            |     ✅      |
| `@interfaces/*`      | `src/types/interfaces/*` |     ✅      |
| `@constants`         | `src/constants`          | folder only |
| `@code`              | `src/constants/code`     | folder only |
| `@hooks`             | `src/hooks`              | folder only |
| `@utils`             | `src/utils`              | folder only |

---

<div align="center">

Built as a personal sandbox for trying out the React ecosystem — fork it, gut it, or just steal a component.

</div>
