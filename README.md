# Next.js redux starter
An opinionated Next.js starter kit with Express, Redux, styled-components, and react-testing-library.

[![Build Status](https://travis-ci.org/CodementorIO/nextjs-redux-starter.svg?branch=master)](https://travis-ci.org/CodementorIO/nextjs-redux-starter)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Greenkeeper badge](https://badges.greenkeeper.io/CodementorIO/nextjs-redux-starter.svg)](https://greenkeeper.io/)

## About
Next.js is an awesome and minimalistic framework to make a modern universal react app. However, there're times that we need a bit more features to build a complex SPA. That's why this project is born.

## Features
- ▲ Based on latest [Next.js](https://github.com/zeit/next.js)
- 🗄  State management with [redux](https://github.com/reactjs/redux), [react-redux](https://github.com/reactjs/react-redux), and [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
- 💅 Styling with [styled-components](https://github.com/styled-components/styled-components)
- 🐐 Unit testing with [react-testing-library](https://github.com/testing-library/react-testing-library)
- 🛀 Linting staged changes on [pre-commit](https://github.com/pre-commit/pre-commit) with [standard](https://github.com/standard/standard)
- ⛑ [react-helmet](https://github.com/nfl/react-helmet), [Immutable.js
](https://github.com/facebook/immutable-js/), [dotenv](https://github.com/motdotla/dotenv), and more...

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
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── about.js
│   └── index.js
├── server
│   └── index.js
├── src
│   ├── actions
│   │   └── repos.js
│   ├── components
│   │   └── SearchResults.js
│   ├── config.js
│   ├── containers
│   │   └── SearchRepoContainer.js
│   ├── libs
│   │   └── github.js
│   ├── reducers
│   │   ├── index.js
│   │   └── repos.js
│   ├── store
│   │   └── createStore.js
│   └── test
│       ├── components
│       │   └── SearchResults.test.js
│       └── test-utils.js
└── yarn.lock
```
