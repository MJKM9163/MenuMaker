import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { tempSetUser } from './modules/auth';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware,),);

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    };
    store.dispatch(tempSetUser(JSON.parse(user)))
  } catch (e) {
    console.log("로그인 유지 인증 실패")
  }
}

sagaMiddleware.run(rootSaga);
loadUser();
//basename="/MenuMaker"
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
