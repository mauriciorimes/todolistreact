import React, { Component } from "react";
import Mostraitens from "../ToDoItens/Mostraitens";

class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tarefa: ``,
      itens: []
    };

    this.addItem = this.addItem.bind(this);
    
    this.deleteItem = this.deleteItem.bind(this);
  }
 
  addItem(e) {
    let state = this.state;
    if(this._tarefaInput.value !== ``) {
      let newItem = {
        text: this._tarefaInput.value,
        key: Date.now()
      };
      this.setState({itens: [...state.itens, newItem]});
    }
    e.preventDefault();
    this.setState({tarefa: ``});
  } 

  deleteItem(key) {        
    let filtro = this.state.itens.filter((item) => {
      return(item.key !== key);
    })
    this.setState({itens: filtro});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addItem}>
          <input type="text" placeholder="Nova tarefa" name="tarefa"
          value={this.state.tarefa} onChange={(e) => 
          this.setState({tarefa: e.target.value})}
          ref={(e) => this._tarefaInput = e}/>

          <button type="submit">Adicionar</button>
        </form>       

        <Mostraitens lista={this.state.itens} delete={this.deleteItem}/>
      </div>
    );
  }
}

export default Todolist;
