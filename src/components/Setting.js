import React from 'react';
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

    .logo {
        font-size: 25px;
    }
`

const InputBlock = styled.div`
    display: flex;
    flex-direction: column;

    button {
        width: 7rem;
        height: 3rem;
        font-size: 15px;
        margin-left: 145px;
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
        margin-left: 100px;
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
    font-size: 30px;
`

const ExBox = styled.div`
    margin: 15px 0px;
`

const Setting = ({ numberUpdate, changeNum, SError, able }) => {

    const { number } = useSelector(({ setting }) => ({
        number: setting.number,
    }))


    return (
        <SettingBlock>
            <div className="logo">설정 화면</div>
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
                </ExSelectBox>
                <ExBox>
                    제외된 주 재료
                    <div>마늘</div>
                </ExBox>
                <ExSelectBox>
                    재료 제외 선택
                </ExSelectBox>
                <ExBox>
                    제외된 재료
                    <div>닭고기</div>
                </ExBox>
                {SError ? (<ErrorBox>메뉴 생성 수를 변경하세요!</ErrorBox>) : (null)}
                <button onClick={numberUpdate} disabled={able}>설정 변경</button>
            </InputBlock>
            <div className="address">
                rhkrrbaudgg@naver.com
            </div>
        </SettingBlock>
    );
};

export default Setting;