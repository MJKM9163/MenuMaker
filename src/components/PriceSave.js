import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { priceSave } from '../modules/DBSave';

const PriceSaveBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    input {
        font-size: 20px;
    }
    button {
        height: 100px;
    }
`;

const PriceSave = () => {

    const dispatch = useDispatch()
    const ref = useRef(0)

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [detailNumber, setDetailNumber] = useState('');

    const change = (e) => {
        if (e.target.className === "name") {
            setName(e.target.value);
        } else if (e.target.className === "number") {
            setNumber(e.target.value);
        } else if (e.target.className === "detailNumber") {
            setDetailNumber(e.target.value);
        };
    };

    const submitClick = () => {
        dispatch(priceSave({name, number, detailNumber}))
        setName('')
        setNumber('')
        setDetailNumber('')
        ref.current.focus();
    };

    return (
        <PriceSaveBlock>
            <input ref={ref} onChange={change} placeholder="name" className="name" value={name}></input>
            <input onChange={change} placeholder="number" className="number" value={number}></input>
            <input onChange={change} placeholder="detailNumber" className="detailNumber" value={detailNumber}></input>
            <button onClick={submitClick}></button>
        </PriceSaveBlock>
    );
};

export default PriceSave;