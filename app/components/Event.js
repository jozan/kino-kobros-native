import React, {
  Component,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Tickets from './Tickets';
import api from '../utils/api';

export default class Event extends Component {

  render() {
    const { events } = this.props;
    console.log(events);

    return (
      <ScrollView style={styles.container}>
        <Tickets
          venue={events.venue}
          tickets={events.tickets}
          onPressTicket={this.handleOnPressTicket.bind(this)}
        />
      </ScrollView>
    );
  }

  handleOnPressTicket(ticket) {
    const { events } = this.props;

    Actions.singleTicket({ title: events.title, ticket });
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 14
  }
});
