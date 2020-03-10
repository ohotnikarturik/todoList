import React, {Component} from "react";
import './ItemStatusFilter.css'


export default class ItemStatusFilter extends Component {
  buttonsData = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

  render() {

    const { filter, onFilterChange } = this.props;
    const buttons = this.buttonsData.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'active' : 'btn';
      return (
          <button onClick={() => onFilterChange(name)}
              key={name}
                  type="button"
                  className={`btn ${clazz}`}>{label}</button>
      )
    });

    return (
        <div className="btnGroup">
          { buttons }
        </div>
    )
  }
};
