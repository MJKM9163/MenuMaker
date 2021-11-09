import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MakerContainer from './MakerContainer';
import { makerRice, makerMain, makerSide } from '../../modules/maker';
import setting from '../../modules/setting';

const MakerWait = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    background: #ececec;

    div {
        width: 80px;
        height: 80px;
        border: 10px solid white;
        border-top: 10px solid #ff7a0c;
        border-radius:50em;
        animation-name: spinCircle;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        @keyframes spinCircle {
            from {
                transform: rotate(0);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
`;

const MakerLoading = () => {
    const [check, setCheck] = useState(false);

    const number = useSelector(({setting}) => 
        setting.number,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(makerRice({number}))
        dispatch(makerMain({number}))
        dispatch(makerSide({number}))
        setTimeout(() => {
            setCheck(true); 
        }, 1000);
    },[])

    console.log('loading 랜더링 확인')

    return (
        <>
            {check ? (
                <MakerContainer></MakerContainer>
            ) : (
                <MakerWait>
                    <h1>메뉴를 만들고 있습니다!</h1>
                    <div></div>
                </MakerWait>
            )}
        </>
    );
};

export default MakerLoading;