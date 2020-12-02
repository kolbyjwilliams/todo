import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {ToDoBanner} from './TODOBANNER';
import {ToDoRow} from './TODOROW';
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

//  Feature 3 & 4
  //  If the ToDoRow Component's "done" property experiences a change event (ie. checking the Mark Complete box in the UI) then the ToDoRow Component calls a callback method called toggleToDo (below)  and passes toggleToDo the checked todo item
  //  ----- Function to display table rows ------

  todoTableRows = (finishedTask) => this.state.todoList.filter(
    x  => x.done === finishedTask).map(y => 
    <ToDoRow
    key={y.action}
    item={y}
    callback={this.toggleToDo} // The callback will be invoked (executed, run) when everything in <ToDoRow> is finished AND the user clicks the input box
    //  The data passed into the callback from the ToDoRow componet is passed automatically into the function defined in the callback
    />
  );

//-----------------Function to toggle and item from done to not done or visversa
toggleToDo = (checkedToDoItem) => this.setState(
  {
    todoList: this.state.todoList.map(
       bob => bob.action === checkedToDoItem.action ? {...bob, done: !bob.done} : bob
       )
  }
);

render = () =>
<div>
  {/*Features 1 and 2*/}
  <ToDoBanner

  todoOwner = {this.state.todoOwner}
  todoList = {this.state.todoList}

/>

{/* Freatures 3 and 4*/}
<table className = "table table-striped table-bordered">
  <thead>
    <th>Action</th>
    <th>Mark As Complete</th>
  </thead>
  <tbody>
    {this.todoTableRows(false)}
  </tbody>
</table>

{/* Freatures 6 and 7*/}
<table className = "table table-striped table-bordered">
  <thead>
    <th>Action</th>
    <th>Mark As NOT Complete</th>
  </thead>
  <tbody>
    {this.todoTableRows(true)}
  </tbody>
</table>

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
