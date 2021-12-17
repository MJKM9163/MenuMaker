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
    width: 500px;
    height: 600px;
    background: #f1f1f1;
    overflow: auto;
    outline: 1px solid #aaaa;
    transition: 200ms;

    @media (max-width: 1280px) {
        top: 100px;
        width: 450px;
        height: 520px;
        transform: translateX(-45%);
    }
    @media (max-width: 1024px) {
        top: 70px;
        width: 380px;
        height: 430px;
        transform: translateX(-40%);
    }
    @media (max-width: 800px) {
        top: 100px;
        width: 300px;
        height: 400px;
        transform: translateX(-50%);
    }
`;

const NotoBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    margin-bottom: 3rem;
    font-size: 30px;
    border-bottom: 1px solid #666666aa;

    @media (max-width: 1280px) {
        font-size: 30px;
    }
    @media (max-width: 1024px) {
        font-size: 27px;
    }
    @media (max-width: 800px) {
        font-size: 25px;
    }
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