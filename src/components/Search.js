import React, { useCallback, useEffect, useMemo, useState } from 'react';

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

  const onCheckboxClick = (name, checked) => {
    // TODO: implement checkbox click handler
    setColumns((prevState) => ({ ...prevState, [name]: checked }));
  };

  const filterProducts = useMemo(() => {
    const filter = props.products.filter((product) => {
      const checkNan = isNaN(parseFloat(price.priceTo)) ? Infinity : parseFloat(price.priceTo);
      return parseFloat(product.price) >= parseFloat(price.priceFrom) && parseFloat(product.price) <= checkNan;
    });
    return filter;
  }, [price, props]);

  useEffect(() => {
    if (price.priceFrom === '') {
      setPrice((prevState) => ({ ...prevState, priceFrom: 0 }));
    } else if (price.priceTo === '') {
      setPrice((prevState) => ({ ...prevState, priceTo: Infinity }));
    }
  }, [price]);

  return (
    <div className="Products">
      <FilterForm priceFrom={price.priceFrom} priceTo={price.priceTo} onPriceInputChange={onPriceInputChange} />
      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />
      <ProductList products={filterProducts} columns={columns} />
    </div>
  );
};

export default Search;
