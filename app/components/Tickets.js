import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import SingleTicket from './SingleTicket';

export default class Tickets extends Component {
  render() {
    const { venue, tickets, onPressTicket } = this.props;

    return (
      <View style={styles.container}>
        {tickets.map((ticket, i) =>
          <TouchableOpacity
            onPress={() => onPressTicket(ticket)}
            key={`ticket.eventId${i}`}
            style={styles.ticket}
          >
            <View>
              <Text>Teatteri: {venue.theater}</Text>
              <Text>Sali: {venue.room}</Text>
              <Text>Rivi: {ticket.seat.row}</Text>
              <Text>Paikka: {ticket.seat.seat}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ticket: {
    paddingBottom: 14,
    marginBottom: 14,
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
