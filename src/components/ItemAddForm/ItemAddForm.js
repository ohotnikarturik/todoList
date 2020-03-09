import React, {Component} from "react";
import './ItemAddForm.css'

export default class ItemAddForm extends Component {
  state = {
    important: false
  };


  render() {
    const {onAddItem} = this.props;
    return (
        <div className='itemAddForm'>
          <button onClick={() => onAddItem('heloo aga')} className='btnItemAddForm'>Add Item</button>
        </div>
    )
  }
};
