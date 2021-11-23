import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MakerContainer from './MakerContainer';
import { makerRice, makerMain, makerSide, makerSoup } from '../../modules/maker';
//import setting from '../../modules/setting';

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
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false);

    const number = useSelector(({ setting }) =>
        setting.number,
    );
    const outList = useSelector(({ setting }) => 
        setting.outList,
    );
    const allOutList = useSelector(({ setting }) => 
        setting.allOutList,
    );
    const soups = useSelector(({ maker }) => 
        maker.soups,
    );

    const changecheck = (check) => {
        setCheck(false);
        console.log(check)
        if (check === "refresh") {
            dispatch(makerRice({number, outList, allOutList}))
            dispatch(makerMain({number, outList, allOutList}))
            dispatch(makerSide({number, outList, allOutList}))
            dispatch(makerSoup({number, outList, allOutList}))
        }
    };

    useEffect(() => {
        dispatch(makerRice({number, outList, allOutList}))
        dispatch(makerMain({number, outList, allOutList}))
        dispatch(makerSide({number, outList, allOutList}))
        dispatch(makerSoup({number, outList, allOutList}))
    },[number, dispatch, outList, allOutList])

    useEffect(() => {
        setTimeout(()=>{
            if (soups) {
                setCheck(true);
                console.log("loading 중")
            }
        },500);
    },[soups])

    return (
        <>
            {check ? (
                <MakerContainer changecheck={changecheck}></MakerContainer>
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