# Quin code assignment

## Dependencies
- redux-toolkit
- formik
- sass
- yup
- qs
- heroicons


## Architecture and project structure

I implemented the project with separation of concerns in mind and divided codes into files according to their functionalities to apply the Single Responsibility principle. I used `redux-toolkit` for state management. `components` folder has all of the UI Components. `app` and `features` is for the redux files.  I put all types,and interfaces in the `types` folder. `styles` folder has all the CSS files. 

## Styling

I used css modules and a sass for styling the components.
 
## The process and Improvements

I started by implementing data structure and state management part. I picked the user stories that are easier to do and tried to deliver a basic version of app that user can work with. I did not have time to implement the map if also I lost track of time so I could not do more testing to the project. If I had time I would cover more edge-cases to test. Also I would made the UI more pretty. The next step would be adding the Map, and after that trying to make rendering optimized by adding memoization. 


# The Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
