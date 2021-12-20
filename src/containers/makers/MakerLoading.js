import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MakerContainer from './MakerContainer';
import { makerRice, makerMain, makerSide, makerSoup, initial, lock } from '../../modules/maker';
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
    text-align: center;
    height: 100vh;
    background: #ececec;
    @media (max-width: 425px) {
        font-size: 15px;
    }
    @media (max-width: 375px) {
        font-size: 12px;
    }

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
    const rices = useSelector(({ maker }) => 
        maker.rices,
    );
    const mains = useSelector(({ maker }) => 
        maker.mains,
    );
    const sides = useSelector(({ maker }) => 
        maker.sides,
    );
    const soups = useSelector(({ maker }) => 
        maker.soups,
    );
    const lockType = useSelector(({ maker }) => 
        maker.lock,
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
        if (lockType === false) {
            dispatch(priceList100(todayResult()));
            dispatch(priceList200(todayResult()));
            dispatch(priceList300(todayResult()));
            dispatch(priceList400(todayResult()));
            dispatch(priceList500(todayResult()));
            dispatch(priceList600(todayResult()));
        }
    },[dispatch])

    const changecheck = (check) => {
        dispatch(lock(false));
        if (check === "refresh") {
            setCheck(false);
            dispatch(initial());
            dispatch(makerRice({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
            dispatch(makerMain({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
            dispatch(makerSide({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
            dispatch(makerSoup({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
        }
    };

    useEffect(() => {
        if (lockType === false) {
            if (data100&&data200&&data300&&data400&&data500&&data600) {
                dispatch(makerRice({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
                dispatch(makerMain({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
                dispatch(makerSide({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
                dispatch(makerSoup({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
            }
        }
    },[number, dispatch, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600, lockType])

    useEffect(() => {
        if (lockType === false) {
            if (rices&&mains&&sides&&soups) {
                setCheck(true);
            };
        } else if (lockType === true) {
            setCheck(true);
        };
    },[rices, mains, sides, soups, lockType])


    return (
        <>
            {check ? (
                <MakerContainer
                    changecheck={changecheck}
                    setCheck={setCheck}>
                </MakerContainer>
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