import React from 'react';
import styled from 'styled-components'


const SettingBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background: #fbffd4;

    .logo {
        font-size: 25px;
    }
`

const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    form Button {
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

const Setting = ({ onSubmit }) => {

    return (
        <SettingBlock>
            <div className="logo">설정 화면</div>
            <InputBlock>
                <form onSubmit={onSubmit}>
                    <Inputs>메뉴 생성 수
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </Inputs>
                    <Inputs>총 식사 인원<input /></Inputs>
                    <Inputs>조리원 인원<input /></Inputs>
                    <button>설정 확인</button>
                </form>
            </InputBlock>
            <div className="address">
                rhkrrbaudgg@naver.com
            </div>
        </SettingBlock>
    );
};

export default Setting;