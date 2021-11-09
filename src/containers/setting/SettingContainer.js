import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Setting from '../../components/Setting'
import{ repeatSetting } from '../../modules/setting';
import { withRouter } from 'react-router-dom';

const SettingContainerBlock = styled.div``;

const SettingContainer = ({ history }) => {
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        const numberValue = e.target[0].value;
        e.preventDefault();
        dispatch(repeatSetting(numberValue))
        history.push('/');
    } 

    return (
        <SettingContainerBlock>
            <Setting onSubmit={onSubmit} />
        </SettingContainerBlock>
    );
};

export default withRouter(SettingContainer);