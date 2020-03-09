import React, {Component} from 'react';
import AppTitle from "../AppTitle/AppTitle";
import TodoList from "../TodoList/TodoList";
import './App.css'
import Subtitle from "../Subtitle/Subtitle";
import Form from "../Form/Form";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      {label: 'Drink Coffee', id: 1},
      {label: 'Create Awesome React App', id: 2},
      {label: 'Have a lunch', id: 3},

    ]
  };

  onDeleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      // const before = todoData.slice(0, idx);
      // const after = todoData.slice(idx + 1);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      }
    })
  };
  
  onAddItem = (text) => {
    const newItem = {
      label: text,
      id: this.maxId++
    };

    this.setState(({todoData}) => {

      const newArray = [
        newItem,
          ...todoData
      ];
      return {
        todoData: newArray
      }

    })

  };


  render() {
    return (
        <div className='wrapper'>
          <div className='container'>
            <AppTitle title='My Todo List'/>
            <Form/>
            <ItemAddForm onAddItem={this.onAddItem}/>
            <Subtitle done={1} more={3}/>
            <TodoList onDeleted={this.onDeleteItem} todos={this.state.todoData}/>
          </div>
        </div>
    )
  }
};



