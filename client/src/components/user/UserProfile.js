import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import axios from 'axios';

const UserProfile = ({name}) => {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState(name);
    const [editName, setEditName] = useState(name);
    
    const onChange = (e) => {
        setEditName(e.target.value)
    }

    const onClick = () => {
        setEditMode(true)
    }

    const onClickEdit = () => {
        axios.post("/user/editName", {
            originName: userName,
            editName: editName
        }).then((res) => {
            if (res.data.ok === "true") {
                console.log(res.data.user)
                setUserName(res.data.user.name)
            }
        }).catch((err) => {

        })
        
        setEditMode(false)
    }

    return (
        <div className="profile-section">
            <div className="user-profile">
                <span className="user-name">
                    { editMode ? 
                        <div>
                            <input 
                                className="edit-input"
                                type="text"
                                value={editName}
                                onChange={onChange}>
                            </input> 
                            <button
                                className="edit-button"
                                onClick={onClickEdit}>
                                수정
                            </button>
                        </div>
                        : <strong>{userName}</strong>
                    }
                    
                </span>
                <span className="name-edit" onClick={onClick}>
                    { editMode ? null : <BiEditAlt/>}      
                </span>
            </div>
        </div>
    )
}

export default UserProfile;