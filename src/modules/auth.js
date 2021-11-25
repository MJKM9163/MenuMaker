import { createAction, handleActions } from 'redux-actions';
// import createRequestSaga from '../lib/createRequestSaga';
// import { takeLatest } from 'redux-saga/effects';

const CHANGE = 'login/CHANGE';
// const oo_SUCCESS = 'login/oo_SUCCESS';

export const valueChange = createAction(
    CHANGE, (value) => (value),
);

const initialState = {
    username: '',
    password: '',
    password_check: '',
    error: null,
};

const auth = handleActions(
    {
        [CHANGE]: (state, { payload: { name, value } }) => ({
            ...state,
            [name]: value,
        }),
    },
    initialState,
);

export default auth;