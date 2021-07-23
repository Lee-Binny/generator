import React, { useState } from "react";
import '../styles/styles.css';
import Result from "./Result";
import SearchBar from './SearchBar';

const Main = () => {
    const [user, SetUser] = useState(undefined)
    return (
        <div className="header">
            <div className="search-section container">
                <SearchBar setUser={SetUser} />
            </div>
            {user && (
                <Result user={user}/>
            )}
        </div>
    )
}

export default Main;