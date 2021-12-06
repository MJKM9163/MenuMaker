import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { priceList } from '../../modules/priceAPI';

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

    const { data } = useSelector(({ priceAPI }) => ({
        data: priceAPI.data
    }));

    const testCall = () => {
        dispatch(priceList());
    }

    useEffect(() => {
        if (data) {
            setLoading(true);
            console.log(data.data.item[0])
        }
    },[data])
    
    return (
        <PriceAPIBlock>
            <button onClick={testCall}></button>
            {loading ?
                (<div>
                    나온다!!!!!!!!!!!!
                    {data.data.item[0].item_name}
                </div>)
                :
                (null)}
        </PriceAPIBlock>
    );
};

export default PriceAPI;