# ReactViteTSWails

<a id="readme-top"></a>

Table of Contents

- [ReactViteTSWails](#reactvitetswails)
  - [About](#about)
  - [Usage](#usage)
  - [Development](#development)
  - [Building](#building)
  - [Wait a minute, who are you?](#wait-a-minute-who-are-you)
  - [License](#license)
  - [Changelog](#changelog)

## About

Hey! This is a Wails template with the following installed:

- [Wails v2.11](https://wails.io/)
- [Vite v8](https://vite.dev/)
- [React v19](https://react.dev/)
- [Typescript v5](https://www.typescriptlang.org/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [Prettier v3](https://prettier.io/)
- [prettier-plugin-tailwind v0.6.14](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [ESLint v9](https://eslint.org/)
- [Stylelint v16](https://stylelint.io/)
- lint-staged
- @ianvs/prettier-plugin-sort-imports v4
- [eslint/you-might-not-need-an-effect plugin](https://github.com/NickvanDyke/eslint-plugin-react-you-might-not-need-an-effect)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

To generate a new Wails project using this template, run the following command:

```bash
wails init -n my-project -t https://github.com/Jemeni11/ReactViteTSWails
```

> [!NOTE]
> `frontend:install`, `frontend:build`, and `frontend:dev:watcher` in `wails.json` default to `npm install`, `npm run build`, and `npm run dev` respectively. Replace these with your package manager of choice e.g.
> `bun install` / `bun run build` / `bun run dev`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development

To run in live development mode, run `wails dev` in the project directory. Wails will
automatically start the frontend dev server.

If you prefer to develop and debug using your browser (with full access to React DevTools), you can navigate to `http://localhost:34115`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Building

To build a redistributable, production mode package, use `wails build`.

This will compile your application and place the final, executable binary inside the `build/bin/` directory.

_(Optional)_ To cross-compile for a different platform (e.g., building a Windows executable from a Mac), append the `-platform` flag:
`wails build -platform windows/amd64`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Wait a minute, who are you?

Hello there! I'm Emmanuel Jemeni, and I am a Frontend Developer.

You can find me on various platforms:

- [LinkedIn](https://www.linkedin.com/in/emmanuel-jemeni)
- [GitHub](https://github.com/Jemeni11)
- [Bluesky](https://bsky.app/profile/jemeni11.bsky.social)
- [Twitter/X](https://twitter.com/Jemeni11_)

If you'd like, you can support me on [GitHub Sponsors](https://github.com/sponsors/Jemeni11/)
or [Buy Me A Coffee](https://www.buymeacoffee.com/jemeni11).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

[MIT](LICENSE)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Changelog

[Changelog](/CHANGELOG.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
