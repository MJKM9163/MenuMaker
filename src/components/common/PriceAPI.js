import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { priceAPICall } from '../../modules/open';

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

    const { data } = useSelector(({ open }) => ({
        data: open.data,
    }));
    const { error } = useSelector(({ open }) => ({
        error: open.error,
    }));

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + (today.getDate() - 1)).slice(-2);
    const dateString = year + '-' + month  + '-' + day;

    const callTest = () => {
        dispatch(priceAPICall(dateString));
        console.log('클릭')
    };

    useEffect(() => {
        console.log(data);
        if (data) {
            console.log(data);
            setLoading(true);
        };
    },[data, error]);
    
    return (
        <PriceAPIBlock>
            <button onClick={callTest}></button>
            {loading ?
                (<div>
                    나온다!!!!!!!!!!!!
                </div>)
                :
                (null)}
        </PriceAPIBlock>
    );
};

export default PriceAPI;

// for (let n = 1; n < 2; n++) {
//     client.get(`/api/openAPIs/priceAPI/${data}/${n.toString()}00`);
// }