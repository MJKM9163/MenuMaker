import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Setting from '../../components/Setting'
import{ repeatSetting } from '../../modules/setting';
import { withRouter } from 'react-router-dom';
import { settingListFind } from '../../modules/setting';



const SettingContainerBlock = styled.div`
    height: 100vh;
`;

const MakerWait = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    background: #ececec;

    div {
        width: 80px;
        height: 80px;
        border: 10px solid white;
        border-top: 10px solid #ff7a0c;
        border-radius:50em;
        animation-name: spinCircle;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        @keyframes spinCircle {
            from {
                transform: rotate(0);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
`;

const SettingContainer = ({ history, changecheck, settingCtrlClose, buttonChange }) => {
    const dispatch = useDispatch()

    const { number } = useSelector(({ setting }) => ({
        number: setting.number,
    }));

    const [loading, setLoading] = useState(false)
    const [SError, setSError] = useState(false);
    const [num, setNum] = useState(number);
    const [able, setAble] = useState('disabled');

    const changeNum = (e) => {
        if (number !== e.target.value) {
            setNum(e.target.value);
            setSError(false);
            setAble('');
        } else if (number === e.target.value) {
            setSError(true);
            setAble('disabled');
        }
        console.log(e.target.value)
    }

    useEffect(() => {
        dispatch(settingListFind());
    },[dispatch]);

    const list = useSelector(({ setting }) => 
        setting.list,
    );

    useEffect(() => {
        if (list) {
            setLoading(true);
        }
    },[list])

    const numU_1 = () => {
        changecheck();
        dispatch(repeatSetting(num))

    }
    const numU_2 = () => {
        dispatch(repeatSetting(num))
        history.push('/');
    }


    return (
        <SettingContainerBlock>
            {loading ? (<Setting numU_1={numU_1} numU_2={numU_2} changeNum={changeNum}
                        list={list} SError={SError} able={able} settingCtrlClose={settingCtrlClose}
                        buttonChange={buttonChange}/>)
            :
            (<MakerWait>
                <h1>설정 화면을 가져오고 있습니다!</h1>
                <div></div>
            </MakerWait>) }
        </SettingContainerBlock>
    );
};

export default withRouter(SettingContainer);