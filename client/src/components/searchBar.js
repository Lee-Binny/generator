import React, { useState } from "react";
import '../styles/styles.css';
import axios from 'axios';
import UserCreateModal from './user/UserCreateModal'

const SearchBar = ({setUser, setMessage, setShow}) => {
    const [userName, setUserName] = useState('')
    const [showModal, setShowModal] = useState(false)
    const onChange = (e) => {
        setUserName(e.target.value)
    }

    const onClick = () => {
        axios.post('/user/search', {
            name: userName
        }).then((res) => {
            if (res.data.ok === 'true') {
                setUser(res.data.user)
                setMessage('')
            } else {
                setUser(undefined)
                setMessage(res.data.message)
                setShow(true)
            }
        }).catch((err) => {
            setMessage(err)
        });
    }

    const onCreate = () => {
        setShowModal(true)
    }

    return (
        <div className="search-bar">
            <input 
                type="text"
                placeholder="닉네임을 입력하세요."
                value={userName}
                onChange={onChange}
            />
            <button className="search-button" onClick={onClick}>⌕</button>
            <button className="create-button" onClick={onCreate}>+</button>
            <UserCreateModal 
                show={showModal} 
                setShow={setShow}
                setMessage={setMessage} 
                onHide={() => setShowModal(false)}
            />
        </div>
    )
}

export default SearchBar;