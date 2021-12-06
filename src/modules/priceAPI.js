import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../lib/createRequestSaga";
import { takeLatest } from 'redux-saga/effects';
import * as openAPIs from '../lib/api/openAPI';

const PRICE100 = 'openAPI/PRICE100';
const PRICE100_SUCCESS= 'openAPI/PRICE100_SUCCESS';
const PRICE200 = 'openAPI/PRICE200';
const PRICE200_SUCCESS= 'openAPI/PRICE200_SUCCESS';
const PRICE300 = 'openAPI/PRICE300';
const PRICE300_SUCCESS= 'openAPI/PRICE300_SUCCESS';
const PRICE400 = 'openAPI/PRICE400';
const PRICE400_SUCCESS= 'openAPI/PRICE400_SUCCESS';
const PRICE500 = 'openAPI/PRICE500';
const PRICE500_SUCCESS= 'openAPI/PRICE500_SUCCESS';
const PRICE600 = 'openAPI/PRICE600';
const PRICE600_SUCCESS= 'openAPI/PRICE600_SUCCESS';

const FAILURE = 'FAILURE';

export const priceList100 = createAction(
    PRICE100, (data) => (data),
);
export const priceList200 = createAction(
    PRICE200, (data) => (data),
);
export const priceList300 = createAction(
    PRICE300, (data) => (data),
);
export const priceList400 = createAction(
    PRICE400, (data) => (data),
);
export const priceList500 = createAction(
    PRICE500, (data) => (data),
);
export const priceList600 = createAction(
    PRICE600, (data) => (data),
);

const initialState = {
    data100: null,
    data200: null,
    data300: null,
    data400: null,
    data500: null,
    data600: null,
    error: null,
};

const price100Saga = createRequestSaga(PRICE100, openAPIs.priceAPI100Call);
const price200Saga = createRequestSaga(PRICE200, openAPIs.priceAPI200Call);
const price300Saga = createRequestSaga(PRICE300, openAPIs.priceAPI300Call);
const price400Saga = createRequestSaga(PRICE400, openAPIs.priceAPI400Call);
const price500Saga = createRequestSaga(PRICE500, openAPIs.priceAPI500Call);
const price600Saga = createRequestSaga(PRICE600, openAPIs.priceAPI600Call);
export function* priceAPISaga() {
    yield takeLatest(PRICE100, price100Saga);
    yield takeLatest(PRICE200, price200Saga);
    yield takeLatest(PRICE300, price300Saga);
    yield takeLatest(PRICE400, price400Saga);
    yield takeLatest(PRICE500, price500Saga);
    yield takeLatest(PRICE600, price600Saga);
};

const priceAPI = handleActions(
    {
        [PRICE100_SUCCESS]: (state, { payload: data100 }) => ({
            ...state,
            data100,
        }),
        [PRICE200_SUCCESS]: (state, { payload: data200 }) => ({
            ...state,
            data200,
        }),
        [PRICE300_SUCCESS]: (state, { payload: data300 }) => ({
            ...state,
            data300,
        }),
        [PRICE400_SUCCESS]: (state, { payload: data400 }) => ({
            ...state,
            data400,
        }),
        [PRICE500_SUCCESS]: (state, { payload: data500 }) => ({
            ...state,
            data500,
        }),
        [PRICE600_SUCCESS]: (state, { payload: data600 }) => ({
            ...state,
            data600,
        }),
        [FAILURE]: (state, { payload: errer }) => ({
            ...state,
            errer,
        }),
    },
    initialState,
);

export default priceAPI;