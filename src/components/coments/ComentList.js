import React from 'react';
import styled from 'styled-components';

const ComentListBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 650px;
    background: #d4d4d4;
`;

const ListBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #9b9b9b;
    padding-bottom: 10px;

    .text {
        font-size: 16px;
        margin: 0px 10px 0px 15px;

    }
    .delete {
        flex: 0 0 40px;
        width: 100px;
        text-align: center;
        cursor: pointer;
        :hover {
            background: #ff7474;
            color: white;
        }
    }
`;

const DateBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20px;
    text-align: right;
`;

const ComentList = ({ listDate }) => {
    console.log(listDate);
    return (
        <ComentListBlock>
            <DateBox>
                <div className="username">
                    냥냥고
                </div>
                <div className="date">
                    2021-11-23
                </div>
            </DateBox>
            <ListBox>
                <div className="text">냥냥</div>
                <div className="delete">삭제</div>
            </ListBox>
            <DateBox>
                <div className="username">
                    병아리
                </div>
                <div className="date">
                    2021-11-23
                </div>
            </DateBox>
            <ListBox>
                <div className="text">삐약삐약</div>
                <div className="delete">삭제</div>
            </ListBox>
        </ComentListBlock>
    );
};

export default ComentList;