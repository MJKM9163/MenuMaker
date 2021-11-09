import { createAction, handleActions } from 'redux-actions';

const REPEAT = 'setting/REPEAT';

export const repeatSetting = createAction(
    REPEAT,
);

const initialState = {
    number: '1',
};

const setting = handleActions(
    {
        [REPEAT]: (state, { payload: number }) => ({
            ...state,
            number,
        }),
    },
    initialState,
)

export default setting;