
import React from 'react';
import ReactDOM from 'react-dom';
import './FilterableProductTable.css';

function ProductRow(props) {
  const product = props.product;
  const name = product.stocked ?
    product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductCategoryRow(props) {
  const category = props.category;
  return (
    <tr>
      <th>
        {category}
      </th>
    </tr>
  );
}

function ProductTable(props) {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return
    }
    if (inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }

    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleInStockChange(e){
    this.props.onInStockChange(e.target.checked);
  }

  handleFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value)
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <fieldset>
        <legend>Search Product</legend>
        <div>
          <input
            className="searchbar"
            type="text"
            placeholder="search for puducts"
            value={filterText}
            onChange={this.handleFilterTextChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          <label htmlFor="checkbox">Only show products in stock</label>
        </div>
      </fieldset>
    )
  }
}

// ======================================================

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

export default class FilterableProductTalbe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
      products: PRODUCTS,
    }

    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleInStockChange(inStockOnly){
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  handleFilterTextChange(filterText){
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className="filterable-product-table-container">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onInStockChange={this.handleInStockChange}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
