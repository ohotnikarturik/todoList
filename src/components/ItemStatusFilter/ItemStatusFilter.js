import React, {Component} from "react";
import './ItemStatusFilter.css'


export default class ItemStatusFilter extends Component {
  state = {
    important: false
  };


  render() {

    return (
        <div className="btnGroup">
          <button type="button"
                  className="btn btnAll">All
          </button>
          <button type="button"
                  className="btn btnActive">Active
          </button>
          <button type="button"
                  className="btn btnDone">Done
          </button>
        </div>
    )
  }
};
