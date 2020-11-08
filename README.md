[![Contributors][contributors-shield]][contributors-url]
[![Last Commit][last-commit]][commit-url]
[![Pull Requests][pr-shield]][pr-url]
[![MIT License][license-shield]][license-url]

## Project Guidelines

### Running the backend

1. in order to run the backend you must have a .env file in your backend folder that contains your aws keys as follows:

`accessKeyId=YOUR_AWS_ACCESSKEY_ID`

`secretAccessKey=YOUR_AWS_SECRET_ACCESSKEY`

### Pull request guidelines

1. When creating a pull request make sure that it is titled in the following way

**[Issue Number] Description of pull request**

For example if I was working on an issue related to adding a method to an api that had a ticket number 287 on Jira my pull request title would be

**[287] Added the updateDB method to methods.js**


2. **Never** merge your own pull request. This is bad practice to do so and could lead to issues in the code down the line

3. Evey pull request must have at least one code review done before being merged

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts (see project guidleines to ensure your application state is prepared for the given script)
To start the application, in the backend folder, you can run: 

### `node index.js`

In the frontend folder, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/csjoblinksreddit/Listings-Crime-Rate?style=for-the-badge

[contributors-url]: https://github.com/csjoblinksreddit/Listings-Crime-Rate/graphs/contributors


[last-commit]: https://img.shields.io/github/last-commit/csjoblinksreddit/Listings-Crime-Rate?style=for-the-badge

[commit-url]: https://github.com/csjoblinksreddit/Listings-Crime-Rate/commits/master


[pr-shield]: https://img.shields.io/github/issues-pr-closed/csjoblinksreddit/Listings-Crime-Rate?style=for-the-badge

[pr-url]: https://github.com/csjoblinksreddit/Listings-Crime-Rate/pulls


[issues-url]: https://github.com/csjoblinksreddit/Listings-Crime-Rate/pulls

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square

[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png