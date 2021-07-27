import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import axios from 'axios';

const UserProfile = ({name, setUser}) => {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState(name);
    const [editName, setEditName] = useState(name);

    const onChange = (e) => {
        setEditName(e.target.value)
    }

    const onClick = () => {
        setEditMode(true)
    }

    const onDelete = () => {
        axios.post("/user/delete", {
            name: name
        }).then((res) => {
            if (res.data.ok === "true") {
                setUser(undefined)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    const onClickEdit = () => {
        axios.post("/user/update/name", {
            originName: userName,
            editName: editName
        }).then((res) => {
            if (res.data.ok === "true") {
                setUserName(res.data.user.name)
            }
        }).catch((err) => {
            console.log(err)
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
                <button onClick={onDelete} className="delete-button">
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default UserProfile;