import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import DBmaker from '../components/DBmaker';
import { dbSave, change } from '../modules/DBSave';

const DBmakerFormBlock = styled.div``;

const DBmakerForm = () => {
    const [menuValue, setMenuValue] = useState('');
    const [booleanValue, setBooleanValue] = useState('');
    const [deValue, setDeValue] = useState('');
    const [maValue, setMaValue] = useState('');
    const [inValue, setInValue] = useState('');
    const [caValue, setCaValue] = useState('');
    const [sauceValue, setSauceValue] = useState('');
    const [cookValue, setCookValue] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const topInput = useRef();
    const dispatch = useDispatch();
    const { menuname,
            main,
            description,
            main_ingredient,
            ingredient,
            category,
            cook_type,
            sauce_base,
            country } = useSelector(({ DBSave }) => ({
                menuname: DBSave.menuname,
                main: DBSave.main,
                description: DBSave.description,
                main_ingredient: DBSave.main_ingredient,
                ingredient: DBSave.ingredient,
                category: DBSave.category,
                cook_type: DBSave.cook_type,
                sauce_base: DBSave.sauce_base,
                country: DBSave.country,
            }))

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
        } else if (name === "ingredient") {
            setInValue(value);
        } else if (name === "category") {
            setCaValue(value);
        } else if (name === "cook_type") {
            setCookValue(value);
        } else if (name === "sauce_base") {
            setSauceValue(value);
        } else if (name === "country") {
            setCountryValue(value);
        }
        dispatch(change({
            form: name,
            value,
        }));
    },[dispatch]);

    const onSubmit = useCallback(
        e => {
        e.preventDefault();
        dispatch(dbSave({ menuname,
                          main,
                          description,
                          main_ingredient,
                          ingredient,
                          category,
                          cook_type,
                          sauce_base,
                          country }));
        setMenuValue('');
        setBooleanValue('');
        setDeValue('');
        setMaValue('');
        setInValue('');
        setCaValue('');
        setCookValue('');
        setSauceValue('');
        setCountryValue('');

        topInput.current.focus();
    },[dispatch, topInput,
        menuname, main, description, main_ingredient, ingredient, category, cook_type, sauce_base, country]);

    return (
        <DBmakerFormBlock>
            <DBmaker
                onSubmit={onSubmit}
                onChange={onChange}
                topInput={topInput}
                menuValue={menuValue}
                booleanValue={booleanValue}
                deValue={deValue}
                maValue={maValue}
                inValue={inValue}
                caValue={caValue}
                cookValue={cookValue}
                sauceValue={sauceValue}
                countryValue={countryValue}
                >
            </DBmaker>
        </DBmakerFormBlock>
    );
};

export default DBmakerForm;