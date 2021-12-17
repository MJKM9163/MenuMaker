import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MenuListContainer from './MenuListContainer';
import SettingContainer from '../setting/SettingContainer';
import { withRouter } from 'react-router-dom';

const MakerContainerBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;

    .top_text {
        font-size: 23px;
        cursor: default;
    }
`;

const MenuListBlock = styled.div`
    display: flex;
    width: 100%;
    height: 650px;
    justify-content: space-around;
`;

const ButtonsBlock = styled.div`
    display: flex;
    margin-bottom: 4px;

    button {
        width: 70px;
        height: 70px;
        margin: 0px 20px 10px 20px;
        @media (max-width: 1024px) {
            width: 60px;
            height: 60px;
            margin: 0px 15px 5px 15px;
        }
        @media (max-width: 800px) {
            width: 60px;
            height: 60px;
            margin: 0px 15px 5px 15px;
        }
    }
`;

const SlideSetting = styled.div`
    position: fixed;
    width: 650px;
    height: 100%;
    z-index: 2;
`;


const MakerContainer = ({ changecheck, history }) => {

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

    keys.splice(number, 8 - number);

    const [SIn, setSIn] = useState(false);
    const [buttonChange, setButtonChange] = useState(false);

    const settingCtrl = () => {
        setSIn(true);
        setButtonChange(true);
    };

    const backButton = () => {
        history.push('/');
    };

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
                <div className="top_text">
                    메뉴표
                </div>
                <MenuListBlock>
                    {keys.map(dayNumber => (
                        <MenuListContainer
                            key={dayNumber}
                            numberKey={numberKey[dayNumber]}
                            rices={rices.rices[dayNumber]}
                            mains={mains.mains[dayNumber]}
                            sides={sides.sides[dayNumber]}
                            soups={soups.soups[dayNumber]}
                            ricesPrice={rices.price[dayNumber]}
                            mainsPrice={mains.price[dayNumber]}
                            sidesPrice={sides.price[dayNumber]}
                            soupsPrice={soups.price[dayNumber]} />
                    ))}
                </MenuListBlock>
                <ButtonsBlock>
                    <button onClick={settingCtrl}>설정</button>
                    <button onClick={()=>changecheck("refresh")}>재생성</button>
                    <button onClick={backButton}>뒤로</button>
                </ButtonsBlock>
            </MakerContainerBlock>
        </>
    );
};

export default withRouter(MakerContainer);