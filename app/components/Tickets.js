import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import QRCode from 'react-native-qrcode';
import SingleTicket from './SingleTicket';

export default class Tickets extends Component {
  render() {
    const { tickets, onPressTicket } = this.props;

    return (
      <View style={styles.container}>
        {tickets.map((ticket, i) =>
          <TouchableOpacity
            onPress={() => onPressTicket(SingleTicket, ticket)}
            key={`ticket.eventId${i}`}
          >
            <View>
              <Text>Rivi: {ticket.seat.row}</Text>
              <Text>Paikka: {ticket.seat.seat}</Text>
              <QRCode
                value={ticket.id}
                size={250}
              />
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
  }
});
