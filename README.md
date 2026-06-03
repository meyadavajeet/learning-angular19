# Myapp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.22.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.





# Docs By Me 

## Install bootstrap and font-awesome in angular application
```js
npm i bootsrap
npm i font-awesome
```
- After installing need to add the linking in the angular.json file
```json
  "styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "./node_modules/font-awesome/css/font-awesome.min.css",
    "src/styles.css"
  ],
```
- After adding in the angular.json file need to re-compile the application
- Note - Whenever we change in the angular.json file application need recompilation.

## What is package.json?
- Package.json contains enteries of the packages alogn with their versions which you are going to use in your angular project.

## What is angular.json?
- Configuration file for the angular project means all the settings/file linking of our angular project will be here.

- main.ts - It is the starting point of our angular application, whenever our angular application starts this is the first file which will execute. 

- The entry of main.ts and index.html are provided in the angular.json file.


## Data Binding
- How to declare variable/ state in component?
- What is Data Binding?
- What is one way Data Binding?
  - In one way data binding we have 3 way 
    - Interpolation
    - PropertyBinding
    - Event Binding
- What is two way Data Binding?
  - In two way data binding we have 1 way
    - using ngModel Directive

