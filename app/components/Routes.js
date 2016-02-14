import React, {
  Navigator,
  StyleSheet
} from 'react-native';

import { Router, Route, Schema } from 'react-native-router-flux';

import App from './App';
import Event from './Event';
import SingleTicket from './SingleTicket';

export default function Routes() {
  return (
    <Router
      hideNavBar={false}
      sceneStyle={styles.container}
    >
      <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight} />

      <Route name="main" component={App} initial={true} showNavBar={false} title="Kino Kobros" />
      <Route name="event" component={Event} title="Event" />
      <Route name="singleTicket" component={SingleTicket} title="Single Ticket" />
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});
