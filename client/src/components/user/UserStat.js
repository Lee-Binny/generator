import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { GiHearts, GiStiletto, GiMagicPotion, GiShield } from 'react-icons/gi';
import Modal from '../Modal';

const UserStat = ({user}) => {
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        data["name"] = user.name
        console.log(data)
        axios.post("/user/update/stat", data
        ).then((res) => {
            if (res.data.ok === "true") {
                setMessage('Complete!')
                setShow(true)
            } else {
                setMessage('Failed!')
                setShow(true)
            }
        }).catch((err) => {
            console.log(err)
            setMessage('Failed!')
            setShow(true)
        })
    }

    return (
        <div className="user-stats">
            <div className="stats-title">
                <h5>Stats</h5>
            </div>
            <form className="stats-contents" onSubmit={handleSubmit(onSubmit)}>
                <div className="one-stat">
                    <div className="stat-icon"><GiHearts/></div>
                    <label>HP</label>
                    <input
                        defaultValue={user.hp}
                        {...register("hp", { valueAsNumber: true, required: true })}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiStiletto/></div>
                    <label>ATK</label>
                    <input
                        defaultValue={user.atk}
                        {...register("atk", { valueAsNumber: true, required: true })}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiMagicPotion/></div>
                    <label>MP</label>
                    <input
                        defaultValue={user.mp}
                        {...register("mp", { valueAsNumber: true, required: true })}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiShield/></div>
                    <label>DEF</label>
                    <input
                        defaultValue={user.def}
                        {...register("def", { valueAsNumber: true, required: true })}
                    />
                </div>
                <div className="stat-modify">
                    <button>
                        수정
                    </button>
                </div>
            </form>
            <Modal
                show={show}
                message={message}
                onHide={() => setShow(false)}
            />
        </div>
    )
}

export default UserStat;