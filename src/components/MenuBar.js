import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

const MenuBarBlock = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: whitesmoke;
    width: 25rem;
    height: 100%;
    border-right: 2px solid rgb(161, 161, 161);

    .logo {
        font-size: 22px;
        cursor: default;
    }
    
    .box {
        width: 100%;
        //margin-bottom: 380px;
    }

    .address {
        text-align: center;
    }
`

const Links = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    text-decoration: none;
    color: black;
    background: #fffeea;
    width: 100%;
    height: 7rem;
    border-top: 1px solid rgb(161, 161, 161);
    & {
        border-bottom: 1px solid rgb(161, 161, 161);
    }
    &:hover {
        background: #fffbb0;
    }
`

const MenuBar = () => {

    return (
        <MenuBarBlock>
            <div className="logo">
                MenuMaker
            </div>
            <div className="box">
                <Links to="/maker">메뉴 만들기</Links>
                <Links to="/setting">설정</Links>
                <Links to="/register">DB 임시 저장</Links>
            </div>
            <div className="address">
                기능 추가, 오류 제보<br />
                <b>rhkrrbaudgg@naver.com</b>
            </div>
        </MenuBarBlock>
    );
};

export default MenuBar;