import React, { useState, useRef, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DBmaker from '../components/DBmaker';
import { dbSave, change } from '../modules/DBSave';

const DBmakerForm = () => {
    const [menuValue, setMenuValue] = useState('');
    const [booleanValue, setBooleanValue] = useState('');
    const [deValue, setDeValue] = useState('');
    const [maValue, setMaValue] = useState('');
    const [maWeightValue, setMaWeightValue] = useState('');
    const [inValue, setInValue] = useState('');
    const [inWeightValue, setWeightInValue] = useState('');
    const [caValue, setCaValue] = useState('');
    const [sauceValue, setSauceValue] = useState('');
    const [cookValue, setCookValue] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const topInput = useRef();
    const subInput = useRef(1);
    const subInput2 = useRef(11);
    const subButton = useRef(2);
    const subButton2 = useRef(2);
    const dispatch = useDispatch();
    const { menuname,
            main,
            description,
            main_ingredient,
            main_ingredient_weight,
            ingredient,
            ingredient_weight,
            category,
            cook_type,
            sauce_base,
            country } = useSelector(({ DBSave }) => ({
                menuname: DBSave.menuname,
                main: DBSave.main,
                description: DBSave.description,
                main_ingredient: DBSave.main_ingredient,
                main_ingredient_weight: DBSave.main_ingredient_weight,
                ingredient: DBSave.ingredient,
                ingredient_weight: DBSave.ingredient_weight,
                category: DBSave.category,
                cook_type: DBSave.cook_type,
                sauce_base: DBSave.sauce_base,
                country: DBSave.country,
            }));

    const onChange = useCallback(
        e => {
        const { value, name } = e.target;
        if (name === "menuname") {
            setMenuValue(value);
        } else if (name ==="main") {
            setBooleanValue(value);
        } else if (name === "description") {
            setDeValue(value);
        } else if (name === "main_ingredient") {
            setMaValue(value);
        } else if (name === "main_ingredient_weight") {
            setMaWeightValue(value);
        } else if (name === "ingredient") {
            setInValue(value);
        } else if (name === "ingredient_weight") {
            setWeightInValue(value);
        } else if (name === "category") {
            setCaValue(value);
        } else if (name === "cook_type") {
            setCookValue(value);
        } else if (name === "sauce_base") {
            setSauceValue(value);
        } else if (name === "country") {
            setCountryValue(value);
        }
        if (name !== "ingredient") {
            dispatch(change({
                form: name,
                value,
            }));
        } else if (name === "ingredient") {
            dispatch(change({
                form: name,
                value,
            }));
        }
    },[dispatch]);

    const ingredientArray = useMemo(() => [],[]);
    const Arrayupdata = () => {
        ingredientArray.push(ingredient)
        setInValue('');
        subInput.current.focus();
    }
    const ingredientWeightArray = useMemo(() => [],[]);
    const ArrayWeightupdata = () => {
        ingredientWeightArray.push(ingredient_weight)
        setWeightInValue('');
        subInput2.current.focus();
    }

    const fastClick = () => {
        if (window.event.keyCode === 17) {
            subButton.current.focus();
        }
    }
    const fastClick2 = () => {
        if (window.event.keyCode === 17) {
            subButton2.current.focus();
        }
    }

    const onSubmit = useCallback(
        e => {
        e.preventDefault();

        dispatch(dbSave({ menuname,
                          main,
                          description,
                          main_ingredient,
                          main_ingredient_weight,
                          ingredientArray,
                          ingredientWeightArray,
                          category,
                          cook_type,
                          sauce_base,
                          country }));
        setMenuValue('');
        setBooleanValue('');
        setDeValue('');
        setMaValue('');
        setMaWeightValue('');
        setInValue('');
        setWeightInValue('');
        setCaValue('');
        setCookValue('');
        setSauceValue('');
        setCountryValue('');

        ingredientArray.length = 0;
        ingredientWeightArray.length = 0;

        topInput.current.focus();
    },[dispatch,
        topInput,
        menuname,
        main,
        description,
        main_ingredient,
        main_ingredient_weight,
        ingredientArray,
        ingredientWeightArray,
        category,
        cook_type,
        sauce_base,
        country]);

    return (
        <div>
            <DBmaker
                onSubmit={onSubmit}
                onChange={onChange}
                topInput={topInput}
                subInput={subInput}
                subInput2={subInput2}
                subButton={subButton}
                subButton2={subButton2}
                fastClick={fastClick}
                fastClick2={fastClick2}
                menuValue={menuValue}
                booleanValue={booleanValue}
                deValue={deValue}
                maValue={maValue}
                maWeightValue={maWeightValue}
                inValue={inValue}
                inWeightValue={inWeightValue}
                caValue={caValue}
                cookValue={cookValue}
                sauceValue={sauceValue}
                countryValue={countryValue}
                ingredientArray={ingredientArray}
                ingredientWeightArray={ingredientWeightArray}
                Arrayupdata={Arrayupdata}
                ArrayWeightupdata={ArrayWeightupdata}
                >
            </DBmaker>
        </div>
    );
};

export default DBmakerForm;