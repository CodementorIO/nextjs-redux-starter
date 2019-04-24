# Next.js redux starter
An opinionated Next.js starter kit with Express, Redux, SASS, and Jest.

## About
Next.js is an awesome and minimalistic framework to make a modern universal react app. However, there're times that we need a bit more features to build a complex SPA. That's why this project is born.

## Features
- Dynamic routing with [express](https://github.com/expressjs/express) and [next-routes](https://github.com/fridays/next-routes).
- State management with [redux](https://github.com/reactjs/redux), [react-redux](https://github.com/reactjs/react-redux), and [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
- Styling with SASS and render using [styled-jsx](https://github.com/zeit/styled-jsx)
- Unit testing with [jest](https://github.com/facebook/jest)
- Linting with [standard](https://github.com/standard/standard)
- [react-helmet](https://github.com/nfl/react-helmet), [Immutable.js
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
│   ├── _document.js
│   ├── about.js
│   └── index.js
├── routes.js
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
│   ├── styles
│   │   ├── SearchResults.scss
│   │   └── base.scss
│   └── test
│       ├── __mocks__
│       │   └── styleMock.js
│       ├── components
│       │   └── SearchResults.test.js
│       └── jest.setup.js
└── yarn.lock
```
