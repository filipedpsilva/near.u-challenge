# Near.U Challenge - Filipe Silva

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm i
```

If there's an error coming grom @atlaskit/*, please use

```bash
npm i --legacy-peer-deps
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Explanations and notes

The `src` core structure is divided between the `__tests__`, `/app`, `/server`, `/ui`, and `/utils` folders.

```
── src
    ├── __tests__
    │   ├── component
    │   │   ├── image-not-found.test.tsx
    │   │   └── search.test.tsx
    │   └── unit
    │       └── utils.ts
    ├── app
    │   ├── episode
    │   │   └── [episodeId]
    │   │        ├── layout.tsx
    │   │        └── page.tsx
    │   ├── show
    │   │   └── [showId]
    │   │        ├── layout.tsx
    │   │        └── page.tsx
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── server
    │   ├── functions.ts
    │   └── types.ts
    ├── ui
    │   └── components
    │       ├── go-back-button.tsx
    │       ├── image-not-found.tsx
    │       ├── list.tsx
    │       └── search.tsx
    └── utils
        └── utils.ts
```
The `__tests__` folder is made up of two inner folders: `component` and `unit`, for component tests and unit tests, respectively.

The `/app` folder consists of the actual app content (i.e.: `globals.css`, `layout.tsx` and `page.tsx`) and main routes (i.e.: `/episode` and `/show`). Each route, has its dynamic route, consisting of an individual id of each route (i.e.: `episodeId` and `showId`). This folder only conbtains the routes, making it simpler to grow, without any confusion of what is routable or not.

The `/server` folder consists of server functions/actions that can be used fetch and mutate data.

The `/ui` folder has every ui component for specific needs.

The `/utils` folder, as the name suggests, has every utilitary function needed to format or get simple information.

This project also uses [atlassian.design](https://atlassian.design/) for it's icons and regular components.

## Getting Tested

To test everything, use:

```bash
npm run test
```

## List of TODO's
- Add skeletons to the base components, along with Loading states;
- Add a breadcrumbs component to show the user each show/episode hierarchy;
- Add more unit and component tests;
- Add small animations between states, to make the app feel less clunky;
