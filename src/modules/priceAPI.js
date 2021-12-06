import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../lib/createRequestSaga";
import { takeLatest } from 'redux-saga/effects';
import * as openAPIs from '../lib/api/openAPI';

const PRICE = 'openAPI/PRICE';
const PRICE_SUCCESS= 'openAPI/PRICE_SUCCESS';

const FAILURE = 'FAILURE';

export const priceList = createAction(
    PRICE, (data) => (data),
);

const initialState = {
    data: null,
    error: null,
};

const priceSaga = createRequestSaga(PRICE, openAPIs.priceAPICall);
export function* priceAPISaga() {
    yield takeLatest(PRICE, priceSaga);
};

const priceAPI = handleActions(
    {
        [PRICE_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            data,
        }),
        [FAILURE]: (state, { payload: errer }) => ({
            ...state,
            errer,
        }),
    },
    initialState,
);

export default priceAPI;