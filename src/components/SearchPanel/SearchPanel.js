import React, { Component } from 'react';
import './SearchPanel.css';
import search from './img/search.svg';
import mielnir from './img/mielnir.svg';

export default class SearchPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }

    handleSearch = (e) => {
        this.setState({ query: e.target.value });
    }

    handleSubmit = (e) => {
        this.props.searchName(this.state.query);
        e.preventDefault();
        this.setState({
            query: ''
        })
    }

    render() {
        return (
            <form className="search-bar" onSubmit={this.handleSubmit}>
                <img  className="search-bar__miolnir" src={mielnir} alt="miolnir icon" />
                <input className="search-bar__input" value={this.state.query} type="text" placeholder="Search.." onChange={this.handleSearch} />
                <img className="search-bar__icon" src={search} alt="search icon" />
            </form>
        );

    }
}

