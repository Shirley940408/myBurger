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

### How to add the CSS classes directly in the JSX element 
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
## Http requst

### Difference of React App (single-page app) and other app (multi-page app).

- ##### React App could decouple the server and the showing pages in the front-end, it means the response from the server side is not html pages, is the JSON data.
- ##### Ather app(multi-page app) cannot decouple with server, that means its response from the server is html pages.

[request and response](./img/httpRequest.png)

### axios
##### axios is a third-part library and it could be added in any javascript environment. It used to send http requests. 
##### [GitHub - axios/axios: Promise based HTTP client for the browser and node.js](https://github.com/axios/axios)

### Using axios to send http request
#### Attention Points:
- #### If you are using setState() in componentDidUpdate(), then a Loop problem could be caused, if(...){axios...} might solve this problem.
```jsx
import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
    }
    componentDidUpdate(){
        if(this.props.id){
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    // console.log(response);
                    this.setState({loadedPost: response.data});
                })
                // console.log(this.state.loadedPost)
            }
        }
    }
    render () {
        let post = <p style = {{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style = {{textAlign: 'center'}}>Loading!...</p>;
        }
        if (this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;
```
### axios.post
#### `axios.post('url', data)`
```jsx
postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        }
        axios.post('https://jsonplaceholder.typicode.com/posts/', data)
        .then(response => {
            console.log(response);
        });
    }
```
### axios.delete
#### `axios.delete('url')`
```jsx
deletePostHandler = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
    .then(response => {
        console.log(response);
    });
}
```
### catch errors
#### `.then(...).catch(error => {....})`
```jsx
componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/postssss').then(response => {
            const posts = response.data.slice(0, 4);//get an new array from the [0] position to [3](4-1) elements
            const updatedPosts = posts.map(post => {
                return{
                    ...post,
                    author: 'Max'
                }
            });

            this.setState({ posts: updatedPosts});
            // console.log(response);
        }).catch(error => {
            // console.log(error);
            this.setState({selectedPostId: true});
        })
        //axios used promises to achieve asychronize
    }
```
#### Authorization: 'Auth Token' has been added in to header
[requestAuthorization](./img/requestAuthorization.png)
#### contentType has been added in header 
[postContentType](./img/postContentType.png)

- #### If you need more than one url
 #### create the axios.js file, then replace them when the url is different with global file.
```jsx
import axios from 'axios';

const instance = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] ='AUTH TOKEN';
// instance.interceptors.request...

export default instance;
```
### How to use eject to release the RAM room remainng by unused axios Interceptor?(In a class-based component)
#### e.g. 
`const Instance = axios.interceptors
request/response.use(...); axios.interceptors.request/response.eject() `
```jsx
    constructor(props){
      super(props);
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        /* res => res means just ruturn the response, 
        it is another form of 'return response;' */
        this.setState({error: {message: 'Network Error'}});
      })
    }
    
    componentWillUnmount () {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

```
### react router
`npm install --save react-router react-router-dom`

#### When using react route, always wrap the BrowerRouter of the enter of this, otherwise it will cause error.
```jsx
// App.js
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// Blog.js

import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';
class Blog extends Component {

    render () {

        return (
            <div className ="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/new-post">New Post</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path = "/" exact render = {() => <h1>Home</h1>}/>
            </div>
        );
    }
}

export default Blog;
```
#### the 'exact' effect
- ##### Path itself in the route means all the prefix matched this routing path, and it could cause all the path that contain this perfix would be routed to this component which in render. to avoid this, we need to add an 'exact' to only match when the routing path is exactly the same as what we write in path.
- ##### Another way is to write more specific route on the top, more general on in the bottom.

### default case of route
`<Route path='...' component = {...} />`
```jsx
 <Route path = "/new-post" component = {NewPost}/>
```
### Link
#### Link is for solving reload problem, instead of <a></a>, link could make react to re-render. 
```jsx
  <Link to = {{
      pathname: '/new-post',
      hash: '#submit',
      search: '?quick-submit=ture'
  }}>New Post</Link>
```
[Link](./img/Link.png)