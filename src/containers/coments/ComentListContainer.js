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

const DeleteCheckBox = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100vh;
    background: #5e5e5e6e;
`

const WhiteBox = styled.div`
    position: absolute;
    background: white;
    width: 300px;
    height: 200px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    button {
        width: 70px;
        height: 40px;
        margin: 0px 20px 0px 20px;
    }
`

const ComentListContainer = ({ listDate, updateClick, deleteClick, deleteBox,
    deleteBoxCancel, deleteStart, itemFocus }) => {

    return (
        <ComentListContainerBlock>
            {deleteBox ?
                (<DeleteCheckBox>
                    <WhiteBox>
                        정말 삭제하시겠습니까?
                        <div>
                            <button onClick={deleteStart}>삭제</button>
                            <button onClick={deleteBoxCancel}>취소</button>
                        </div>
                    </WhiteBox>
                </DeleteCheckBox>)
                :
                (null)}
            {listDate.map(listItem => (
                <ComentList
                    listItem={listItem}
                    key={listItem._id}
                    updateClick={updateClick}
                    deleteClick={deleteClick}
                    itemFocus={itemFocus}/>
            ))}
        </ComentListContainerBlock>
    );
};

export default ComentListContainer;