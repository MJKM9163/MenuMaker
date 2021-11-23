import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as comentAPI from '../lib/api/coment';

const COMENT_CREATE = 'coment/CREATE';
const COMENT_LIST = 'coment/LIST';
const COMENT_CREATE_SUCCESS = 'coment/CREATE_SUCCESS';
const COMENT_LIST_SUCCESS = 'coment/LIST_SUCCESS';
const CHANGE = 'coment/CHANGE';
const FAILURE = 'FAILURE';

export const comentCreate = createAction(
    COMENT_CREATE, (comentDate) => (comentDate),
);
export const comentList = createAction(
    COMENT_LIST,
);
export const changeText = createAction(
    CHANGE, (text) => (text),
);

const initialState = {
    create: null,
    listDate: null,
    body: null,
    username: null,
    error: null,
};

const createSaga = createRequestSaga(COMENT_CREATE, comentAPI.create);
const listSaga = createRequestSaga(COMENT_LIST, comentAPI.comentList);
export function* comentSaga() {
    yield takeLatest(COMENT_CREATE, createSaga);
    yield takeLatest(COMENT_LIST, listSaga);
};

const coment = handleActions(
    {
        [COMENT_CREATE_SUCCESS]: (state, { payload: create }) => ({
            ...state,
            create,
        }),
        [COMENT_LIST_SUCCESS]: (state, { payload: listDate }) => ({
            ...state,
            listDate,
        }),
        [CHANGE]: (state, { payload: { form, value } }) => ({
            ...state,
            [form]: value,
        }),
        [FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default coment;