import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { GiCutDiamond, GiCoins, GiClover, GiKey } from 'react-icons/gi';
import Modal from '../Modal';

const UserProperty = ({user}) => {
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        data["name"] = user.name
        console.log(data)
        axios.post("/user/update/property", data
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
                <h5>Property</h5>
            </div>
            <form className="stats-contents" onSubmit={handleSubmit(onSubmit)}>
                <div className="one-stat">
                    <div className="stat-icon"><GiCutDiamond/></div>
                    <label>Dia</label>
                    <input
                        type="number"
                        name="dia"
                        defaultValue={user.dia}
                        {...register("dia", { valueAsNumber: true, required: true })}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiCoins/></div>
                    <label>Coin</label>
                    <input
                        type="number"
                        name="coin"
                        defaultValue={user.coin}
                        {...register("coin", { valueAsNumber: true, required: true })}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiClover/></div>
                    <label>Clover</label>
                    <input
                        type="number"
                        name="clover"
                        defaultValue={user.clover}
                        {...register("clover", { valueAsNumber: true, required: true })}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiKey/></div>
                    <label>Key</label>
                    <input
                        type="number"
                        name="key"
                        defaultValue={user.key}
                        {...register("key", { valueAsNumber: true, required: true })}
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

export default UserProperty;