import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { makerRice, makerMain, makerSide, makerSoup } from '../../modules/maker';
import {
    priceList100,
    priceList200,
    priceList300,
    priceList400,
    priceList500,
    priceList600 } from '../../modules/priceAPI';

const PriceAPIBlock = styled.div`
    width: 100%;
    height: 100vh;

    button {
        width: 100px;
        height: 50px;
    }

    div {
        width: 100%;
        height: 100vh;
    }
`;

const PriceAPI = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

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

    const number = useSelector(({ setting }) =>
        setting.number,
    );
    const outList = useSelector(({ setting }) => 
        setting.outList,
    );
    const allOutList = useSelector(({ setting }) => 
        setting.allOutList,
    );
    const percentObject = useSelector(({ setting }) => 
        setting.percentObject
    );

    const { rices, mains, sides, soups } = useSelector(({ maker }) => ({
        rices: maker.rices,
        mains: maker.mains,
        sides: maker.sides,
        soups: maker.soups,
    }));

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

    console.log(todayResult())

    const testCall = () => {
        console.log("API 부름!")
        dispatch(priceList100(todayResult()));
        dispatch(priceList200(todayResult()));
        dispatch(priceList300(todayResult()));
        dispatch(priceList400(todayResult()));
        dispatch(priceList500(todayResult()));
        dispatch(priceList600(todayResult()));
    };

    

    const testtt = () => {
        dispatch(makerMain({number, outList, allOutList, percentObject, data100, data200, data300, data400, data500, data600}))
    }

    const consoletest = () => {
        console.log(mains)
        console.log(mains.mains)
        console.log(mains.mains[0])
        console.log(mains.price)
    }

    useEffect(() => {
        console.log("effect 들어옴")
        if (data100&&data200&&data300&&data400&&data500&&data600) {
            setLoading(true);
            console.log("로딩 끝!")
        }
    },[data100, data200, data300, data400, data500, data600])

    return (
        <PriceAPIBlock>
            <button onClick={testCall}></button>
            <button onClick={testtt}>필터 체크</button>
            <button onClick={consoletest}>콘솔 체크</button>
            {loading ?
                (<div>
                    나온다!!!!!!!!!!!!
                    {data600.data.item[0].item_name}
                </div>)
                :
                (null)}
        </PriceAPIBlock>
    );
};

export default PriceAPI;