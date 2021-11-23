import React from 'react';
import styled from 'styled-components';

const AddressBlock = styled.div`
    text-align: center;
`;

const Address = () => {
    return (
        <AddressBlock>
            기능 추가, 오류 제보<br />
            <b>rhkrrbaudgg@naver.com</b>
        </AddressBlock>
    );
};

export default Address;