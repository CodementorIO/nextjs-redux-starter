# Next.js redux starter
An opinionated Next.js starter kit with Express, Redux Toolkit, styled-components, and react-testing-library.

[![Build Status](https://travis-ci.org/CodementorIO/nextjs-redux-starter.svg?branch=master)](https://travis-ci.org/CodementorIO/nextjs-redux-starter)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Greenkeeper badge](https://badges.greenkeeper.io/CodementorIO/nextjs-redux-starter.svg)](https://greenkeeper.io/)

## About
Next.js is an awesome and minimalistic framework to make a modern universal react app. However, there're times that we need a bit more features to build a complex SPA. That's why this project is born.

## Features
- ▲ Based on latest [Next.js](https://github.com/zeit/next.js)
- 🗄  State management with [redux-toolkit](https://github.com/reduxjs/redux-toolkit)
- 💅 Styling with [styled-components](https://github.com/styled-components/styled-components)
- 🐐 Unit testing with [react-testing-library](https://github.com/testing-library/react-testing-library)
- 🛀 Linting staged changes on [pre-commit](https://github.com/pre-commit/pre-commit) with [standard](https://github.com/standard/standard)
- ⛑ [react-helmet](https://github.com/nfl/react-helmet), [dotenv](https://github.com/motdotla/dotenv), and more...

## Getting started
```
git clone https://github.com/CodementorIO/nextjs-redux-starter my-project
cd my-project
yarn install
yarn start
```

Then open `http://localhost:3100/` to see your app.

### Deployment
After `npm run build` finished, run

```
yarn serve
```

If you prefer using `now`, just modify `now.json` config.

## Structure overview
```
├── README.md
├── next.config.js
├── now.json
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── about.js
│   └── index.js
├── public
│   └── static
├── server
│   └── index.js
├── src
│   ├── components
│   ├── config.js
│   ├── features
│   ├── libs
│   ├── store.js
│   ├── tests
│   │   ├── components
│   │   └── test-utils.js
│   └── theme.js
└── yarn.lock
```
