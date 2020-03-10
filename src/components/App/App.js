import React, {Component} from 'react';
import AppTitle from "../AppTitle/AppTitle";
import TodoList from "../TodoList/TodoList";
import './App.css'
import Subtitle from "../Subtitle/Subtitle";
import FormSearch from "../FormSearch/FormSearch";
import FormAdd from "../FormAdd/FormAdd";


export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Create Awesome React App'),
      this.createTodoItem('Have a lunch'),
    ],
    term: '',
    filter: 'all'
  };

  createTodoItem(label) {
    return {
      label,
      id: this.maxId++,
      done: false,
      important: false
    }
  }

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
    const newItem = this.createTodoItem(text);

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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    // 1. update object
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  onSearchChange = (term) => {
    this.setState({term});
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  };

  render() {

    const {todoData, term, filter} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleItem = this.filter(this.search(todoData, term), filter);

    return (
        <div className='wrapper'>
          <div className='container'>
            <AppTitle title='My Todo List'/>
            <FormSearch filter={filter}
                        onSearchChange={this.onSearchChange}
                        onFilterChange={this.onFilterChange}/>
            <FormAdd onAddItem={this.onAddItem}/>
            <Subtitle done={doneCount} more={todoCount}/>
            <TodoList onDeleted={this.onDeleteItem}
                      todos={visibleItem}
                      onToggleImportant={this.onToggleImportant}
                      onToggleDone={this.onToggleDone}/>
          </div>
        </div>
    )
  }
};



