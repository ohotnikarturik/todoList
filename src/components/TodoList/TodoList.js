import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'

const TodoList = ({todos, onDeleted}) => {


  const elements = todos.map((item) => {
    const {id, ...restProps} = item;
    return (
        <li className='listItem' key={id}>
          <TodoListItem onDeleted={() => onDeleted(id)} {...restProps}/>
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