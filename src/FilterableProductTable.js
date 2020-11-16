
import React from 'react';
import ReactDOM from 'react-dom';
import './FilterableProductTable.css';

function ProductRow(props) {
  return (
    <div className="product">Product1</div>
  );
}

function ProductCategoryRow(props) {
  return (
    <div className="product-category-row">
      <span>Electronic</span>
    </div>
  );
}

function ProductTable(props) {
  return (
    <div className="product-table">
      <div>
        <span>Name</span>
        <span>Price</span>
      </div>
      <ProductCategoryRow></ProductCategoryRow>
      <ProductRow></ProductRow>
    </div>
  );
}

function SearchBar(props) {
  return (
    <fieldset>
      <legend>Search Product</legend>
      <div>
        <input className="searchbar" type="text" placeholder="search for puducts" />
      </div>
      <div>
        <input type="checkbox" name="checkbox"/>
        <label for="checkbox">Only show products in stock</label>
      </div>
    </fieldset>
  )
}

export default class FilterableProductTalbe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterable-product-table-container">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

ReactDOM.render(
  <FilterableProductTalbe />,
  document.getElementById('root')
);