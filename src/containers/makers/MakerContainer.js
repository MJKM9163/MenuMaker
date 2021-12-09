import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MenuListContainer from './MenuListContainer';
import SettingContainer from '../setting/SettingContainer';

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
    //const dispatch = useDispatch()

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
    const [buttonChange, setButtonChange] = useState(false);

    const settingCtrl = () => {
        setSIn(true);
        setButtonChange(true);
    }
console.log(mains.price)
    return (
        <>
            {SIn ? (
                <SlideSetting>
                    <SettingContainer changecheck={changecheck} buttonChange={buttonChange}
                        setButtonChange={setButtonChange} setSIn={setSIn}/>
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
                            rices={rices.rices[key]}
                            mains={mains.mains[key]}
                            sides={sides[key]}
                            soups={soups[key]} />
                    ))}
                </MenuListBlock>
                <ButtonsBlock>
                    <button onClick={settingCtrl}>설정</button>
                    <button onClick={()=>changecheck("refresh")}>재생성</button>
                    <button>프린트<br />(미구현)</button>
                </ButtonsBlock>
            </MakerContainerBlock>
        </>
    );
};

export default MakerContainer;