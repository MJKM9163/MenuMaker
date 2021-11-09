import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MenuListContainer from './MenuListContainer';


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


const MakerContainer = () => {

    const { rices, mains, sides } = useSelector(({ maker }) => ({
        rices: maker.rices,
        mains: maker.mains,
        sides: maker.sides,
    }));
    const { number } = useSelector(({ setting }) => ({
        number: setting.number,
    }));
    const keys = [0, 1, 2, 3, 4, 5, 6, 7];
    const numberKey = [0, 1, 2, 3, 4, 5, 6];

    keys.splice(number, 8 - number)

    console.log("랜더링 확인----------------------------")
    return (
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
                        sides={sides[key]} />
                ))}
            </MenuListBlock>
            <ButtonsBlock>
                <button>설정</button>
                <button>재생성</button>
                <button>프린트</button>
            </ButtonsBlock>
        </MakerContainerBlock>
    );
};

export default MakerContainer;