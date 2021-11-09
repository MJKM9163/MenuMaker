import React from 'react';
import { Route } from 'react-router-dom';
import MakerLoading from './containers/makers/MakerLoading';
import MenuBar from './components/MenuBar';
import SettingContainer from './containers/setting/SettingContainer';
//import DBmakerForm from './containers/DBmakerForm';

function App() {
  return (
    <>
      <Route path="/" component={MenuBar} exact />
      <Route path="/setting" component={SettingContainer} />
      <Route path="/maker" component={MakerLoading} />
      {/* <Route path="/register" component={DBmakerForm} /> */}
    </>
  );
}

export default App;
