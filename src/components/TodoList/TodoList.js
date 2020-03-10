import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {


  const elements = todos.map((item) => {
    const {id, ...restProps} = item;
    return (
        <li className='listItem' key={id}>
          <TodoListItem onDeleted={() => onDeleted(id)} {...restProps}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleDone={() => onToggleDone(id)}/>
        </li>
    );
  });

  return (
      <ul className='todoList'>
        {elements}
      </ul>
  )

};

export default TodoList;