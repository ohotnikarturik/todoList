import React, {Component} from "react";
import './SearhPanel.css'

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term: term});
    this.props.onSearchChange(term)
  };

  render() {
    return (
        <input type="text"
               className='searchPanel'
               placeholder='Search...'
               value={this.state.term}
               onChange={this.onSearchChange}/>
    )
  }
}
