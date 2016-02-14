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
            style={styles.ticketContainer}
          >
            <View style={styles.ticket}>
              <Text style={styles.text}>Teatteri: {venue.theater}</Text>
              <Text style={styles.text}>Sali: {venue.room}</Text>
              <Text style={styles.text}>Rivi: {ticket.seat.row}</Text>
              <Text style={styles.text}>Paikka: {ticket.seat.seat}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  ticketContainer: {
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  ticket: {
    padding: 14,
  },
  text: {
    color: '#333'
  }
});
