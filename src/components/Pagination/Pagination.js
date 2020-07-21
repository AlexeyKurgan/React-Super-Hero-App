import React from 'react';
import './Pagination.css'

const Pagination = (props) => {

    const { data, characterRows, handleClick, currentPage } = props

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / characterRows); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
        let activePage = 'pagination-items';
        
        if (number === currentPage) {
            activePage += ' active';
        }

        return (
            <div key={`page${number}`} className="pagination-container">
                <div
                    className={activePage}
                    id={number}
                    onClick={handleClick}
                >
                    {number}
                </div>
            </div>
        );

    });

    return (
        <>
            {renderPageNumbers}
        </>
    )
}

export default Pagination;

