import React, {Component, PropTypes} from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Login from './scenes/Login';
import Dashboard from './scenes/Dashboard';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="" hideNavBar={true}/>
          <Scene key="dashboard" component={Dashboard} title="" hideNavBar={true}/>
        </Scene>  
      </Router>
    );
  }
}

export default Routes;
