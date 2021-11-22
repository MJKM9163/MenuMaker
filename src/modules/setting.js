import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as settingAPI from '../lib/api/setting';

const REPEAT = 'setting/REPEAT';
const MAIN_OUT = 'setting/MAIN_OUT';
const ALL_OUT = 'setting/ALL_OUT';
const MAIN_KEEP = 'setting/MAIN_KEEP';
const MAIN_KEEP2 = 'setting/MAIN_KEEP2';
const LIST_FIND = 'setting/LIST_FIND';
const LIST_FIND_SUCCESS = 'setting/LIST_FIND_SUCCESS';
const FAILURE = 'FAILURE';

export const repeatSetting = createAction(
    REPEAT,
);
export const settingListFind = createAction(
    LIST_FIND,
);
export const mainOut = createAction(
    MAIN_OUT,
);
export const allOut = createAction(
    ALL_OUT,
);
export const mainKeep = createAction(
    MAIN_KEEP,
);
export const mainKeep2 = createAction(
    MAIN_KEEP2,
);

const initialState = {
    number: '1',
    list: null,
    allList: null,
    outList: [],
    allOutList: [],
    error: null,
    mainKeep: null,
    mainKeep2: null,
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
        [MAIN_OUT]: (state, { payload: outList }) => ({
            ...state,
            outList,
        }),
        [ALL_OUT]: (state, { payload: allOutList }) => ({
            ...state,
            allOutList,
        }),
        [MAIN_KEEP]: (state, { payload: mainKeep }) => ({
            ...state,
            list: mainKeep,
        }),
        [MAIN_KEEP2]: (state, { payload: mainKeep2 }) => ({
            ...state,
            allList: mainKeep2,
        }),
        [LIST_FIND_SUCCESS]: (state, { payload: list }) => ({
            ...state,
            list,
            allList: list,
        }),
        [FAILURE]: (state, { payload: errer }) => ({
            ...state,
            errer,
        }),
    },
    initialState,
)

export default setting;