import React, { useState } from 'react';
import styled from 'styled-components';
import Maker from '../../components/makers/Maker';

const MenuListContainerBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ListContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: ${props => props.charthide ? '500px' : '310px'};
    overflow-Y: ${props => props.charthide ? 'hidden' : 'scroll'};
    overflow-X: hidden;
    outline: 1px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    transition: 0.5s;

    :hover {
        outline: 1px solid red;
        border-top: 1px solid red;
        border-bottom: 1px solid red;
    }
`;

const DataBox = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s;
`;

const Chart = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: 0.5s;

    .chartText {
        text-align: center;
    }
`;

const MenuListContainer = ({ rices, mains, sides, soups,
    ricesPrice, mainsPrice, sidesPrice, soupsPrice }) => {

    const [graphData, setGraphData] = useState([]);
    const [charthide, setCharthide] = useState(true);
    const [chartOpacity, setChartOpacity] = useState('0');
    const times = ["moning", "lunch", "diner"];
    const Repetition = [0, 1, 2];
    const mainNumber = [0, 2, 4];
    const sideNumber = [0, 3, 6];
    const riceReduce = ricesPrice.reduce((a,b) => (a+b));
    const mainReduce = mainsPrice.reduce((a,b) => (a+b));
    const sideReduce = sidesPrice.reduce((a,b) => (a+b));
    const soupReduce = soupsPrice.reduce((a,b) => (a+b));

    const graphStart = () => {
        if (charthide === true) {
            setCharthide(false);
            setTimeout(()=>{
                setChartOpacity('1');
            },10)
            if (graphData.length === 0) {
                const categoryArray = [];
                const finalArray = [];
                for (let i = 0; i < mains.length; i++) {
                    const mainsCategoryCheck = mains[i].category;
                    categoryArray.push(mainsCategoryCheck);
                };
                for (let i = 0; i < sides.length; i++) {
                    const sidesCategoryCheck = sides[i].category;
                    categoryArray.push(sidesCategoryCheck);
                };
                for (let i = 0; i < soups.length; i++) {
                    const soupsCategoryCheck = soups[i].category;
                    categoryArray.push(soupsCategoryCheck);
                };
                const meatFilter = categoryArray.filter(category => {
                    if (category === '고기') {
                        return true;
                    }
                    return false;
                });
                const fishFilter = categoryArray.filter(category => {
                    if (category === '생선') {
                        return true;
                    }
                    return false;
                });
                const vegetableFilter = categoryArray.filter(category => {
                    if (category === '채소') {
                        return true;
                    }
                    return false;
                });
                const etcFilter = categoryArray.filter(category => {
                    if (category !== '채소' && category !== '생선' && category !== '고기') {
                        return true;
                    }
                    return false;
                });
                finalArray.push(Number(((meatFilter.length/categoryArray.length)*100).toFixed(0)));
                finalArray.push(Number(((fishFilter.length/categoryArray.length)*100).toFixed(0)));
                finalArray.push(Number(((vegetableFilter.length/categoryArray.length)*100).toFixed(0)));
                finalArray.push(Number(((etcFilter.length/categoryArray.length)*100).toFixed(0)));
                setGraphData(finalArray);
            }
        } else if (charthide === false) {
            setChartOpacity('0');
            setCharthide(true);
        }
    };
    return (
        <MenuListContainerBlock>
            <ListContainer charthide={charthide}>
                {Repetition.map(repeat => (
                    <Maker
                        key={repeat}
                        time={times[repeat]}
                        rices={rices[repeat]}
                        ricesPrice={ricesPrice[repeat]}
                        mains={mains}
                        mainsPrice={mainsPrice}
                        mainNumber={mainNumber[repeat]}
                        sides={sides}
                        sidesPrice={sidesPrice}
                        sideNumber={sideNumber[repeat]}
                        soups={soups[repeat]}
                        soupsPrice={soupsPrice[repeat]}
                    />
                ))}
            </ListContainer>
            <button className='graphButton' onClick={graphStart}>graphStart</button>
            {charthide ?
            (null)
            :
            (<DataBox style={{opacity:`${chartOpacity}`}}>
                총 가격 {(riceReduce+mainReduce+sideReduce+soupReduce).toFixed(0)}<br />
                <Chart
                    style={
                        {background: `conic-gradient(#ff4e4e 0% ${graphData[0]}%, #2626ff 0% ${graphData[0]+graphData[1]}%, #54be54 0% ${graphData[0]+graphData[1]+graphData[2]}%, #cfcfcf 0% ${graphData[0]+graphData[1]+graphData[2]+graphData[3]}%`}}>
                </Chart>
                <div className='chartText'>
                    <div style={{color: 'red'}}>육고기: {graphData[0]}%</div>
                    <div style={{color: 'blue'}}>해산물: {graphData[1]}%</div>
                    <div style={{color: 'green'}}>채소류: {graphData[2]}%</div>
                    <div style={{color: 'gray'}}>그외: {graphData[3]}%</div>
                    밥을 제외한 백분율
                </div>
            </DataBox>)}
        </MenuListContainerBlock>
    );
};

export default MenuListContainer;