import React, { useState } from "react";
import '../styles/styles.css';
import Modal from "./Modal";
import Result from "./Result";
import SearchBar from './SearchBar';

const Main = () => {
    const [user, SetUser] = useState(undefined)
    const [message, SetMessage] = useState('')
    const [show, SetShow] = useState(false)

    const onHide = () => {
        SetShow(false)
    }
    return (
        <div className="header">
            <div className="search-section container">
                <SearchBar setUser={SetUser} setMessage={SetMessage} setShow={SetShow} />
            </div>
            {message !== '' && (
                <Modal show={show} message={message} onHide={onHide}/>
            )}
            {user && (
                <Result user={user}/>
            )}
        </div>
    )
}

export default Main;