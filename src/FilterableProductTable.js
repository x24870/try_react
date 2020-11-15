
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function SearchBar(props){
    return (
        <input type="text" placeholder="search for puducts"/>
    )
}

export default class FilterableProductTalbe extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SearchBar/>
        );
    }
}

ReactDOM.render(
    <FilterableProductTalbe />,
    document.getElementById('root')
);