import React from 'react';
import styled from 'styled-components';

const DBmakerBlock = styled.div`
    form {
        display: flex;
        flex-direction: column;
        width: 400px;

        input {
            font-size: 20px;
        }

        button {
            width: 200px;
            height: 70px;
        }
    }

    .testButton {
        display: block;
        width: 130px;
        height: 45px;
    }
`;

const IngredientArrayBox = styled.div`
    border: 1px solid;
    width: 400px;
    height: 50px;
`


const DBmaker = ({ onSubmit, onChange, topInput, Arrayupdata, ingredientArray, subInput, subInput2, subButton,
    subButton2, fastClick, menuValue, booleanValue, deValue, maValue, inValue, caValue, cookValue,
    sauceValue, countryValue, ArrayWeightupdata, ingredientWeightArray, fastClick2, maWeightValue,
    inWeightValue }) => {
    return (
        <DBmakerBlock>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="menuname"
                    placeholder="menuname"
                    onChange={onChange}
                    ref={topInput}
                    value={menuValue}
                    />
                <input
                    type="text"
                    name="main"
                    placeholder="main_booleanType"
                    onChange={onChange}
                    value={booleanValue}
                    />
                <input
                    type="text"
                    name="description"
                    placeholder="description"
                    onChange={onChange}
                    value={deValue}
                    />
                <input
                    type="text"
                    name="main_ingredient"
                    placeholder="main_ingredient"
                    onChange={onChange}
                    value={maValue}
                    />
                <input
                    type="text"
                    name="main_ingredient_weight"
                    placeholder="main_weight"
                    onChange={onChange}
                    value={maWeightValue}
                    />
                <input
                    type="text"
                    name="ingredient"
                    placeholder="ingredient"
                    onChange={onChange}
                    onKeyUp={fastClick}
                    ref={subInput}
                    value={inValue}
                    />
                <input
                    type="text"
                    name="ingredient_weight"
                    placeholder="ingredient_weight"
                    onChange={onChange}
                    onKeyUp={fastClick2}
                    ref={subInput2}
                    value={inWeightValue}
                    />
                <input
                    type="text"
                    name="category"
                    placeholder="category"
                    onChange={onChange}
                    value={caValue}
                    />
                <input
                    type="text"
                    name="cook_type"
                    placeholder="cook_type"
                    onChange={onChange}
                    value={cookValue}
                    />
                <input
                    type="text"
                    name="sauce_base"
                    placeholder="sauce_base"
                    onChange={onChange}
                    value={sauceValue}
                    />
                <input
                    type="text"
                    name="country"
                    placeholder="country"
                    onChange={onChange}
                    value={countryValue}
                    />
                <button> form 전송</button>
            </form>
            <button
                className="testButton"
                ref={subButton}
                onClick={Arrayupdata}>부재료 등록
            </button>
            <button
                className="testButton"
                ref={subButton2}
                onClick={ArrayWeightupdata}>부재료 무게 등록
            </button>
            <div style={{color: "orangered"}}>
                부재료 등록으로 이동하는 키 <strong>Ctrl</strong> (ingredient 에서만 가능)
            </div>
            <div style={{color: "orangered"}}>
                부재료 무게 등록으로 이동하는 키 <strong>Ctrl</strong> (ingredient_weight 에서만 가능)
            </div>
            <div style={{marginTop: "13px"}}>
                부재료 등록한 목록   
                <IngredientArrayBox>
                    {ingredientArray}
                </IngredientArrayBox>
            </div>
            <div style={{marginTop: "13px"}}>
                부재료 무게 등록한 목록   
                <IngredientArrayBox>
                    {ingredientWeightArray}
                </IngredientArrayBox>
            </div>
        </DBmakerBlock>
    );
};

export default DBmaker;