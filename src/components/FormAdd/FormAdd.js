import React, {Component} from "react";
import './FormAdd.css'

export default class FormAdd extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({label: e.target.value})
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({label: ''})
  };

  render() {
    return (
        <form onSubmit={this.onSubmit} className='formAdd'>
          <input onChange={this.onLabelChange}
                 type="text"
                 className='searchPanel'
                 placeholder='What needs to be done...'
                 value={this.state.label}/>
          <button className='btnItemAddForm'>Add Item</button>
        </form>
    )
  }
};
