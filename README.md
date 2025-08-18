# UI Components — InputField & DataTable

**Tech**: React, TypeScript, TailwindCSS, Storybook, Vitest.

## Setup

npm i
npm run dev

## Storybook

npm run storybook

## Tests

npm run test

## Components

- InputField: variants (filled/outlined/ghost), sizes (sm/md/lg), states (disabled/invalid/loading), helper+error, clearable, password toggle, a11y.
- DataTable: display data, sortable columns, row selection (+ select all), loading & empty states, responsive, a11y.

## Demo

See `src/App.tsx` or Storybook stories.

## Approach

Typed, reusable components; Storybook docs & a11y checks; minimal tests for critical interactions.

## Deploy

- Vercel (app demo): build = `npm run build`, output = `dist`
- Chromatic (Storybook): `npx chromatic --project-token=<token>`
