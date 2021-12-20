import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const SettingBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: #fbffd4;

    header {
        display: flex;

        .logo {
            font-size: 25px;
        }
    }
`;

const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;

    @media (max-width: 1280px) {
        width: 450px;
    }
    @media (max-width: 1024px) {
        width: 400px;
    }
    @media (max-width: 800px) {
        width: 300px;
    }
`;

const CostBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0px;
    font-size: 30px;
    
    @media (max-width: 1280px) {
        font-size: 27px;
    }
    @media (max-width: 1024px) {
        font-size: 25px;
    }
    @media (max-width: 800px) {
        font-size: 20px;
    }

    .costTextBox {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        :hover {
            background: #ebebeb;
        }

        .costText {
            width: 150px;
            font-size: 20px;
            @media (max-width: 1024px) {
                font-size: 18px;
            }
            @media (max-width: 800px) {
                font-size: 15px;
            }
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }


    .costSelect {
        display: flex;
        justify-content: space-between;
        :hover {
            background: #ebebeb;
        }

        select {
            width: 120px;
            font-size: 20px;
            @media (max-width: 1024px) {
                font-size: 18px;
            }
            @media (max-width: 800px) {
                font-size: 18px;
            }
        }
    }

    .menuCost {
        display: flex;
        justify-content: space-between;
        :hover {
            background: #ebebeb;
        }

        .costPercent {
            display: flex;
            justify-content: space-between;
            width: 220px;
        }
    }
`;

const Inputs = styled.div`
    display: flex;
    margin: 15px 0px;
    font-size: 30px;
    justify-content: space-between;

    @media (max-width: 1280px) {
        font-size: 27px;
    }
    @media (max-width: 1024px) {
        font-size: 25px;
    }
    @media (max-width: 800px) {
        font-size: 20px;
    }
    
    :hover {
        background: #ebebeb;
    }

    input, select {
        text-align: right;
        font-size: 30px;
        width: 120px;
        @media (max-width: 1280px) {
            font-size: 24px;
        }
        @media (max-width: 1024px) {
            font-size: 18px;
        }
        @media (max-width: 800px) {
            font-size: 18px;
        }
    }

    :nth-child(3){
        margin-left: 8px;
    }

    select {
        width: 128px;
    }
`;

const ErrorBox = styled.div`
    color: red;
    text-align: center;
`;

const ExSelectBox = styled.div`
    display: flex;
    font-size: 30px;
    justify-content: space-between;

    @media (max-width: 1280px) {
        font-size: 27px;
    }
    @media (max-width: 1024px) {
        font-size: 25px;
    }
    @media (max-width: 800px) {
        font-size: 18px;
    }
    :hover {
        background: #ebebeb;
    }

    .one, .two {
        text-align: center;
        font-size: 15px;
        width: 128px;
    }
`;

const ExBox = styled.div`
    margin: 15px 0px;
    :hover {
        background: #ebebeb;
    }

    span {
        cursor: pointer;
        :hover {
            background: #ff7a7a;
        }
    }
`;

const SelectDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #555555;
    width: 500px;
    height: 500px;
    background: whitesmoke;

    @media (max-width: 1024px) {
        height: 450px;
    }
    @media (max-width: 800px) {
        width: 400px;
        height: 400px;
    }
    @media (max-width: 425px) {
        width: 300px;
        height: 400px;
    }
`;

const TopDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #555555;
    width: 500px;
    height: 50px;
    text-align: center;

    @media (max-width: 800px) {
        width: 400px;
    }
    @media (max-width: 425px) {
        width: 300px;
    }

    .close {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-left: 1px solid #555555;
        width: 50px;
        height: 100%;
        text-align: right;
        cursor: pointer;
        background-color: #ff7979;
        :hover {
            background-color: #ffa8a8;
        }
    }
`;

const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-Y: auto;
    width: 100%;
    height: 100%;

    span {
        width: 100%;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
        @media (max-width: 1280px) {
            font-size: 18px;
        }
        @media (max-width: 800px) {
            font-size: 16px;
        }
        @media (max-width: 800px) {
            font-size: 22px;
            margin-bottom: 7px;
        }
        :hover {
            background: #bbbbbb;
        }
        .mainOut {

        }
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .final {//button
        width: 150px;
        height: 70px;
        font-size: 15px;
        margin-top: 30px;

        @media (max-width: 1024px) {
            width: 120px;
            height: 50px;
            margin-top: 0px;
        }
        @media (max-width: 800px) {
            width: 100px;
            height: 40px;
            margin-top: 0px;
        }
    }
    .back {
        width: 150px;
        height: 70px;
        font-size: 15px;
        margin-top: 30px;

        @media (max-width: 1024px) {
            width: 120px;
            height: 50px;
            margin-top: 0px;
        }
        @media (max-width: 800px) {
            width: 100px;
            height: 40px;
            margin-top: 0px;
        }
    }
`;

const Setting = ({ changeNum, SError, able, mainList, outList, buttonChange, mainRemove, 
    numU_1, numU_2, allMainList, allOutList, backButton, outRemove,
    costSelection, costRatio, costValueChange, percent }) => {

    const topDivName = ["주 재료에서 제외할 재료를 선택하세요", "제외할 재료를 선택하세요"]

    const [on, setOn] = useState(false)
    const [nameCheck, setNameCheck] = useState(null);

    const changeDiv = (e) => {
        setOn(true);
        if (e.target.className === "one") {
            setNameCheck(0);
        } else if (e.target.className === "two") {
            setNameCheck(1);
        }
    };

    const closeDiv = () => {
        setOn(false);
        setNameCheck(null);
    };


    const { number } = useSelector(({ setting }) => ({
        number: setting.number,
    }));
    const { cost } = useSelector(({ setting }) => ({
        cost: setting.cost,
    }));

    return (
        <SettingBlock>
            {on ? (
                <SelectDiv>
                    <TopDiv><div></div>{topDivName[nameCheck]}
                    <div className="close" onClick={closeDiv}>
                        닫기
                    </div>
                    </TopDiv>
                    <SearchDiv>
                        {nameCheck === 0 ? (mainList.map(item => (
                            <span key={item._id} className={nameCheck} onClick={(e)=>mainRemove(item._id,e)}>{item._id} </span>
                        )))
                        :
                        (allMainList.map(item => (
                            <span key={item._id} className={nameCheck} onClick={(e)=>mainRemove(item._id,e)}>{item._id} </span>
                        )))}
                    </SearchDiv>
                </SelectDiv>) : (null)}
            <header>
                <div className="logo">설정 화면</div>
            </header>
            <InputBlock>
                <CostBox>
                    <div className="costTextBox">
                        가격 입력
                        <input
                            type="number"
                            className="costText"
                            placeholder="가격 입력"
                            onChange={costValueChange}
                            value={cost}
                            maxLength={6}>
                        </input>
                    </div>
                    <div className="costSelect">가격 비율 조정
                        <select onChange={costSelection} defaultValue="메인">
                            <option>밥</option>
                            <option>메인</option>
                            <option>반찬</option>
                            <option>국</option>
                        </select>
                    </div>
                    <div className="menuCost">밥
                        <div className="costPercent">{costRatio.rice * 100}%
                            <span>{percent.rice.toFixed(1)}원</span>
                        </div>
                    </div>
                    <div className="menuCost">메인
                        <div className="costPercent">{costRatio.main * 100}%
                            <span>{percent.main.toFixed(1)}원</span>
                        </div>
                    </div>
                    <div className="menuCost">반찬
                        <div className="costPercent">{costRatio.submain * 100}%
                            <span>{percent.submain.toFixed(1)}원</span>
                        </div>
                    </div>
                    <div className="menuCost">국
                        <div className="costPercent">{costRatio.soup * 100}%
                            <span>{percent.soup.toFixed(1)}원</span>
                        </div>
                    </div>
                </CostBox>
                <Inputs>메뉴 생성 수
                    <select onChange={changeNum} defaultValue={number}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </Inputs>
                <ExSelectBox>
                    주 재료 제외 선택
                    <button className="one" onClick={changeDiv}>선택하기</button>
                </ExSelectBox>
                <ExBox>
                    <div style={{color: "red"}}>제외된 주 재료</div>
                    {outList.length !== 0 ? (outList.map(list => (
                        <span key={list} className="out" onClick={(e)=>outRemove(list, e)}>{list} </span>
                    ))) : ("없음")}
                </ExBox>
                <ExSelectBox>
                    부 재료 제외 선택
                    <button className="two" onClick={changeDiv}>선택하기</button>
                </ExSelectBox>
                <ExBox>
                    <div style={{color: "red"}}>제외된 재료</div>
                    {allOutList.length !== 0 ? (allOutList.map(list => (
                        <span key={list} className="subOut" onClick={(e)=>outRemove(list, e)}>{list} </span>
                    ))) : ("없음")}
                </ExBox>
                {SError ? (<ErrorBox>메뉴 생성 수를 변경하세요!</ErrorBox>) : (null)}
                <Buttons>
                {buttonChange ?
                (<button name="inSet" onClick={numU_1} disabled={able} className="final">설정 변경</button>)
                :
                (<button name="mainSet" onClick={numU_2} disabled={able} className="final">설정 변경</button>)}
                <button className="back" onClick={backButton}>닫기</button>
                </Buttons>
            </InputBlock>
            <div className="address">
                rhkrrbaudgg@naver.com
            </div>
        </SettingBlock>
    );
};

export default Setting;