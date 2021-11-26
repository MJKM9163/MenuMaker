import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { register, login, valueChange } from '../../modules/auth';
import Auth from '../../components/auths/Auth';

const AuthContainerBlock = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: #ffffff;
`;

const AuthContainer = ({ history }) => {
    const dispatch = useDispatch();

    const loginID = useSelector(({ auth }) => 
        auth.loginID,
    );

    const { setUser } = useSelector(({ auth }) => ({
        setUser: auth.setUser
    }));

    useEffect(() => { //로그인 상태에서 진입 방지
        if (setUser) {
            history.push('/');
        };
    },[history, setUser]);

    useEffect(() => { //로그인 할 떄 딱 한번 실행 
        if (loginID) { // 실행 후 loginID 값 잃어버림
            try {
                localStorage.setItem('user', JSON.stringify(loginID));
                window.location.replace('/')
            } catch (e) {
                console.log("로컬 저장소에 저장되지 않음")
            };
        };
    },[dispatch, loginID, history]);

    const [formChange, setFormChange] = useState(false);
    const [error, setError] = useState(null);

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
            setError(null);
        } else if (name === "password_check") {
            dispatch(valueChange({ name, value }));
            setError(null);
        }
    };

    const registerChange = () => {
        if (!formChange) {
            setFormChange(true);
            setError(null);
        } else if (formChange) {
            setFormChange(false);
            setError(null);
        };
    };

    const submitClick = (e) => {
        if (e.target.className === "register") {
            if (password === password_check) {
                dispatch(register({ username, password, password_check }));
                setFormChange(false);
            } else if (password !== password_check) {
                setError(1);
            };
        } else if (e.target.className ==="login") {
            dispatch(login({ username, password }));
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
                error={error}
                registerChange={registerChange}
                submitClick={submitClick}/>
        </AuthContainerBlock>
    );
};

export default withRouter(AuthContainer);