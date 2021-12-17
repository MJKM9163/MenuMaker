import React from 'react';
import { Route } from 'react-router-dom';
import MakerLoading from './containers/makers/MakerLoading';
import MenuBar from './components/MenuBar';
import SettingContainer from './containers/setting/SettingContainer';
import ComentContainer from './containers/coments/ComentContainer';
import DBmakerForm from './containers/DBmakerForm';
import AuthContainer from './containers/auths/AuthContainer';

function App() {

  return (
    <>
      <Route path="/" component={MenuBar} exact />
      <Route path="/login" component={AuthContainer} />
      <Route path="/setting" component={SettingContainer} />
      <Route path="/maker" component={MakerLoading} />
      <Route path="/coment" component={ComentContainer} />
      <Route path="/registerOnlylkjdrfs" component={DBmakerForm} />
      {/* <Route path="/priceAPI" component={PriceAPI} />
      <Route path="/pricesave" component={PriceSave} /> */}
    </>
  );
}

export default App;
