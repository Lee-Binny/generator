import React, { useState } from "react";
import '../styles/styles.css';
import SearchBar from './searchBar';

const Main = () => {
    const [user, SetUser] = useState(undefined)
    return (
        <div className="header container">
            <div className="search-section">
                <SearchBar setUser={SetUser} />
            </div>
        </div>
    )
}

export default Main;