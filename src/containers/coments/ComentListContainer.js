import React from 'react';
import styled from 'styled-components';
import ComentList from '../../components/coments/ComentList';

const ComentListContainerBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 650px;
    background: #d4d4d4;
    overflow: auto;
`;

const ComentListContainer = ({ listDate, updateClick }) => {

    return (
        <ComentListContainerBlock>
            {listDate.map(listItem => (
                <ComentList
                    listItem={listItem}
                    key={listItem._id}
                    updateClick={updateClick}/>
            ))}
        </ComentListContainerBlock>
    );
};

export default ComentListContainer;