import React from 'react';
import styled from 'styled-components';

const ComentBlock = styled.div`
    display: flex;
    width: 600px;
    height: 100px;

    @media (max-width: 425px) {
        width: 95%;
    }

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
        //border: 0;
        width: 100px;
    };
`;

const Coment = ({ addCreate, bodyUpDate, enterPress,
    body, changeButton, changeInput }) => {
    
    return (
        <ComentBlock>
            {changeInput ?
                (<input
                    type="text"
                    className="body"
                    placeholder="수정할 내용 입력..(최대 100글자)"
                    onChange={bodyUpDate}
                    onKeyPress={((e) => enterPress(e, "updateButton"))}
                    value={body} />)
                :
                (<input
                    type="text"
                    className="body"
                    placeholder="내용 입력..(최대 100글자)"
                    onChange={bodyUpDate}
                    onKeyPress={((e) => enterPress(e, "createButton"))}
                    value={body} />)
            }
            {changeButton ?
            (<button
                onClick={(() => addCreate("updateButton"))}
                className="updateButton">
                    수정하기
            </button>)
            :
            (<button
                onClick={(() => addCreate("createButton"))}
                className="createButton">
                    글 남기기
            </button>)}
        </ComentBlock>
    );
};

export default Coment;