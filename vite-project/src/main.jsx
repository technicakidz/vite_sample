import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// https://ja.reactjs.org/docs/introducing-jsx.html やってみている
function formatName(user) {
  return user.firstName + '' + user.lastName;
}

const user = {
  firstName: "taro",
  lastName: "ueda"
};

// const element = (
//   <h1>
//     add {formatName(user)} 👋
//   </h1>
// )

// const element = (
// <div>
//   <h1>
//     {getGreeting(user)} 👋
//   </h1>
//   <h2>Good to see you here.</h2>
//   </div>
// )

const elementLiteral = <div tabIndex="0"></div>;
const elementScript = <img src={user.avatarUrl}></img>;

// const elementA = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );

// const elementB = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// React 要素
// Note: this structure is simplified
// const elementC = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

function getGreeting(user){
  if (user) {
  <h1>
    add {formatName(user)} 👋
  </h1>
  }
  return <h2>Hello, Stranger.</h2>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // elementA,
  document.getElementById('root')
)