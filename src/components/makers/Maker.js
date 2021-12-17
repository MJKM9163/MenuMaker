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
    text-align: center;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
    @media (max-width: 800px) {
        font-size: 14px;
    }

    .tiemName {
        font-size: 20px;
        @media (max-width: 1024px) {
            font-size: 18px;
        }
        @media (max-width: 800px) {
            font-size: 16px;
        }
        :hover {
            width: 100%;
            background-color: #dadada;
        }
    }
    .riceBlock {
        color: #ff8a9d;
        :hover {
            color: #ff4363;
        }
    }
    .soupBlock {
        color: #cc00cc;
        :hover {
            color: #ff00ff;
        }
    }
    .mainBlock_0 {
        color: #1b1bff;
        :hover {
            color: #2c2cff;
        }
    }
    .mainBlock_1 {
        color: #5f5fff;
        :hover {
            color: #7575ff;
        }
    }
    .sideBlock_0 {
        color: #e06500;
        :hover {
            color: #ff8119;
        }
    }
    .sideBlock_1 {
        color: #ff7a0e;
        :hover {
            color: #ff9c4a;
        }
    }
    .sideBlock_2 {
        color: #ff933b;
        :hover {
            color: #ffab66;
        }
    }
`

const OverDiv = styled.div`
    position: fixed;
    color: black;
    background-color: #b1b1b1;
`

const DescriptionDiv = styled.div`
    color: black;
    background-color: #ff6e6e;
`

const PriceDiv = styled.div`
    color: black;
    background-color: #b9adff;
`

const AllPriceDiv = styled.div`
    position: fixed;
    color: black;
    background-color: #60e7ff;
`

const MaketItem = ({ rice, main, mainNumber, side, sideNumber, soup,
    ricePrice, mainPrice, sidePrice, soupPrice, time}) => {
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
        } else if (addCtrl === 'tiemName') {
            setAddNum('tiemName');
        } else {
            setAddNum(null);
        }
    },[addCtrl])

    return (
        <ItemBlock>
            <div onMouseOver={addOver} onMouseOut={addOut} className="tiemName">{time}
                {addNum === 'tiemName' ?
                (
                <AllPriceDiv>
                    {time} 총 가격
                    {Number(ricePrice.toFixed(0))+Number(soupPrice.toFixed(0))+Number(mainPrice[0 + mainNumber].toFixed(0))+
                    Number(mainPrice[1 + mainNumber].toFixed(0))+Number(sidePrice[0 + sideNumber].toFixed(0))+
                    Number(sidePrice[1 + sideNumber].toFixed(0))+Number(sidePrice[2 + sideNumber].toFixed(0))}

                </AllPriceDiv>
                )
                :
                (null)}
            </div>
            <div>
                <span onMouseOver={addOver} onMouseOut={addOut} className="riceBlock">{rice.menuname}
                {addNum === 'rice' ?
                (<OverDiv>
                    <DescriptionDiv>
                        {rice.description}
                    </DescriptionDiv>
                    <PriceDiv>
                        {ricePrice.toFixed(0)}원
                    </PriceDiv>
                </OverDiv>)
                :
                (null)}
                </span> / <span onMouseOver={addOver} onMouseOut={addOut} className="soupBlock">{soup.menuname}
                {addNum === 'soup' ?
                (<OverDiv>
                    <DescriptionDiv>
                        {soup.description}
                    </DescriptionDiv>
                    <PriceDiv>
                        {soupPrice.toFixed(0)}원
                    </PriceDiv>
                </OverDiv>)
                :
                (null)}
                </span>
            </div>
            {mainItem.map(item => (
                <div key={item} className={`mainBlock_${item}`} onMouseOver={addOver} onMouseOut={addOut}>
                    {main[item + mainNumber].menuname}
                    {addNum === `main_${item}` ?
                    (<OverDiv>
                        <DescriptionDiv>
                            {main[item + mainNumber].description}
                        </DescriptionDiv>
                        <PriceDiv>
                            {mainPrice[item + mainNumber].toFixed(0)}원
                        </PriceDiv>
                    </OverDiv>)
                    :
                    (null)}
                </div>
            ))}
            {sideItem.map(item => (
                <div key={item} className={`sideBlock_${item}`} onMouseOver={addOver} onMouseOut={addOut}>
                    {side[item + sideNumber].menuname}
                    {addNum === `side_${item}` ?
                    (<OverDiv>
                        <DescriptionDiv>
                            {side[item + sideNumber].description}
                        </DescriptionDiv>
                        <PriceDiv>
                            {sidePrice[item + sideNumber].toFixed(0)}원
                        </PriceDiv>
                    </OverDiv>)
                    :
                    (null)}
                </div>
            ))}
        </ItemBlock>
    )
}

const Maker = ({ time, rices, mains, mainNumber, sides, sideNumber, soups,
    ricesPrice, mainsPrice, sidesPrice, soupsPrice }) => {
    return (
        <MakerBlock>
            <MaketItem
                time={time}
                rice={rices}
                ricePrice={ricesPrice}
                main={mains}
                mainPrice={mainsPrice}
                side={sides}
                sidePrice={sidesPrice}
                soup={soups}
                soupPrice={soupsPrice}
                mainNumber={mainNumber}
                sideNumber={sideNumber}
            />
        </MakerBlock>
    );
};

export default Maker;