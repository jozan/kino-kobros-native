'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';

import App from './app/components/App';
import Nav from './app/components/Nav';

class KinoKobros extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav
          initialRoute={{
            component: App
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  }
});

AppRegistry.registerComponent('KinoKobros', () => KinoKobros);
