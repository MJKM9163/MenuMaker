import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Address from './common/Address';

const BackDiv = styled.div`
    width: 100%;
    height: 100vh;
    background: #E5B299;
`

const MenuBarBlock = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #D4E2D4;
    width: 25rem;
    height: 100%;
    border-right: 2px solid rgb(0, 0, 0);

    .logo {
        font-size: 22px;
        cursor: default;
    }

    .auth {
        width: 100%;
        transform: translateY(20%);
    }
    
    .box {
        width: 100%;
    }
`

const Links = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    text-decoration: none;
    color: black;
    background: #FCF8E8;
    width: 100%;
    height: 7rem;
    border-top: 1px solid rgb(0, 0, 0);
    & {
        border-bottom: 1px solid rgb(0, 0, 0);
    }
    &:hover {
        background: #fffbb0;
    }
`

const MenuBar = () => {

    return (
        <BackDiv>
            <MenuBarBlock>
                <div className="logo">
                    MenuMaker
                </div>
                <div className="auth">
                    <Links to="/login">로그인</Links>
                </div>
                <div className="box">
                    <Links to="/maker">메뉴 만들기</Links>
                    <Links to="/setting">설정</Links>
                    <Links to="/coment">글 남기기</Links>
                    <Links to="/register">메뉴 DB 저장</Links>
                </div>
                <Address />
            </MenuBarBlock>
        </BackDiv>
    );
};

export default MenuBar;