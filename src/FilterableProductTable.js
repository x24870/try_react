
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

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <legend>Search Product</legend>
        <div>
          <input className="searchbar" type="text" placeholder="search for puducts" onChange={this.props.onChange} />
        </div>
        <div>
          <input type="checkbox" name="checkbox" />
          <label htmlFor="checkbox">Only show products in stock</label>
        </div>
      </fieldset>
    )
  }
}

export default class FilterableProductTalbe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      filterText: e.target.value,
    });
  }

  render() {
    return (
      <div className="filterable-product-table-container">
        <SearchBar onChange={(e) => this.handleChange(e)} />
        <ProductTable />
      </div>
    );
  }
}

ReactDOM.render(
  <FilterableProductTalbe />,
  document.getElementById('root')
);