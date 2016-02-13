import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import QRCode from 'react-native-qrcode';

export default class SingleTicket extends Component {
  render() {
    const { ticket } = this.props;

    return (
      <View style={styles.container}>
        <Text>Rivi: {ticket.seat.row}</Text>
        <Text>Paikka: {ticket.seat.seat}</Text>
        <QRCode
          value={ticket.id}
          size={250}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#fff'
  }
});
