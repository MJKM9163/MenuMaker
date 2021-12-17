import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ComentCreate from '../../components/coments/ComentCreate';
import ComentPagination from '../../components/coments/ComentPagination';
import ComentListContainer from './ComentListContainer';
import Address from '../../components/common/Address';
import { comentDelete } from '../../lib/api/coment';
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
    height: 580px;
`;

const ComentContainer = ({ history }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [listRender, setListRender] = useState(true);
    const [changeButton, setChangeButton] = useState(false);
    const [changeInput, setChangeInput] = useState(false);
    const [idValue, setIdValue] = useState(null);
    const [itemFocus, setItemFocus] = useState(false);
    const [deleteBox, setDeleteBox] = useState(false);
    const [pageListNum, setPageListNum] = useState(0);

    const body = useSelector(({ coment }) => 
        coment.body,
    );
    
    const listDate = useSelector(({ coment }) =>
        coment.listDate,
    );

    const serverError = useSelector(({ coment }) =>
        coment.error,
    );

    const { setUser } = useSelector(({ auth }) => ({
        setUser: auth.setUser,
    }));

    const { username } = setUser; //쿠키에 든 userId

    const bodyUpDate = (e) => {
        const { value, className } = e.target;
        if (className === "body") {
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
            setItemFocus(false);
        }
    };

    const deleteClick = (e) => {
        setIdValue(e.target.id);
        setDeleteBox(true);
    }

    const deleteBoxCancel = () => {
        setIdValue(null);
        setDeleteBox(false);
    }

    const deleteStart = async () => {
        try {
            setDeleteBox(false);
            await comentDelete(idValue);
            setLoading(false);
            setListRender(true);
        } catch (e) {
            console.log(e);
        }
    }

    const updateClick = (e) => {
        if (!changeButton) {
            setIdValue(e.target.id);
            dispatch(changeText({
                form: "body",
                value: "",
            }));
            setChangeInput(true);
            setChangeButton(true);
            setItemFocus(e.target.id);
        } else if (changeButton) {
            setIdValue(null);
            dispatch(changeText({
                form: "body",
                value: "",
            }));
            setChangeInput(false);
            setChangeButton(false);
            setItemFocus(false);
        };
    };

    const listChange = (num) => {
        setPageListNum(num);
        //setListRender(true);
    };

    const backMove = () => {
        history.push('/');
    };

    useEffect(() => {
        if (listRender) {
            dispatch(comentList());
            setListRender(false);
        };
    },[dispatch, listRender, pageListNum]);

    useEffect(() => {
        if (listDate) {
            setLoading(true);
        }
    },[listDate]);

    return (
        <ComentBox>
            <TopMenu>댓글을 남겨주세요
                <div className="close" onClick={backMove}>뒤로</div>
            </TopMenu>
            {loading ?
                (<ComentListContainer
                    username={username}
                    listDate={listDate}
                    updateClick={updateClick}
                    deleteClick={deleteClick}
                    deleteBox={deleteBox}
                    deleteStart={deleteStart}
                    deleteBoxCancel={deleteBoxCancel}
                    itemFocus={itemFocus}
                    pageListNum={pageListNum} />)
                :
                (<LoadingBox>댓글 목록을 불러오는 중입니다..</LoadingBox>)}
            {loading ?
                (<ComentPagination
                    listDate={listDate}
                    listChange={listChange} />)
                :
                (null)}
            {serverError ?
                (<ErrorBox>수정할 내용이 없어요</ErrorBox>)
                :
                (null)}
            <ComentCreate
                addCreate={addCreate}
                bodyUpDate={bodyUpDate}
                enterPress={enterPress}
                username={username}
                body={body}
                changeInput={changeInput}
                changeButton={changeButton} />
            <Address />
        </ComentBox>
    );
};

export default withRouter(ComentContainer);