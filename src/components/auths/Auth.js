import React from 'react';
import styled from 'styled-components';

const AuthBlock = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    background: #dfdfdf;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    outline: 1px solid black;
    text-align: center;
    font-size: 30px;
`;

const CheckBox = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;

    input {
        height: 30px;
    }
`;

const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 100px;
        height: 50px;
    }
`;

const AddRegister = styled.div`
    cursor: pointer;
    :hover {
        color: gray;
    }
`;

const Auth = ({ username, password, password_check, change, registerChange, formChange }) => {
    return (
        <AuthBlock>
            <Header>
                {formChange === true ? "회원가입" : "로그인"}
            </Header>
            <CheckBox>
                <input
                    type="text"
                    name="username"
                    placeholder={formChange ? ("영문, 숫자로 입력하세요") : ("아이디")}
                    onChange={change}
                    value={username}/>
                <input
                    type="password"
                    name="password"
                    placeholder={formChange ? ("새로운 비밀번호 입력") : ("비밀번호")}
                    onChange={change}
                    value={password}/>
            
            {formChange ?
                (<input
                    type="password"
                    name="password_check"
                    placeholder="비밀번호 확인"
                    onChange={change}
                    value={password_check}/>)
                :
                (null)}
            </CheckBox>
            <ButtonBox>
            {formChange ?
                (<button>회원가입</button>)
                :
                (<button>로그인</button>)}
            </ButtonBox>
            <AddRegister onClick={registerChange}>{formChange ? "로그인하기" : "회원가입하기"}</AddRegister>

        </AuthBlock>
    );
};

export default Auth;