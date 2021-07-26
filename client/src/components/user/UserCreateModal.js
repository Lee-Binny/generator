import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

const UserCreateModal = (props) => {
    const [name ,setName] = useState('')
    const onChange = (e) => {
        setName(e.target.value)
    }

    const onClick = () => {
        axios.post('/user/create', {
            name: name
        }).then((res) => {
            console.log(res.data)
            props.onHide()
            if (res.data.ok === 'false') {
                props.setMessage(res.data.message)
                props.setShow(true)
            }
        }).catch((err) => {
            props.setMessage(err)
            props.setShow(true)
        });
    }

    return (
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>Create User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="name-input">Name</InputGroup.Text>
                    <FormControl
                    value={name}
                    onChange={onChange}
                    placeholder="이름을 입력하세요."
                    aria-label="Username"
                    aria-describedby="name-input"
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClick} variant="primary">Create</Button>
                <Button onClick={props.onHide} variant="secondary">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UserCreateModal;