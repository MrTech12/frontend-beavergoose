# frontend beavergoose

## Overview
* The frontend repo of my semester 6 Individual Project, written in TypeScript & Angular 13.2.2.
* It has the following features:
  - Creating an account
  - Logging into an account
  - Logging out
  - Viewing files that people have send
  - Sending a file to a person
  - Downloading a file

## Setup
* After cloning the repo, the following commands are required to start the application:
1. `npm install` -- Installing dependencies
2. `npm start` -- Runs the application with the 'development' configuration.
* The application is reachable on `localhost:4200`.

## Backend
* The application communicates with an API Gateway, for retrieving/sending data.
* The adress to reach the gateway, can be located in the following director: src -> environments
* There are two important files:
  - environment.dev.ts -- address to reach the development gateway.
  - environment.prod.ts -- address to reach the production gateway.

---

# Angular Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
