import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { priceAPICall } from '../../modules/open';

const TestBlock = styled.div`
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

const Test = () => {

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
            console.log(item[0]);
        };
    },[data]);

    return (
        <TestBlock>
            <button onClick={callTest}></button>
            {loading ?
                (<div>{data.response.body.items.item[0].areaNm}
                {data.response.body.items.item[0].todayPric}</div>)
                :
                (null)}
        </TestBlock>
    );
};

export default Test;