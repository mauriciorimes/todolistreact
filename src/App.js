import React, { Component } from "react";
import Todolist from "./components/ToDoList/Todolist.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div>
        <h1>Lista de tarefas</h1>
        <Todolist />

      </div>
    );
  }

}

export default App;
