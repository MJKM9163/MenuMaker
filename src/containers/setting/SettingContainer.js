import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Setting from '../../components/Setting'
import { withRouter } from 'react-router-dom';
import { settingListFind, repeatSetting, mainOut, allOut,
    mainKeep, mainKeep2 } from '../../modules/setting';



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
    const list = useSelector(({ setting }) => 
        setting.list,
    );
    const allList = useSelector(({ setting }) => 
        setting.allList,
    );
    const defaultOutList = useSelector(({ setting }) => 
        setting.outList,
    );
    const defaultAllOutList = useSelector(({ setting }) => 
        setting.allOutList,
    );

    const [loading, setLoading] = useState(false);
    const [SError, setSError] = useState(false);
    const [num, setNum] = useState(number);
    const [able, setAble] = useState('disabled');
    const [mainList, setMainList] = useState(list);
    const [outList, setOutList] = useState(defaultOutList);
    const [allMainList, setAllMainList] = useState(allList);
    const [allOutList, setAllOutList] = useState(defaultAllOutList);

    useEffect(() => {
        if (!list) {
            dispatch(settingListFind());
            // console.log("디스패치 실행")
        } else if (list) {
            if (mainList === null) {
                setMainList(list);
                setAllMainList(list);
                // console.log("null이라서 처음 한 번 채워줌");
            }
            setLoading(true);
            console.log(allMainList)
        }
    },[dispatch, list, mainList, allMainList]);
    
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

    const mainRemove = useCallback((itemId, e) => {
        if (e.target.className === "0") {
            setMainList(mainList.filter(list => list._id !== itemId));
            setOutList([...outList, itemId]);
        } else if (e.target.className === "1") {
            setAllMainList(allMainList.filter(list => list._id !== itemId));
            setAllOutList([...allOutList, itemId]);
        }
        
    },[mainList, outList, allMainList, allOutList]);


    const numU_1 = () => {
        changecheck();
        dispatch(repeatSetting(num))
        dispatch(mainOut(outList))
        dispatch(allOut(allOutList))
        dispatch(mainKeep(mainList))
        dispatch(mainKeep2(allMainList))
    }
    const numU_2 = () => {
        dispatch(repeatSetting(num))
        dispatch(mainOut(outList))
        dispatch(allOut(allOutList))
        history.push('/');
    }


    return (
        <SettingContainerBlock>
            {loading ? (<Setting numU_1={numU_1} numU_2={numU_2} changeNum={changeNum} mainRemove={mainRemove}
                        mainList={mainList} allMainList={allMainList} outList={outList} allOutList={allOutList}
                        SError={SError} able={able} settingCtrlClose={settingCtrlClose}
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