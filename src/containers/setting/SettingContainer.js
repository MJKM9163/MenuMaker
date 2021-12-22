import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Setting from '../../components/Setting'
import { withRouter } from 'react-router-dom';
import { settingListFind, repeatSetting, mainOut, allOut,
    mainKeep, mainKeep2, percentObjectSave, costSave } from '../../modules/setting';
import { initial } from '../../modules/maker';

const SettingContainerBlock = styled.div`
    width: 100vw;
    height: 100vh;
`;

const MakerWait = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #ececec;
    @media (max-width: 425px) {
        font-size: 12px;
    }
    @media (max-width: 375px) {
        font-size: 10px;
    }

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

const SettingContainer = ({ history, settingCtrlClose, buttonChange, setCheck,
        setButtonChange, setSIn }) => {
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
    const [costRatio, setCostRatio] = useState({
        rice: 0.15,
        main: 0.5,
        submain: 0.25,
        soup: 0.1,
    })
    const [percent, setPercent] = useState({
        rice: 0,
        main: 0,
        submain: 0,
        soup: 0,
    })
    const [costValue, setCostValue] = useState('');

    useEffect(() => {
        if (!list) {
            dispatch(settingListFind());
        } else if (list) {
            if (mainList === null) {
                setMainList(list);
                setAllMainList(list);
                // console.log("null이라서 처음 한 번 채워줌");
            }
            setLoading(true);
        }
    },[dispatch, list, mainList, allMainList]);
    
    const changeNum = (e) => {
        if (number !== e.target.value) {
            setNum(e.target.value);
            setSError(false);
        } else if (number === e.target.value) {
            setNum(e.target.value);
            setSError(true);
            setAble('disabled');
        }
    }

    const mainRemove = useCallback((itemId, e) => {
        if (e.target.className === "0") {
            setMainList(mainList.filter(list => list._id !== itemId));
            setOutList([...outList, itemId]);
            setAble('');
        } else if (e.target.className === "1") {
            setAllMainList(allMainList.filter(list => list._id !== itemId));
            setAllOutList([...allOutList, itemId]);
            setAble('');
        };
    },[mainList, outList, allMainList, allOutList]);

    const outRemove = (selectItam, e) => {
        if (e.target.className === "out") {
            setOutList(outList.filter(item => item !== selectItam));
            setMainList([...mainList, { _id: selectItam}]);
            setAble('');
        } else if (e.target.className === "subOut") {
            setAllOutList(allOutList.filter(item => item !== selectItam));
            setAllMainList([...allMainList, { _id: selectItam}]);
            setAble('');
        };
    };

    const costSelection = (e) => {
        if (e.target.value === "밥") {
            setCostRatio({
                rice: 0.3,
                main: 0.35,
                submain: 0.25,
                soup: 0.1,
            })
        };
        if (e.target.value === "메인") {
            setCostRatio({
                rice: 0.15,
                main: 0.5,
                submain: 0.25,
                soup: 0.1,
            })
        };
        if (e.target.value === "반찬") {
            setCostRatio({
                rice: 0.15,
                main: 0.3,
                submain: 0.45,
                soup: 0.1,
            })
        };
        if (e.target.value === "국") {
            setCostRatio({
                rice: 0.1,
                main: 0.35,
                submain: 0.25,
                soup: 0.3,
            })
        };
        setAble('');
    };

    useEffect(() => {
        setPercent({
            rice: costValue * costRatio.rice,
            main: costValue * costRatio.main,
            submain: costValue * costRatio.submain,
            soup: costValue * costRatio.soup,
            });
    },[costValue, costRatio])

    useEffect(() => {
        if (costValue.length <= 3) {
            setAble('disabled');
        } else if (costValue.length > 3) {
            setSError(false);
            setAble('');
        }
    },[costValue, num])

    const costValueChange = (e) => {
        if (e.target.value.length < e.target.maxLength) {
            setCostValue(e.target.value);
            dispatch(costSave(e.target.value))
            if (e.target.value.length > 3) {
                setAble('');
            }
        }
    };

    const backButton = () => {
        if (buttonChange) {
            setSIn(false);
        } else if (!buttonChange) {
            history.push('/');
        };
    };

    const numU_1 = () => {
        setButtonChange(false);
        setSIn(false);
        dispatch(initial());
        dispatch(repeatSetting(num));
        dispatch(mainOut(outList));
        dispatch(allOut(allOutList));
        dispatch(mainKeep(mainList));
        dispatch(mainKeep2(allMainList));
        dispatch(percentObjectSave(percent))
        setCheck(false);
    };
    const numU_2 = () => {
        dispatch(initial())
        dispatch(repeatSetting(num));
        dispatch(mainOut(outList));
        dispatch(allOut(allOutList));
        dispatch(mainKeep(mainList));
        dispatch(mainKeep2(allMainList));
        dispatch(percentObjectSave(percent))
        history.push('/');
    };

    return (
        <SettingContainerBlock>
            {loading ? (<Setting numU_1={numU_1} numU_2={numU_2} changeNum={changeNum} mainRemove={mainRemove}
                        mainList={mainList} allMainList={allMainList} outList={outList} allOutList={allOutList}
                        SError={SError} able={able} settingCtrlClose={settingCtrlClose}
                        buttonChange={buttonChange} backButton={backButton} outRemove={outRemove}
                        costSelection={costSelection} costRatio={costRatio} costValue={costValue}
                        costValueChange={costValueChange} percent={percent}/>)
            :
            (<MakerWait>
                <h1>설정 화면을 가져오고 있습니다!</h1>
                <div></div>
            </MakerWait>) }
        </SettingContainerBlock>
    );
};

export default withRouter(SettingContainer);