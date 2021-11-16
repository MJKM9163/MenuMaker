import React from 'react';
import styled from 'styled-components';
import Maker from '../../components/makers/Maker';

const MenuListContainerBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 500px;
    outline: 1px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;

    :hover {
        outline: 1px solid red;
        border-top: 1px solid red;
        border-bottom: 1px solid red;
    }
`;


const MenuListContainer = ({ rices, mains, sides, soups }) => {
    const times = ["moning", "lunch", "diner"];
    const Repetition = [0, 1, 2];
    const mainNumber = [0, 2, 4];
    const sideNumber = [0, 3, 6];

    return (
        <MenuListContainerBlock>
            {Repetition.map(repeat => (
                <Maker
                    key={repeat}
                    time={times[repeat]}
                    rices={rices[repeat]}
                    mains={mains}
                    mainNumber={mainNumber[repeat]}
                    sides={sides}
                    sideNumber={sideNumber[repeat]}
                    soups={soups[repeat]}
                />
            ))}
        </MenuListContainerBlock>
    );
};

export default MenuListContainer;