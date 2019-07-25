This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### How to add the classes directly in the JSX element 
```jsx
const button = props => (
  <button 
    onClick = {props.clicked}
    className = {[classes.Button, classes[props.btnType]].join(' ')}// This is the way -- use array and join(" ")
    >{props.children}
  </button>
)
```
### How to use the .css(.scss) file effectively
- #### To avoid the same name in different css files, we can use [componentName].module.css, then the system would give them different name when explaining to html files.
- #### Another point that need to be mention is that we need to name the css element based their UI structures, then the system would load them correctly.
```jsx
import  React  from 'react';
import classes from './BuildControl.module.scss';

const BuildControl = props => (
  <div className = {classes.BuildControl}>
    <div className = {classes.Label}>{props.label}</div>
    <button className = {classes.Less} onClick = {props.removed} disabled = {props.disabled}>Less</button>
    <button className = {classes.More} onClick = {props.added} >More</button>
  </div>
);

export default BuildControl;
```
#### And its .module.css file
```css
.BuildControl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
}

.BuildControl button {
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #AA6817;
  cursor: pointer;
  outline: none;
}

.BuildControl button:disabled {
  background-color: #AC9980;
  border: 1px solid #7E7365;
  color: #ccc;
  cursor: default;
}

.BuildControl button:hover:disabled {
  background-color: #AC9980;
  color: #ccc;
  cursor: not-allowed;
}

.Label {
  padding: 10px;
  font-weight: bold;
  width: 80px;
}

.BuildControl .Less {  
  background-color: #D39952;
  color: white;
}

.BuildControl .More {
  background-color: #8F5E1E;
  color: white;
}

.BuildControl .Less:hover, .BuildControl .Less:active {  
  background-color: #DAA972;
  color: white;
}

.BuildControl .More:hover,.BuildControl .More:active {
  background-color: #99703F;
  color: white;
}
```
#### You could notice that the inside element would add the outside name first and a space, then the element name, and if it need the addition part, then add `.[restName]`.e.g. 
```css
.BuildControl button{...} 
.BuildControl .More {...} 
```