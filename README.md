# Choco Up Website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It mainly uses `tailwind.css` for styling, and some prebuilt components from `daisyUI` like `Card` and `Modal`. Most components should be server-rendered unless specific client interactions are needed.

## Development

Dependencies:

- node.js `v20.X`

To start the development server:

- install dependencies with npm:
  ```bash
  npm install
  ```
- start development server:
  ```bash
  npm run dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folder Structure

- `app`: Main router of the website. Each route should be a folder within this directory
- `components`: Reusable components for the website. Subfolders are created according to their intended place of use.
- `public`: Static assets for the website, mostly images.

## Assumptions

- Since other pages are not implemented, all linkes are replaced with `#`. They will need to be replaced with appropriate links for a real project.
- Navbar menu items are hard coded since they would not change for this demo. If the items would change offen, this might better be extracted as a data structure.
- Icons like country flags and social media are loaded as static image files, since the number of icons used in the homepage is relatively small. If more icons are neeeded, it might be better to use an icon library.
