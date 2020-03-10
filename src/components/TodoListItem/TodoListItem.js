import React, {Component} from "react";
import './TodoListItem.css'

export default class TodoListItem extends Component {

  render() {

    const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

    let classNames = 'todoListItem';

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' mark'
    }

    return (
        <div className='item'>
          <span onClick={onToggleDone}
                className={classNames}>{label}</span>
          <div>
            <button className='buttonItem'
                    onClick={onDeleted}>Delete
            </button>
            <button className='buttonItem'
                    onClick={onToggleImportant}><span className='buttonImp'>!</span></button>
          </div>
        </div>
    )
  }
};
