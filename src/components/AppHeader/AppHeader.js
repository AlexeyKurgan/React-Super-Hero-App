import React from 'react';
import HeaderLogo from '../HeaderLogo';
import SearchPanel from '../SearchPanel';
import './AppHeader.css';

const AppHeader = (props) => {
    const { searchName } = props;

    return (
        <header className="header">
            <HeaderLogo />
            <SearchPanel searchName={searchName} />
        </header>
    );
};
export default AppHeader;


