import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import MenuListContainer from './MenuListContainer';
import{ repeatSetting } from '../../modules/setting';
import Setting from '../../components/Setting';

const MakerContainerBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    .logo {
        font-size: 22px;
        cursor: default;
    }
`;

const MenuListBlock = styled.div`
    display: flex;
    width: 100%;
    height: 650px;
    outline: 1px solid black;
    justify-content: space-around;
    align-items: center;

    :hover {
        outline: 1px solid rgb(23, 170, 255);
    }
`

const ButtonsBlock = styled.div`
    display: flex;
    margin-bottom: 4px;

    button {
        width: 70px;
        height: 70px;
        margin: 0px 20px 10px 20px;
    }
`

const SlideSetting = styled.div`
    position: fixed;
    width: 650px;
    height: 100%;
`


const MakerContainer = ({ changecheck }) => {
    const dispatch = useDispatch()

    const { rices, mains, sides, soups } = useSelector(({ maker }) => ({
        rices: maker.rices,
        mains: maker.mains,
        sides: maker.sides,
        soups: maker.soups,
    }));
    const { number } = useSelector(({ setting }) => ({
        number: setting.number,
    }));
    const keys = [0, 1, 2, 3, 4, 5, 6, 7];
    const numberKey = [0, 1, 2, 3, 4, 5, 6];

    keys.splice(number, 8 - number)

    const [SIn, setSIn] = useState(false);
    const [SError, setSError] = useState(false);
    const [able, setAble] = useState('disabled');
    const [num, setNum] = useState(number);

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

    const settingCtrl = () => {
        setSIn(true);
    }

    const numberUpdate = () => {
        changecheck();
        dispatch(repeatSetting(num))
        setSIn(false);
    }

    return (
        <>
            {SIn ? (
                <SlideSetting>
                    <Setting numberUpdate={numberUpdate} changeNum={changeNum} SError={SError} able={able}/>
                </SlideSetting>
            ):(
                null
            )}
            <MakerContainerBlock>
                <div className="logo">
                    만들기 컨테이너 컴포넌트입니다.
                </div>
                <MenuListBlock>
                    {keys.map(key => (
                        <MenuListContainer
                            key={key}
                            numberKey={numberKey[key]}
                            rices={rices[key]}
                            mains={mains[key]}
                            sides={sides[key]}
                            soups={soups[key]} />
                    ))}
                </MenuListBlock>
                <ButtonsBlock>
                    <button onClick={settingCtrl}>설정</button>
                    <button>재생성</button>
                    <button>프린트</button>
                </ButtonsBlock>
            </MakerContainerBlock>
        </>
    );
};

export default MakerContainer;