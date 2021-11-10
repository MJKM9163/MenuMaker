import React from 'react';
import styled from 'styled-components';

const DBmakerBlock = styled.div`
    form {
        display: flex;
        flex-direction: column;
        width: 400px;

        input {
            font-size: 20px;
        }

        button {
            width: 200px;
            height: 70px;
        }
    }

    button {
        width: 100px;
        height: 60px;
    }
`;


const DBmaker = ({ onSubmit, onChange, topInput,
                menuValue, booleanValue, deValue, maValue, inValue, caValue, cookValue, sauceValue }) => {
    return (
        <DBmakerBlock>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="menuname"
                    placeholder="menuname"
                    onChange={onChange}
                    ref={topInput}
                    value={menuValue}
                    />
                <input
                    type="text"
                    name="main"
                    placeholder="booleanType"
                    onChange={onChange}
                    value={booleanValue}
                    />
                {/* <input
                    type="text"
                    name="description"
                    placeholder="description"
                    onChange={onChange}
                    value={deValue}
                    /> */}
                <input
                    type="text"
                    name="main_ingredient"
                    placeholder="main_ingredient"
                    onChange={onChange}
                    value={maValue}
                    />
                <input
                    type="text"
                    name="ingredient"
                    placeholder="ingredient"
                    onChange={onChange}
                    value={inValue}
                    />
                <input
                    type="text"
                    name="category"
                    placeholder="category"
                    onChange={onChange}
                    value={caValue}
                    />
                <input
                    type="text"
                    name="cook_type"
                    placeholder="cook_type"
                    onChange={onChange}
                    value={cookValue}
                    />
                <input
                    type="text"
                    name="sauce_base"
                    placeholder="sauce_base"
                    onChange={onChange}
                    value={sauceValue}
                    />
                <button> form 전송</button>
            </form>
        </DBmakerBlock>
    );
};

export default DBmaker;

// const MenuSchema = new Schema ({
//     menuname: String,
//     image: Buffer,
//     description: String,
//     main_ingredient: String,
//     ingredient: [String],
// });
