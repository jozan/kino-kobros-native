import React, {
  Component,
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

import Tickets from './Tickets';
import api from '../utils/api';
import { trimTitle } from '../utils/utils';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: null,
      eventId: null
    }
  }

  getEvents(eventId) {
    api.event(eventId)
      .then(events => {
        this.setState({ events });
      }).done();
  }

  render() {
    const { events } = this.state;
    console.log(events);

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          {events ? trimTitle(events.originalTitle) : null}
        </Text>

        {events ?
          <Tickets
            tickets={events.tickets}
            onPressTicket={this.handleOnPressTicket.bind(this)}
          />
        :
          <View>
            <Text style={styles.appTitle}>Kino Kobros</Text>
            <TextInput
              style={styles.input}
              onChangeText={eventId => this.setState({ eventId })}
              value={this.state.eventId}
              placeholder="Finnkinon oston numero"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleOnPressShowEvent.bind(this)}
            >
              <View>
                <Text style={styles.buttonText}>Näytä lippu</Text>
              </View>
            </TouchableOpacity>
          </View>
        }

      </ScrollView>
    );
  }

  handleOnPressTicket(SingleTicket, ticket) {
    this.props.navigator.push({
      component: SingleTicket,
      ticket,
    });
  }

  handleOnPressShowEvent() {
    const { eventId } = this.state;

    eventId && this.getEvents(eventId.toLocaleString());
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 14,
    paddingTop: 30,
  },
  appTitle: {
    color: '#333',
    fontSize: 35,
    marginBottom: 35
  },
  title: {
    fontSize: 25,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 4,
    paddingHorizontal: 7,
    height: 38,
    marginBottom: 14
  },
  button: {
    borderRadius: 4,
    padding: 7,
    backgroundColor: '#F6D800',
  },
  buttonText: {
    color: '#222',
    textAlign: 'center',
  }
});
