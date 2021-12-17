import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ComentPaginationBlock = styled.div`
    font-size: 23px;
    cursor: default;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    .numbers, .left, .right {
        cursor: pointer;
    }
    .numbers, .numbers_current {
        margin: 0px 10px 0px 10px;
    }
    .numbers_current {
        color: red;
        text-decoration: underline;
        text-underline-position: under;
    }
    .right, .left {
        :hover {
            background-color: black;
            color: #5f5f5f;
        }
    }
    .right_end {
        display: none;
    }
    .left_end {
        display: none;
    }

`;

const ComentPagination = ({listDate, listChange}) => {
    const [current, setCurrent] = useState(0);
    const pageNumber = [];
    const pageAllNumber = Math.ceil(listDate.length/10)
    const nextNum = 1;
    const prevNum = -1;

    for (let i = 0; i < pageAllNumber; i++) {
        pageNumber.push(i)
    }

    const currentChange = (num) => {
        console.log(num)
        setCurrent(num);
        listChange(num);
    }
    const pageChange = (num) => {
        setCurrent(current + num);
        listChange(current + num)
    }

    return (
        <ComentPaginationBlock>
            <span
                className={current === 0 ? 'left_end' : 'left'}
                onClick={()=>currentChange(1)}>&lt;&lt;
            </span>&nbsp;&nbsp;
            <span
                className={current === 0 ? 'left_end' : 'left'}
                onClick={()=>pageChange(prevNum)}>&lt;
            </span>&nbsp;&nbsp;
            {pageNumber.map(num => (
                <span
                    key={num}
                    className={current === num ? 'numbers_current' : 'numbers'}
                    onClick={()=>currentChange(num)}>{num+1}
                </span>
            ))}&nbsp;&nbsp;
            <span
                className={current === pageAllNumber-1 ? 'right_end' : 'right'}
                onClick={()=>pageChange(nextNum)}>&gt;
            </span>&nbsp;&nbsp;
            <span
                className={current === pageAllNumber-1 ? 'right_end' : 'right'}
                onClick={()=>currentChange(pageAllNumber)}>&gt;&gt;
            </span>
        </ComentPaginationBlock>
    );
};

export default ComentPagination;