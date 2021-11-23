import React from 'react';
import styled from 'styled-components';

const ComentBlock = styled.div`
    display: flex;
    width: 600px;
    height: 100px;
    outline: 1px solid;

    .username {
        position: absolute;
        :focus {
            outline: none;
        };
    };

    .body {
        width: 500px;
        :focus {
            outline: none;
        };
    };

    button {
        width: 100px;
    };
`;

const Coment = ({ addCreate, bodyUpDate }) => {
    
    return (
        <ComentBlock>
            <input
                type="text"
                className="username"
                placeholder="사용자 이름 입력"
                onChange={bodyUpDate} />
            <input
                type="text"
                className="body"
                placeholder="내용 입력.."
                onChange={bodyUpDate} />
            <button onClick={addCreate}>글 남기기</button>
        </ComentBlock>
    );
};

export default Coment;