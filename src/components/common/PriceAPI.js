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

    const callTest = () => {
        dispatch(priceAPICall());
        console.log('클릭')
    };

    useEffect(() => {
        if (data) {
            const { item } = data.response.body.items;
            setLoading(true);
            console.log(data);
            console.log(item);
            console.log(item.examinPrdlstNm);
            console.log(item.areaNm);
            console.log(item.examinMrktNm);
            console.log(item.stdSpciesNm);
        };
    },[data]);

    return (
        <PriceAPIBlock>
            <button onClick={callTest}></button>
            {loading ?
                (<div>
                </div>)
                :
                (null)}
        </PriceAPIBlock>
    );
};

export default PriceAPI;