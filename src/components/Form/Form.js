import React, {Component} from "react";
import './Form.css'
import SearchPanel from "../SearhPanel/SearhPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

export default class Form extends Component {
  state = {
    important: false
  };



  render() {


    return (
        <form className='form'>
          <SearchPanel/>
          <ItemStatusFilter/>
        </form>
    )
  }
};
