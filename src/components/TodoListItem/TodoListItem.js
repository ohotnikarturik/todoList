import React, {Component} from "react";
import './TodoListItem.css'

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    })
  };

  render() {

    const {label, onDeleted} = this.props;
    const {done, important} = this.state;

    let classNames = 'todoListItem';

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' mark'
    }

    return (
        <div className='item'>
          <span onClick={this.onLabelClick} className={classNames}>{label}</span>
          <div>
            <button className='buttonItem' onClick={onDeleted}>Delete</button>
            <button className='buttonItem' onClick={this.onMarkImportant}><span className='buttonImp'>!</span></button>
          </div>
        </div>
    )
  }
};
