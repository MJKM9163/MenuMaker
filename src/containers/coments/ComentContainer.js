import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ComentCreate from '../../components/coments/ComentCreate';
import ComentListContainer from './ComentListContainer';
import Address from '../../components/common/Address';
import { comentCreate, comentList, changeText,
    initialization, comentUpdate, errorNull } from '../../modules/coment';

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
        cursor: pointer;
    };
`;

const TopMenu = styled.div`
    font-size: 30px;
`;

const ErrorBox = styled.div`
    height: 0px;
    color: red;
`;

const LoadingBox = styled.div`
    width: 600px;
    height: 650px;
`;

const ComentContainer = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [listRender, setListRender] = useState(true);
    const [changeButton, setChangeButton] = useState(false);
    const [changeInput, setChangeInput] = useState(false);
    const [idValue, setIdValue] = useState(null);

    const body = useSelector(({ coment }) => 
        coment.body,
    );

    const username = useSelector(({ coment }) =>
        coment.username,
    );

    const listDate = useSelector(({ coment }) =>
        coment.listDate,
    );

    const serverError = useSelector(({ coment }) =>
        coment.error,
    );

    const bodyUpDate = (e) => {
        const { value, className } = e.target;
        if (className === "username_0" && value.length < 9) {
            e.target.className = "username";
            dispatch(changeText({
                form: className,
                value,
            }));
            setError(false);
        }
        if (className === "username") {
            if(value.length < 9) {
                dispatch(changeText({
                    form: className,
                    value,
                }));
            } else if (value.length >= 9) {
                setError(true);
                e.target.className = "username_0";
            };
        } else if (className === "body") {
            dispatch(changeText({
                form: className,
                value,
            }));
            if (serverError) {
                dispatch(errorNull())
            }
        }
    };

    const enterPress = (e, type) => {
        if (e.key === "Enter") {
            addCreate(type);
        }
    }

    const addCreate = (type) => {

        if (type === "createButton") {
            dispatch(comentCreate({ body, username }));
            dispatch(initialization());
            setLoading(false);
            setListRender(true);
        } else if (type === "updateButton") {
            dispatch(comentUpdate({ body, idValue }));
            dispatch(initialization());
            setLoading(false);
            setListRender(true);
            setChangeInput(false);
            setChangeButton(false);
        }
    };

    const updateClick = (e) => {
        if (!changeButton) {
            setIdValue(e.target.id);
            dispatch(changeText({
                form: "body",
                value: "",
            }));
            setChangeInput(true);
            setChangeButton(true);
        } else if (changeButton) {
            setIdValue(null);
            dispatch(changeText({
                form: "body",
                value: "",
            }));
            setChangeInput(false);
            setChangeButton(false);
        }
    }

    useEffect(() => {
        if (listRender) {
            dispatch(comentList());
            setListRender(false);
        };
    },[dispatch, listRender]);

    useEffect(() => {
        if (listDate) {
            setLoading(true);
        }
    },[listDate])

    return (
        <ComentBox>
            <TopMenu>댓글을 남겨주세요
                <div className="close">뒤로</div>
            </TopMenu>
            {loading ?
                (<ComentListContainer listDate={listDate} updateClick={updateClick}/>)
                :
                (<LoadingBox>댓글 목록을 불러오는 중입니다..</LoadingBox>)}
            {error ?
                (<ErrorBox>글자가 너무 많아요</ErrorBox>)
                :
                (null)}
            {serverError ?
                (<ErrorBox>수정할 내용이 없어요</ErrorBox>)
                :
                (null)}
            <ComentCreate
                addCreate={addCreate}
                bodyUpDate={bodyUpDate}
                error={error}
                enterPress={enterPress}
                username={username}
                body={body}
                changeInput={changeInput}
                changeButton={changeButton} />
            <Address />
        </ComentBox>
    );
};

export default ComentContainer;