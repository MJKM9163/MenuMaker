import React from 'react';
import styled from 'styled-components';

const ComentListBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 5px;
    background: ${props => props.check ? '#ffa37e' : '#ffffff'};

    :hover {
        background: ${props => props.check ? '#ffa37e' : '#ebebeb'};
    }
`;

const ListBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .text {
        font-size: 16px;
        margin-left: 5px;

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

const UpdateDelteBox = styled.div`
    width: 100%;
    text-align: right;
    .update {
        flex: 0 0 40px;
        margin-right: 15px;
        cursor: pointer;
        font-weight: ${props => props.check ? 'bold' : 'normal'};
        :hover {
            background: #ff814f;
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
            </ListBox>
                {listItem.username === username ?
                    (<UpdateDelteBox check={itemFocus === idNum}>
                        <span className="update" onClick={updateClick} id={idNum}>
                            수정
                        </span>
                        <span className="delete" onClick={deleteClick} id={idNum}>
                            삭제
                        </span>
                    </UpdateDelteBox>)
                    :
                    (null)}
        </ComentListBlock>
    );
};

export default ComentList;