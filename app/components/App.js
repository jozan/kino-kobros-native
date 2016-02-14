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

import { Actions } from 'react-native-router-flux';

import api from '../utils/api';
import { trimTitle } from '../utils/utils';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventId: null
    }
  }

  render() {
    const { events } = this.state;

    return (
      <ScrollView style={styles.container}>
          <View>
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
      </ScrollView>
    );
  }

  handleOnPressShowEvent() {
    const { eventId } = this.state;

    api.event(eventId)
      .then(events => {
        Actions.event({title: events.title, events });
      }).done();
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 14
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
