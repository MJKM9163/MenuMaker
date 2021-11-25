import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { valueChange } from '../../modules/auth';
import Auth from '../../components/auths/Auth';

const AuthContainerBlock = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: #ffffff;
`;

const AuthContainer = () => {
    const dispatch = useDispatch();
    const [formChange, setFormChange] = useState(false);

    const { username } = useSelector(({ auth }) => ({
        username: auth.username,
    }));
    const { password } = useSelector(({ auth }) => ({
        password: auth.password,
    }));
    const { password_check } = useSelector(({ auth }) => ({
        password_check: auth.password_check,
    }));

    const change = (e) => {
        const { name, value } = e.target;
        if (name === "username" || name === "password") {
            dispatch(valueChange({ name, value }));
        } else if (name === "password_check") {
            dispatch(valueChange({ name, value }));
        }
    };

    const registerChange = () => {
        if (!formChange) {
            setFormChange(true);
        } else if (formChange) {
            setFormChange(false);
        };
    };

    return (
        <AuthContainerBlock>
            <Auth
                username={username}
                password={password}
                password_check={password_check}
                change={change}
                formChange={formChange}
                registerChange={registerChange}/>
        </AuthContainerBlock>
    );
};

export default AuthContainer;