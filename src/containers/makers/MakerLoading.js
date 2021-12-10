import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MakerContainer from './MakerContainer';
import { makerRice, makerMain, makerSide, makerSoup } from '../../modules/maker';
import {
    priceList100,
    priceList200,
    priceList300,
    priceList400,
    priceList500,
    priceList600 } from '../../modules/priceAPI';

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
    const percentObject = useSelector(({ setting }) => 
        setting.percentObject
    );
    const data100 = useSelector(({ priceAPI }) => 
        priceAPI.data100
    );
    const data200 = useSelector(({ priceAPI }) => 
        priceAPI.data200
    );
    const data300 = useSelector(({ priceAPI }) => 
        priceAPI.data300
    );
    const data400 = useSelector(({ priceAPI }) => 
        priceAPI.data400
    );
    const data500 = useSelector(({ priceAPI }) => 
        priceAPI.data500
    );
    const data600 = useSelector(({ priceAPI }) => 
        priceAPI.data600
    );
    
    const todayResult = () => {
        const today = new Date();
        const dayOut = today.getDay();
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);

        if (dayOut === 0) {
            const day = ('0' + (today.getDate() - 2)).slice(-2);
            return year + '-' + month  + '-' + day;
        } else if (dayOut === 1) {
            const day = ('0' + (today.getDate() - 3)).slice(-2);
            return year + '-' + month  + '-' + day;
        } else if (dayOut === 2||3||4||5||6) {
            const day = ('0' + (today.getDate() - 1)).slice(-2);
            return year + '-' + month  + '-' + day;
        }
    }

    useEffect(() => {
        console.log("API 부름!")
        dispatch(priceList100(todayResult()));
        dispatch(priceList200(todayResult()));
        dispatch(priceList300(todayResult()));
        dispatch(priceList400(todayResult()));
        dispatch(priceList500(todayResult()));
        dispatch(priceList600(todayResult()));
    },[])

    const changecheck = (check) => {
        setCheck(false);
        console.log(check)
        if (check === "refresh") {
            dispatch(makerRice({number, outList, allOutList, percentObject}))
            dispatch(makerMain({number, outList, allOutList, percentObject}))
            dispatch(makerSide({number, outList, allOutList, percentObject}))
            dispatch(makerSoup({number, outList, allOutList, percentObject}))
        }
    };

    useEffect(() => {
        if (data100&&data200&&data300&&data400&&data500&&data600) {
            console.log("리스트 로딩 끝!");
            console.log("메뉴 생성 시작");
            dispatch(makerRice({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
            dispatch(makerMain({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
            dispatch(makerSide({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
            dispatch(makerSoup({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
            setTimeout(()=>{
                setCheck(true);
                console.log("로딩 끝!")
            },4000);
        }
    },[number, dispatch, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600])

    // useEffect(() => {
    //     setTimeout(()=>{
    //         setCheck(true);
    //         console.log("로딩 끝!")
    //     },2500);
    // },[])

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