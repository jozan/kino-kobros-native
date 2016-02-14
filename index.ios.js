'use strict';

import React, {
  AppRegistry,
  Component
} from 'react-native';

import Routes from './app/components/Routes';

class KinoKobros extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

AppRegistry.registerComponent('KinoKobros', () => KinoKobros);
