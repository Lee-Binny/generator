import React, { useState } from "react";
import '../styles/styles.css';
import axios from 'axios';

const SearchBar = ({setUser}) => {
    const [userName, setUserName] = useState('')
    const onChange = (e) => {
        setUserName(e.target.value)
    }

    const onClick = () => {
        axios.post('/user/search', {
            name: userName
        }).then((res) => {
            if (res.data.ok === 'true') {
                console.log(res.data.user)
                setUser(res.data.user)
            }
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <div className="search-bar">
            <input 
                type="text"
                placeholder="닉네임을 입력하세요."
                value={userName}
                onChange={onChange}
            />
            <button onClick={onClick}>검색</button>
        </div>
    )
}

export default SearchBar;