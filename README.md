[![Contributors][contributors-shield]][contributors-url]
[![Last Commit][last-commit]][commit-url]
[![Pull Requests][pr-shield]][pr-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h2 align="center">Listing Crime Rate</h2>

  <p align="center">
    A way to get a crime score for house listings around the SF area
    <br />
    <br />
    <a href="https://github.com/csjoblinksreddit/Listings-Crime-Rate/issues">Report Bug</a>
    ·
    <a href="https://github.com/csjoblinksreddit/Listings-Crime-Rate/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Running the frontend](#Running-the-frontend)
  * [Running the backend](#Running-the-frontend)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)


### Problem

People are uninformed about crimes when buying or renting a home.

### Solution

Our solution shows people crimes that have happened within a radius of a provided zip code. Thus making the renter or buyer more informed.

## Getting Started

To get started with our application:

- Clone the repository
- Install the dependecies in the backend and frontend folders
- The front end and backend must be started seperately

### Running the frontend
- In the frontend folder
    - run npm start

### Running the backend

Our application uses AWS DynamoDB to house our crime data. As of 11/08/2020 we have deleted our DynamoDB instance. If you would like to create your own DynamoDB instance with the data, create an issue against this repo.

In order to use the backend correctly you must do the following
- Create and AWS account and get an Access Key and Secret Key
- Create a Rapid API account and subscribe to the realtor.p.rapidapi.com API
- Create a .env file in the backend folder
- In the .env file add your keys as follows:

```text
accessKeyId=YOUR_AWS_ACCESSKEY_ID

secretAccessKey=YOUR_AWS_SECRET_ACCESSKEY

rapidapi_key=YOUR_RAPID_API_ACCESSKEY
```


- After that is setup you can run 

```JS
node index.js
```
in a command terminal to start the backend

### Pull request guidelines

1. When creating a pull request make sure that it is titled in the following way

**[Issue Number] Description of pull request**

For example if I was working on an issue related to adding a method to an api that had a ticket number 287 on Jira my pull request title would be

**[287] Added the updateDB method to methods.js**


## Available Scripts

### Frontend

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the react section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the react section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/csjoblinksreddit/Listings-Crime-Rate?style=for-the-badge

[contributors-url]: https://github.com/csjoblinksreddit/Listings-Crime-Rate/graphs/contributors


[last-commit]: https://img.shields.io/github/last-commit/csjoblinksreddit/Listings-Crime-Rate?style=for-the-badge

[commit-url]: https://github.com/csjoblinksreddit/Listings-Crime-Rate/commits/master


[pr-shield]: https://img.shields.io/github/issues-pr-closed/csjoblinksreddit/Listings-Crime-Rate?style=for-the-badge

[pr-url]: https://github.com/csjoblinksreddit/Listings-Crime-Rate/pulls


[issues-url]: https://github.com/csjoblinksreddit/Listings-Crime-Rate/pulls

[license-shield]: https://img.shields.io/github/license/csjoblinksreddit/Listings-Crime-Rate?style=for-the-badge

[license-url]: https://github.com/csjoblinksreddit/Listings-Crime-Rate/blob/master/License.txt


[product-screenshot]: images/screenshot.png