import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MakerBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin: 0;
    }
`;

const ItemBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .riceBlock {
        color: pink;
        :hover {
            color: #ff8a9d;
        }
    }
    .soupBlock {
        color: purple;
    }
    .oversoup {
        background-color: #802424;
    }
    .mainBlock_0 {
        color: red;
    }
    .mainBlock_1 {
        color: blue;
    }
    .sideBlock_0 {
        color: green;
    }
    .sideBlock_1 {
        color: orange;
    }
    .sideBlock_2 {
        color: gray;
    }
`

const OverDiv = styled.div`
    position: fixed;
    width: 250px;
    height: 80px;
    color: black;
    background-color: #b1b1b1;
`

const MaketItem = ({ rice, main, mainNumber, side, sideNumber, soup }) => {
    const mainItem = [0, 1];
    const sideItem = [0, 1, 2];

    const [addCtrl, setAddCtrl] = useState(null);
    const [addNum, setAddNum] = useState(null);
    const addOver = (e) => {
        setAddCtrl(e.target.className);
    }
    const addOut = () => {
        setAddCtrl(null);
    }

    useEffect(() => {
        if (addCtrl === 'riceBlock') {
            setAddNum('rice');
        } else if (addCtrl === 'soupBlock') {
            setAddNum('soup');
        } else if (addCtrl === 'mainBlock_0') {
            setAddNum('main_0');
        } else if (addCtrl === 'mainBlock_1') {
            setAddNum('main_1');
        } else if (addCtrl === 'sideBlock_0') {
            setAddNum('side_0');
        } else if (addCtrl === 'sideBlock_1') {
            setAddNum('side_1');
        } else if (addCtrl === 'sideBlock_2') {
            setAddNum('side_2');
        } else {
            setAddNum(null);
        }
    },[addCtrl])

    return (
        <ItemBlock>
            <div>
                <span onMouseOver={addOver} onMouseOut={addOut} className="riceBlock">{rice.menuname}
                {addNum === 'rice' ? (<OverDiv>{rice.description}</OverDiv>) : (null)}
                </span> / <span onMouseOver={addOver} onMouseOut={addOut} className="soupBlock">{soup.menuname}
                {addNum === 'soup' ? (<OverDiv className="oversoup">{soup.description}</OverDiv>) : (null)}
                </span>
            </div>
            {mainItem.map(item => (
                <div key={item} className={`mainBlock_${item}`} onMouseOver={addOver} onMouseOut={addOut}>
                    {main[item + mainNumber].menuname}
                    {addNum === `main_${item}` ? (<OverDiv>{main[item + mainNumber].description}</OverDiv>) : (null)}
                </div>
            ))}
            {sideItem.map(item => (
                <div key={item} className={`sideBlock_${item}`} onMouseOver={addOver} onMouseOut={addOut}>
                    {side[item + sideNumber].menuname}
                    {addNum === `side_${item}` ? (<OverDiv>{side[item + sideNumber].description}</OverDiv>) : (null)}
                </div>
            ))}
        </ItemBlock>
    )
}

const Maker = ({ time, rices, mains, mainNumber, sides, sideNumber, soups }) => {
    return (
        <MakerBlock>
            {time}
                <MaketItem
                    rice={rices}
                    main={mains}
                    side={sides}
                    soup={soups}
                    mainNumber={mainNumber}
                    sideNumber={sideNumber}
                />
        </MakerBlock>
    );
};

export default Maker;