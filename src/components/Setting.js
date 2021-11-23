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
        .back {
            position: absolute;
            right: 0px;
            font-size: 25px;
            cursor: pointer;
        }
    }
`

const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;

    .final {
        width: 7rem;
        height: 3rem;
        font-size: 15px;
        margin-left: 175px;
        margin-top: 50px;
    }
`

const Inputs = styled.div`
    display: flex;
    margin: 15px 0px;
    font-size: 30px;

    input, select {
        text-align: right;
        font-size: 30px;
        width: 120px;
        margin-left: 150px;
    }

    :nth-child(3){
        margin-left: 8px;
    }

    select {
        width: 128px;
    }
`

const ErrorBox = styled.div`
    color: red;
    text-align: center;
`

const ExSelectBox = styled.div`
    display: flex;
    font-size: 30px;

    .one, .two {
        text-align: center;
        font-size: 15px;
        width: 128px;
        margin-left: 82px;
    }
`

const ExBox = styled.div`
    margin: 15px 0px;
`

const SelectDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid;
    width: 500px;
    height: 500px;
    background: whitesmoke;
`

const TopDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
    width: 500px;
    height: 50px;
    text-align: center;

    .close {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: 1px solid;
        width: 50px;
        height: 100%;
        text-align: right;
        cursor: pointer;
    }
`

const SearchDiv = styled.div`
    border: 1px solid;
    width: 450px;
    height: 430px;

    span {
        font-size: 20px;
        cursor: pointer;
        :hover {
            background: #bbbbbb;
        }
        .mainOut {

        }
    }
`

const Setting = ({ changeNum, SError, able, mainList, outList, buttonChange, mainRemove, 
    numU_1, numU_2, allMainList, allOutList, backButton}) => {

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
                <div className="back" onClick={backButton}>닫기</div>
            </header>
            <InputBlock>
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
                        <span key={list}>{list} </span>
                    ))) : ("없음")}
                </ExBox>
                <ExSelectBox>
                    부 재료 제외 선택
                    <button className="two" onClick={changeDiv}>선택하기</button>
                </ExSelectBox>
                <ExBox>
                    <div style={{color: "red"}}>제외된 재료</div>
                    {allOutList.length !== 0 ? (allOutList.map(list => (
                        <span key={list}>{list} </span>
                    ))) : ("없음")}
                </ExBox>
                {SError ? (<ErrorBox>메뉴 생성 수를 변경하세요!</ErrorBox>) : (null)}
                {buttonChange ?
                (<button name="inSet" onClick={numU_1} disabled={able} className="final">설정 변경</button>)
                :
                (<button name="mainSet" onClick={numU_2} disabled={able} className="final">설정 변경</button>)}

            </InputBlock>
            <div className="address">
                rhkrrbaudgg@naver.com
            </div>
        </SettingBlock>
    );
};

export default Setting;