import React from 'react';

export const ToggleColumns = (props) => {
  // TODO: Bind handlers and props
  return (
    <div className="toggle-columns">
      {Object.keys(props.columns).map((column, index) => {
        return (
          <div key={index}>
            <label htmlFor={column}>{column}</label>
            <input
              id={column}
              name={column}
              type="checkbox"
              defaultChecked={props.columns[column]}
              onClick={(e) => props.onCheckboxClick(column, e.currentTarget.checked)}
            />
          </div>
        );
      })}
    </div>
  );
};
