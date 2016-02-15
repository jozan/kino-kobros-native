import React, {
  Component,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Animated
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Tickets from './Tickets';
import api from '../utils/api';

export default class Event extends Component {

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  render() {
    const { events } = this.props;
    const { scrollY } = this.state;
    console.log(events);

    const fakeTickets = Array(10).fill(events.tickets[0]);
    events.tickets = fakeTickets;

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 320,
            height: scrollY.interpolate({
              /*inputRange: [0, 480/3],
              outputRange: [480/3*.8, 0]*/
              inputRange: [ -300, 0, 300],
              outputRange: [300/2, 0, -300/3]
            }),
            backgroundColor: '#aaa',
          }}
          source={{ uri: events.poster }}
        />
        <Animated.View
          style={{
            flex: 1
          }}
        >
        <ScrollView
          style={styles.container}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY }}}
          ])}
          scrollEventThrottle={16}
        >
          <Tickets
            venue={events.venue}
            tickets={events.tickets}
            onPressTicket={this.handleOnPressTicket.bind(this)}
          />
        </ScrollView>
      </Animated.View>
      </View>
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
    flex: 1
  }
});
