# Electron React Typescript Boilerplate

Derived and cleaned-up from this guide: https://www.youtube.com/watch?v=kvSN8vAwx0k&t=55s

Additional scripts have been added (see below).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode, and will open a new Electron window.<br />

The page will NOT reload if you make edits.<br />

### `npm run start:web`

Runs the app in the development mode, and will open a new browser window.<br />

The page will reload if you make edits.<br />
You will also see linting errors and such, just like regular web development.

### `npm run start:desktop`

Builds the desktop app and runs it with electron.<br />

The page will NOT reload if you make edits.<br />
It is recommended that, for development purposes, you stick to `npm start` for convenience.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build:web`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `npm run build:desktop`

Compiles the typescript for the whole project for production to the `build` folder.<br />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run dist`

Package the electron project into a distributable format (eg. dmg, windows installer, deb package, etc)<br />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

For the original, unedited version of this boilerplate, please visit https://github.com/conditionalcoding/typescript-electron-react
