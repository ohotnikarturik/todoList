import React, {Component} from "react";
import './FormSearch.css'
import SearchPanel from "../SearhPanel/SearhPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

export default class FormSearch extends Component {

  render() {
    return (
        <form className='formSearch'>
          <SearchPanel onSearchChange={this.props.onSearchChange}/>
          <ItemStatusFilter filter={this.props.filter}
                            onFilterChange={this.props.onFilterChange}/>
        </form>
    )
  }
};
