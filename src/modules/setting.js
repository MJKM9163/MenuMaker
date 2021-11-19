import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as settingAPI from '../lib/api/setting';

const REPEAT = 'setting/REPEAT';
const LIST_FIND = 'setting/LIST_FIND';
const LIST_FIND_SUCCESS = 'setting/LIST_FIND_SUCCESS';
const FAILURE = 'FAILURE';

export const repeatSetting = createAction(
    REPEAT,
);
export const settingListFind = createAction(
    LIST_FIND,
);

const initialState = {
    number: '1',
    list: null,
    error: null,
};

const listSaga = createRequestSaga(LIST_FIND, settingAPI.listSearch);

export function* menuList() {
    yield takeLatest(LIST_FIND, listSaga);
};

const setting = handleActions(
    {
        [REPEAT]: (state, { payload: number }) => ({
            ...state,
            number,
        }),
        [LIST_FIND_SUCCESS]: (state, { payload: list }) => ({
            ...state,
            list,
        }),
        [FAILURE]: (state, { payload: errer }) => ({
            ...state,
            errer,
        }),
    },
    initialState,
)

export default setting;