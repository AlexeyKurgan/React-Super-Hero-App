import React, { Component } from 'react';
import CardItem from '../CardItem';
import Spinner from '../Spinner';
import Error from '../Error';
import Pagination from '../Pagination';
import ButtonUp from '../ButtonUp';

import './CardContainer.css';

export default class CardContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            characterRows: 60,
            renderCharacters: [],
        }

        this.handleClick = this.handleClick.bind(this);
    }

    renderCharacters = (arr, currentPage) => {
        const { characterRows } = this.state;
        const indexOfLastCharcters = currentPage * characterRows;
        const indexOfFirstCharcters = indexOfLastCharcters - characterRows;
        const currentCharacters = arr.slice(indexOfFirstCharcters, indexOfLastCharcters);


        const renderCharacters = currentCharacters.map((character, index) => {
            return (
                <CardItem characterData={character} key={index} />
            )
        });
        return renderCharacters;
    }

    renderSearchByNameCards = (data, query) => {
        const result = data.filter(character => character.name.toLowerCase().includes(query.toLowerCase()));

        const renderCharacters = result.map((character, index) => {
                return (
                    <CardItem characterData={character} key={index} />
                )
        });
        
        return renderCharacters;
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            currentPage: Number(e.target.id)
        });
    }

    handleClickBtn = (e) => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -100)
            setTimeout(this.handleClickBtn, 5);
        }
        else if (window.pageYOffset === 0) {
            const btn = document.querySelector('.btn-up');
            btn.style.display = 'none';
        }
    }

    handleScrollBtn = (e) => {
        const btn = document.querySelector('.btn-up');
        let element = e.target;
        if (!(window.pageYOffset >= element.clientHeight)) {
            btn.style.display = 'none';
            btn.style.display = 'hidden';
        } else {
            btn.style.display = 'block';
            btn.style.display = 'visible';
        }
    }

    render() {

        const { error, data, isLoaded, query } = this.props;
        const { currentPage, characterRows } = this.state;
        const characterCards = this.renderCharacters(data, currentPage);
        const renderSearchByNameCards = this.renderSearchByNameCards(data, query);

        if (error) {
            return <Error />;
        }
        if (!isLoaded) {
            return (
                <div className="spinner-container">
                    <Spinner />
                </div>
            )
        }

        if (query === '') {
            return (
                <>
                    <section className="pagination-container">
                        <Pagination currentPage={this.state.currentPage} data={data} characterRows={characterRows} handleClick={this.handleClick} />
                    </section>

                    <section className="card-container" onWheel={this.handleScrollBtn}>
                        <ButtonUp handleClickBtn={this.handleClickBtn} />
                        {characterCards}
                    </section>
                </>
            );

        } else {
            return (
                <>
                    <section className="card-container" onWheel={this.handleScrollBtn}>
                        <ButtonUp handleClickBtn={this.handleClickBtn} />
                        {renderSearchByNameCards}
                    </section>
                </>
            )
        }

    }
}

