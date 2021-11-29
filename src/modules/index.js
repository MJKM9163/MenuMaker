import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import maker, { menuSaga } from './maker';
import DBSave, { dbSaveSaga } from './DBSave';
import setting, { menuList } from './setting';
import coment, { comentSaga } from './coment';
import auth, { authSaga } from './auth';
import open, { openSaga } from './open';

const rootReducer = combineReducers({
    maker,
    DBSave,
    setting,
    coment,
    auth,
    open,
});

export function* rootSaga() {
    yield all([dbSaveSaga(), menuSaga(), menuList(), comentSaga(), authSaga(), openSaga()]);
};

export default rootReducer;