import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import maker, { menuSaga } from './maker';
import DBSave, { dbSaveSaga } from './DBSave';
import setting, { menuList } from './setting';
import coment, { comentSaga } from './coment';

const rootReducer = combineReducers({
    maker,
    DBSave,
    setting,
    coment,
});

export function* rootSaga() {
    yield all([dbSaveSaga(), menuSaga(), menuList(), comentSaga()]);
};

export default rootReducer;