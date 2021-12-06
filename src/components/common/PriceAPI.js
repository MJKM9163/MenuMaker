import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
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
        width: 50px;
        height: 30px;
    }

    div {
        width: 100%;
        height: 100vh;
    }
`;

const PriceAPI = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    // const today = new Date();
    // const year = today.getFullYear();
    // const month = ('0' + (today.getMonth() + 1)).slice(-2);
    // const day = ('0' + (today.getDate() - 1)).slice(-2);
    // const dateString = year + '-' + month  + '-' + day;

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

    const testCall = () => {
        console.log("API 부름!")
        dispatch(priceList100());
        dispatch(priceList200());
        dispatch(priceList300());
        dispatch(priceList400());
        dispatch(priceList500());
        dispatch(priceList600());
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