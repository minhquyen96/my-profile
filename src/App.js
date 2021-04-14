import React from 'react';
import 'antd/dist/antd.css';
import _ from 'lodash';
import {BrowserRouter, Router, Route, Switch, Redirect} from 'react-router-dom';
import PublicRouter from './routes/publicRouter';
import HomeLayout from "./layouts/home";
import {Provider} from 'react-redux';
import NotFound from "./pages/notFound/notFound";
import {store} from './store/store'
import {history} from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/unc-react-audio-list/dist/assets/css/audio-list.css';
import LegendaryCursor from "legendary-cursor";

window.addEventListener("load", () => {
    LegendaryCursor.init({
        lineSize:         0.08,
        opacityDecrement: 0.55,
        speedExpFactor:   0.8,
        lineExpFactor:    0.6,
        sparklesCount:    65,
        maxOpacity:       0.99,
    });
});

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {/*<Route exact key path='/' render={(route) => <Redirect to={'/'}/>}/>*/}

          {_.map(PublicRouter, (route) => {
            const {component, path} = route;
            return (
              <Route exact key path={path} render={(route) => <HomeLayout component={component} route={route}/>}/>
            );
          })}

          <Route render={props => <NotFound{...props}/>}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
