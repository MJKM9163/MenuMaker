import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Setting from '../../components/Setting'
import{ repeatSetting } from '../../modules/setting';
import { withRouter } from 'react-router-dom';

const SettingContainerBlock = styled.div`
    height: 100vh;
`;

const SettingContainer = ({ history }) => {
    const dispatch = useDispatch()

    const [num, setNum] = useState('1');
    const changeNum = (e) => {
        setNum(e.target.value);
    }

    const numberUpdate = () => {
        dispatch(repeatSetting(num))
        history.push('/');
    } 

    return (
        <SettingContainerBlock>
            <Setting numberUpdate={numberUpdate} changeNum={changeNum}/>
        </SettingContainerBlock>
    );
};

export default withRouter(SettingContainer);