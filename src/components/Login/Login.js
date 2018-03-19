import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import './Login.css';

const login = (props) => {
    return (
        <div className={'Login'}>
            <form onSubmit={(event) => props.submit(event)}>
                {props.password}
                <InputGroup className={'mb-2'}>
                    <Input placeholder="Username" type="text" onChange={(event) => props.changed(event,'username')}
                      />
                </InputGroup>
                <InputGroup className={'mb-2'}>
                    <Input placeholder="Password" type="password" onChange={(event) => props.changed(event,'password')}
                        />
                </InputGroup>
                <Button type="submit" color="primary">Login</Button>
            </form>
        </div>
    )
}

export default login;
