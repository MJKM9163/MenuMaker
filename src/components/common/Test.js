import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { openAPICall } from '../../modules/open';

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

    const { data } = useSelector(({ open }) => ({
        data: open.data,
    }));

    const callTest = () => {
        dispatch(openAPICall());
        console.log('클릭')
    }
    // const API_Key = process.env.REACT_APP_API_KEY;

    // const testAPI = async() => 
    //     await axios.get('http://apis.data.go.kr/B552895/LocalGovPriceInfoService', {
    //     params: {
    //         serviceKey: API_Key,
    //         pageNo: 1,
    //         numOfRows: 10,
    //         examin_de: 20201128,
    //         prdlst_nm: "감귤",
    //     },
    // });

    return (
        <TestBlock>
            <button onClick={callTest}></button>
            <div>{data}aa</div>
        </TestBlock>
    );
};

export default Test;