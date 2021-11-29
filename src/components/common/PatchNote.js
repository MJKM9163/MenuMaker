import React from 'react';
import styled from 'styled-components';

const PatchNoteBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    top: 10rem;
    left: 50%;
    margin-left: -12.5rem;
    transform: translateX(-50%);
    width: 40rem;
    height: 40rem;
    background: #f1f1f1;
    overflow: auto;
    outline: 1px solid #aaaa;
`;

const NotoBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    margin-bottom: 3rem;
    font-size: 2rem;
    border-bottom: 1px solid #666666aa;
`;

const Note = styled.div`
    //margin-bottom: 2rem;
    border-top: 1px solid #b1b1b1aa;
    border-bottom: 1px solid #b1b1b1aa;

    .description {
        font-size: 1.1rem
    };

    .day, .version {
        margin-right: 1rem;
        text-align: right;
    };
`;

const PatchNote = () => {
    return (
        <PatchNoteBlock>
            <Header>Patch Note</Header>
            <NotoBox>
                <Note>
                    <div className="description">메뉴메이커 오픈!!</div>
                    <div className="day">2021-11-29</div>
                    <div className="version">version: 0.0.1</div>
                </Note>
            </NotoBox>
        </PatchNoteBlock>
    );
};

export default PatchNote;