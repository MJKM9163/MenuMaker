import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Address from './common/Address';
import { logout } from '../modules/auth';
import PatchNote from './common/PatchNote';

const BackDiv = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: #F9F3DF;
`;

const MenuBarBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #F9E4C8;
    width: 400px;
    height: 100%;
    border-right: 1px solid #aaaa;
    transition: 200ms;

    @media (max-width: 1280px) {
        width: 350px;
    }
    @media (max-width: 1024px) {
        width: 320px;
    }
    @media (max-width: 800px) {
        width: 300px;
    }
    @media (max-width: 425px) {
        width: 100vh;
    }

    .logo {
        font-size: 22px;
        cursor: default;
    };

    .auth {
        width: 100%;
        transform: translateY(20%);
        button {
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 35px;
            outline: 1px solid #2e2e2eaa;
            border: 0;
            @media (max-width: 1280px) {
                height: 80px;
                font-size: 30px;
            }
            @media (max-width: 1024px) {
                height: 70px;
                font-size: 30px;
            }
            @media (max-width: 800px) {
                height: 90px;
                font-size: 24px;
            }
            @media (max-width: 425px) {
                height: 90px;
                font-size: 24px;
            }
        }
    };
    
    .LinkBox {
        width: 100%;
    };

    .coment, .db {
        background: #ff5e5e;
        :hover {
            background: #ff9393;
            cursor: not-allowed;
            color: white;
        }
    }
`;

const Links = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 35px;
    text-decoration: none;
    color: black;
    background: #F9CF93;
    width: 100%;
    height: 110px;
    outline: 1px solid #2e2e2eaa;
    margin-bottom: 1px;
    transition: 200ms;

    @media (max-width: 1280px) {
        font-size: 32px;
        height: 97px;
    }
    @media (max-width: 1024px) {
        font-size: 30px;
        height: 95px;
    }
    @media (max-width: 800px) {
        font-size: 28px;
        height: 90px;
    }
    @media (max-width: 425px) {
        font-size: 25px;
    }

    :hover {
        background: #fffbb0;
    };
`;

const MenuBar = () => {
    const dispatch = useDispatch();

    const [info, setInfo] = useState(false);
    const [db, setDb] = useState(false);

    const { setUser } = useSelector(({ auth }) => ({
        setUser: auth.setUser,
    }));

    const percentObject = useSelector(({ setting }) => 
        setting.percentObject
    );

    const logoutButton = () => {
        dispatch(logout());
    };

    const infoUp = () => {
        setInfo(true);
    };

    const infoOut = () => {
        setInfo(false);
    };

    const dbUp = () => {
        setDb(true);
    };

    const dbOut = () => {
        setDb(false);
    };

    const alertBox = () => {
        alert('가격을 설정하지 않았습니다. 가격을 먼저 설정하세요.')
    }

    return (
        <BackDiv>
            <MenuBarBlock>
                <div className="logo">
                    MenuMaker
                </div>
                <div className="auth">
                    {setUser ?
                        (<button onClick={logoutButton}>로그아웃</button>)
                        :
                        (<Links to="/login">로그인</Links>)}
                </div>
                <div className="LinkBox">
                    {percentObject ?
                        (<Links to="/maker">메뉴 만들기</Links>)
                        :
                        (<Links to="/" onClick={alertBox}>메뉴 만들기</Links>)}
                    <Links to="/setting">설정</Links>
                    {setUser ?
                        (<Links to="/coment">글 남기기</Links>)
                        :
                        (<Links to="/" className="coment" onMouseEnter={infoUp} onMouseLeave={infoOut}>
                            {info ? ("로그인 후 사용가능") : ("글 남기기")}
                        </Links>)}
                    {setUser === "rhkrrbaudgg" ?
                        (<Links to="/registerOnlylkjdrfs">메뉴 DB 저장</Links>)
                        :
                        (<Links to="/" className="db" onMouseEnter={dbUp} onMouseLeave={dbOut}>
                            {db ? ("개발자 전용") : ("메뉴 DB 저장")}
                        </Links>)}
                </div>
                <Address />
            </MenuBarBlock>
            {/* <PatchNote /> */}
        </BackDiv>
    );
};

export default MenuBar;