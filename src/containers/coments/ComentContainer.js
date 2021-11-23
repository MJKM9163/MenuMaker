import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ComentCreate from '../../components/coments/ComentCreate';
import ComentList from '../../components/coments/ComentList';
import Address from '../../components/common/Address';
import { comentCreate, comentList, changeText } from '../../modules/coment';

const ComentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #b3b3a1;
    
    .close {
        position: fixed;
        top: 0px;
        right: 0px;
        /* width: 50px;
        height: 50px; */
        cursor: pointer;
    };
`;

const TopMenu = styled.div`
    font-size: 30px;
`;

const ComentContainer = () => {
    const dispatch = useDispatch();

    const body = useSelector(({ coment }) => 
        coment.body,
    );

    const username = useSelector(({ coment }) =>
        coment.username,
    );

    // const create = useSelector(({ coment }) =>
    //     coment.create,
    // );

    const listDate = useSelector(({ coment }) =>
        coment.listDate,
    );

    const bodyUpDate = (e) => {
        const { value, className } = e.target;
        if (className === "body") {
            dispatch(changeText({
                form: className,
                value,
            }));
            console.log(value)
        } else if (className === "username") {
            dispatch(changeText({
                form: className,
                value,
            }));
            console.log(value)
        };
    };

    const addCreate = useCallback(() => {
        dispatch(comentCreate({ body, username }));
    },[dispatch, body, username]);

    // useEffect(() => {
    //     console.log("이팩트 작동")
    //     if (create) {
    //         console.log("리스트 디스패치 함")
    //         dispatch(comentList());
    //     }
    // },[dispatch, create]);

    useEffect(() => {
        console.log("이팩트 작동")
        dispatch(comentList());
    },[dispatch]);

    return (
        <ComentBox>
            <TopMenu>댓글을 남겨주세요
                <div className="close">뒤로</div>
            </TopMenu>  
            <ComentList listDate={listDate} />
            <ComentCreate
                addCreate={addCreate}
                bodyUpDate={bodyUpDate} />
            <Address />
        </ComentBox>
    );
};

export default ComentContainer;