import React from 'react';
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
        color: pink
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

const MaketItem = ({ rice, main, mainNumber, side, sideNumber }) => {
    const mainItem = [0, 1];
    const sideItem = [0, 1, 2];
    return (
        <ItemBlock>
            <div className="riceBlock">
                {rice.menuname}
            </div>
            {mainItem.map(item => (
                <div key={item} className={`mainBlock_${item}`}>
                    {main[item + mainNumber].menuname}
                </div>
            ))}
            {sideItem.map(item => (
                <div key={item} className={`sideBlock_${item}`}>
                    {side[item + sideNumber].menuname}
                </div>
            ))}
        </ItemBlock>
    )
}

const Maker = ({ time, rices, mains, mainNumber, sides, sideNumber }) => {
    return (
        <MakerBlock>
            {time}
                <MaketItem
                    rice={rices}
                    main={mains}
                    side={sides}
                    mainNumber={mainNumber}
                    sideNumber={sideNumber}
                />
        </MakerBlock>
    );
};

export default Maker;