# Choco Up Website Frontpage

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [tailwind.css](https://tailwindcss.com) is used for styling
- [daisyUI](https://daisyui.com) is used for some prebuilt components like `Card` and `Modal`
- [slick-carousel](https://github.com/kenwheeler/slick) is used for the testimonials carousel
- Most components should be server-rendered unless specific client interactions are needed.

## Development

Dependencies:

- node.js `v20.X`
- npm `v10.X`

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

- `app`: Main router of the website. Each route should be a folder within this directory.
- `components`: Reusable components for the website. Subfolders are created according to their intended place of use.
- `public`: Static assets for the website, mostly images.

## Assumptions

- Text content has been hardcoded into the components, since internationalization is not implemented. If it needs to be implemented, a library like `react-i18next` should be used, and the content should be extracted into a separated file.
- Since other pages are not implemented, all linkes have a placeholder `#`. They will need to be replaced with appropriate links for a real project.
- Navbar menu items are hard coded since they would not change for this demo. If the items would change offen, this might better be extracted as a seperate data structure.
- Icons like country flags and social media are loaded as static image files, since the number of icons used in the homepage is relatively small. If more icons are neeeded, it might be better to use an icon library.
- A deployment solution is not configured. Depending on whether static-site generation or server-side rendering is used, some modification may be needed before deploying the website.
