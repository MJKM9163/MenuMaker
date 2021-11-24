import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as comentAPI from '../lib/api/coment';

const COMENT_CREATE = 'coment/CREATE';
const COMENT_LIST = 'coment/LIST';
const COMENT_UPDATE = 'coment/UPDATE';
const COMENT_CREATE_SUCCESS = 'coment/CREATE_SUCCESS';
const COMENT_LIST_SUCCESS = 'coment/LIST_SUCCESS';
const COMENT_UPDATE_SUCCESS = 'coment/UPDATE_SUCCESS';
const CHANGE = 'coment/CHANGE';
const INITIALIZATION = 'coment/INITIALIZATION';
const ERROR_NULL = 'coment/ERROR_NULL';
const FAILURE = 'FAILURE';

export const comentCreate = createAction(
    COMENT_CREATE, (comentDate) => (comentDate),
);
export const comentList = createAction(
    COMENT_LIST,
);
export const comentUpdate = createAction(
    COMENT_UPDATE, (updateDate) => (updateDate),
);
export const changeText = createAction(
    CHANGE, (text) => (text),
);
export const initialization = createAction(
    INITIALIZATION,
);
export const errorNull = createAction(
    ERROR_NULL,
);

const initialState = {
    create: null,
    listDate: null,
    body: '',
    username: '',
    error: null,
};

const createSaga = createRequestSaga(COMENT_CREATE, comentAPI.create);
const listSaga = createRequestSaga(COMENT_LIST, comentAPI.comentList);
const updateSaga = createRequestSaga(COMENT_UPDATE, comentAPI.comentUpdate);
export function* comentSaga() {
    yield takeLatest(COMENT_CREATE, createSaga);
    yield takeLatest(COMENT_LIST, listSaga);
    yield takeLatest(COMENT_UPDATE, updateSaga);
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
        [COMENT_UPDATE_SUCCESS]: (state, { payload: create }) => ({
            ...state,
            create,
        }),
        [CHANGE]: (state, { payload: { form, value } }) => ({
            ...state,
            [form]: value,
        }),
        [INITIALIZATION]: state => ({
            ...state,
            body: '',
            username: '',
        }),
        [ERROR_NULL]: state => ({
            ...state,
            error: null,
        }),
        [FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default coment;