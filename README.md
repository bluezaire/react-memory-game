# React Memory Game

This project was a training exercise on Scrimba called [Memory Game in React](https://scrimba.com/memory-game-in-react-c0a3odsk39/~0dq)

There is also a video tutorial called [Build a Memory Game in React Tutorial](https://www.youtube.com/watch?v=MzVbgZgGON4) on youtube. Since this repo has the code, the Youtube video is probably sufficient.

The layout of the files index.html and index.css files is slightly different. I had to put them under the public folder. I think this is just becuase the demonstration was not specific to a development environment.

I wasn't able to use the Emoji API, so I found an alternative that worked for me. This means some of the mapping for hte API is slightly different.

I also had to run the following npm commands to get the required dependencies installed:
npm i html-entities

Make the game your own. Add one of the following:

1. Timer/counter
2. React Countext API
3. React Router
4. Redesign
5. Different API

To deploy this on GitHub so you can play it, use to following:
[Deploying a React App\* to GitHub Pages](https://github.com/gitname/react-gh-pages)

To deploy, first commit and push your work to github for your branch so you don't lose anything in the deploy process

### `git add .`

### `git commit -m "[your commit message]"`

### `git push [alias]/[branch]`

for example:

### `git push origin master`

go to the branch you want to deploy and run the following

### `npm run deploy -- -m "[your commit message]"`

per the documentation, this will run predeploy and deploy and commit the work to the gh-pages branch.

The previous command will alter your workspace. Therefore, you need to check out the branch again so it
doesn't contain the changes that were made to publish to the gh-pages branch.

To do this, run the following

### `git checkout [alias]/[branch]`

for example:

### `git checkout origin master`

The game can be played here:
[Memory Game](https://bluezaire.github.io/react-memory-game/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

From the project folder, run the following command to create the project:

### `npx create-react-app react-memory-game`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
