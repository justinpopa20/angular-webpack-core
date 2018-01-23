## Angular 5 Seed Project

A basic Angular 5 seed project utilizing the following technologies:

The purpose of this seed project is to create an Angular environment with a little less configuration clutter. All configuration files are conveniently organized within the project's **config/** directory, instead of being strewn about the project structure and/or the project root. 

This makes makes configuration files much easier to find, as well as helping keep the general project structure a lot cleaner! 

* Angular 5.2.1
* TypeScript 2.5
* Karma/Jasmine & Istanbul
* Codelyzer & TSLint
* Stylelint for SASS
* Webpack 3 & HMR
* Typedoc

### Commands

* `npm start` - start the development webpack server with hot module reload (access via http://localhost:3000/)
* `npm test` - run the project unit tests (*.spec.ts files)
* `npm run coverage` - run the project unit tests one time and print out a coverage report, generated under **/coverage/index.html**
* `npm run lint` - run the project linting (will be run every time `npm test` is run)
* `npm run build:dev` - generate a dev build for the project, which will be inserted into dist/
* `npm run build` - generate a production build for the project, which will be inserted into dist/
* `npm run server` - run a live-server instance off of the **dist/** directory (generated from the `build` command)
* `npm run docs` - generate docs using typedoc