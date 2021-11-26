import React from 'react';
import styled from 'styled-components';

const ComentListBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: ${props => props.check ? '#ff6528' : '#fbffea'};

    :hover {
        background: ${props => props.check ? '#ff6528' : '#f7ffd3'};
    }
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
    .update {
        flex: 0 0 40px;
        margin-right: 5px;
        cursor: pointer;
        :hover {
            background: #efff96;
        }
    }
    .delete {
        flex: 0 0 40px;
        width: 100px;
        text-align: center;
        cursor: pointer;
        :hover {
            background: #ff3232;
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

    .username {
        font-weight: bold;
        font-size: 13px;
    }
`;

const ComentList = ({ listItem, username, updateClick, deleteClick, itemFocus }) => {
    const idNum = listItem._id;

    return (
        <ComentListBlock check={itemFocus === idNum}>
            <DateBox>
                <div className="username">
                    {listItem.username}
                </div>
                <div className="date">
                    {new Date(listItem.publishedDate).toLocaleDateString()}
                </div>
            </DateBox>
            <ListBox>
                <div className="text">
                    {listItem.body}
                </div>
                {listItem.username === username ?
                    (<div>
                        <span className="update" onClick={updateClick} id={idNum}>
                            수정
                        </span>
                        <span className="delete" onClick={deleteClick} id={idNum}>
                            삭제
                        </span>
                    </div>)
                    :
                    (null)}
            </ListBox>
        </ComentListBlock>
    );
};

export default ComentList;