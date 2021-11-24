import React from 'react';
import styled from 'styled-components';

const ComentBlock = styled.div`
    display: flex;
    width: 600px;
    height: 100px;
    outline: 1px solid;

    .username, .username_0 {
        position: absolute;
        width: 180px;
        :focus {
            outline: none;
        };
    };

    .username_0 {
        border: 1px solid red;
    };

    .body {
        width: 500px;
        :focus {
            outline: none;
        };
    };

    .bodyOn {
        width: 500px;
        border: 2px solid yellowgreen;
        :focus {
            outline: none;
        };
    }

    button {
        width: 100px;
    };
`;

const Coment = ({ addCreate, bodyUpDate, error, enterPress,
    username, body, changeButton, changeInput }) => {
    
    return (
        <ComentBlock>
            <input
                type="text"
                className="username"
                placeholder="사용자 이름 입력(최대 8글자)"
                onChange={bodyUpDate}
                value={username}
                disabled={changeInput} />
            {changeInput ?
                (<input
                    type="text"
                    className="body"
                    placeholder="수정할 내용 입력..(최대 200글자)"
                    onChange={bodyUpDate}
                    onKeyPress={((e) => enterPress(e, "updateButton"))}
                    value={body} />)
                :
                (<input
                    type="text"
                    className="body"
                    placeholder="내용 입력..(최대 200글자)"
                    onChange={bodyUpDate}
                    onKeyPress={((e) => enterPress(e, "createButton"))}
                    value={body} />)
            }
            {changeButton ?
            (<button
                onClick={(() => addCreate("updateButton"))}
                disabled={error}
                className="updateButton">
                    수정하기
            </button>)
            :
            (<button
                onClick={(() => addCreate("createButton"))}
                disabled={error}
                className="createButton">
                    글 남기기
            </button>)}
        </ComentBlock>
    );
};

export default Coment;