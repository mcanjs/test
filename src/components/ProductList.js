import React from 'react';

export const ProductList = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {props.columns.id && <th>ID</th>}
            {props.columns.name && <th>Name</th>}
            {props.columns.department && <th>Department</th>}
            {props.columns.price && <th>Price</th>}
            {props.columns.currency && <th>Currency</th>}
          </tr>
        </thead>
        <tbody>
          {typeof props.products !== 'undefined' &&
            props.products.length > 0 &&
            props.products.map(({ id, name, price, department, currency }) => (
              <tr key={id}>
                {props.columns.id && <td>{id}</td>}
                {props.columns.name && <td>{name}</td>}
                {props.columns.department && <td>{department}</td>}
                {props.columns.price && <td>{price}</td>}
                {props.columns.currency && <td>{currency}</td>}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
