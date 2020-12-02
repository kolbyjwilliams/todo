import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {ToDoBanner} from './TODOBANNER';
export default class App extends Component {
//  Above we have created a class called App the extends the functionality of the Component class
//  The export keyword above makes the class available for use outside of the JS file where it is created
constructor(){
  super();
  //  React components have a special property called "state".  The "state" is used to define the state of data (props)
this.state = {
  todoOwner: "Kolby",
  todoList: [
    {action: "Move burn pile", done: false},
    {action: "Oil Change", done: false},
    {action: "Clean Room", done: false},
    {action: "X-mas Shopping", done: false},
    {action: "Do hella gaming", done: true}
  ]
}
}// End of Constructor
render = () =>
<div>
  {/*Features 1 and 2*/}
  <ToDoBanner

  todoOwner = {this.state.todoOwner}
  todoList = {this.state.todoList}

/>
</div>
}// End of APP

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
