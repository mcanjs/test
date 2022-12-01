import React, { useCallback, useEffect, useState } from 'react';

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const [products, setProducts] = useState([]);

  const onPriceInputChange = (name, value) => {
    setPrice((prevState) => ({ ...prevState, [name]: value }));
  };

  const onCheckboxClick = useCallback((name, checked) => {
    // TODO: implement checkbox click handler
    setColumns((prevState) => ({ ...prevState, [name]: checked }));
  }, []);

  const filterProducts = () => {
    const filter = products.filter(
      (product) =>
        parseInt(product.price) >= parseInt(price.priceFrom) && parseInt(product.price) <= parseInt(price.priceFrom)
    );
    setProducts(filter);
  };

  useEffect(() => {
    setProducts(props.products);
  }, [props]);

  return (
    <div className="Products">
      <FilterForm priceFrom={price.priceFrom} priceTo={price.priceTo} onPriceInputChange={onPriceInputChange} />
      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />
      <ProductList products={products} columns={columns} />
    </div>
  );
};

export default Search;
