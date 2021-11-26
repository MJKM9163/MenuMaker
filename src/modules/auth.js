import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE = 'login/CHANGE';
const REGISTER = 'login/REGISTER';
const REGISTER_SUCCESS = 'login/REGISTER_SUCCESS';
const LOGIN = 'login/LOGIN';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGOUT = 'login/LOGOUT';
const TEMP_SET_USER = 'user/TEMP_SET_USER';

export const valueChange = createAction(
    CHANGE, (value) => (value),
);
export const register = createAction(
    REGISTER, (userdate) => (userdate),
);
export const login = createAction(
    LOGIN, (userdate) => (userdate),
);
export const logout = createAction(
    LOGOUT,
);
export const tempSetUser = createAction(TEMP_SET_USER, user => user);

const initialState = {
    username: '',
    password: '',
    password_check: '',
    date: null,
    loginID: null,
    setUser: null,
    error: null,
};

function* logoutSaga() {
    try {
        yield call(authAPI.logout); // logout API 호출
        localStorage.removeItem('user'); // localStorage에서 user를 제거
    } catch (e) {
        console.log(e);
    };
};

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(LOGOUT, logoutSaga);
};

const auth = handleActions(
    {
        [CHANGE]: (state, { payload: { name, value } }) => ({
            ...state,
            [name]: value,
        }),
        [REGISTER_SUCCESS]: (state, { payload: date }) => ({
            ...state,
            date,
        }),
        [LOGIN_SUCCESS]: (state, { payload: loginID }) => ({
            ...state,
            loginID,
        }),
        [TEMP_SET_USER]: (state,  {payload: setUser} ) => ({
            ...state,
            setUser,
        }),
        [LOGOUT]: state => initialState,
    },
    initialState,
);

export default auth;