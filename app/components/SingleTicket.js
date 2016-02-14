import React, {
  Component,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View
} from 'react-native';

import QRCode from 'react-native-qrcode';
import ToiletCode from './ToiletCode';

export default class SingleTicket extends Component {
  render() {
    const { ticket } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text>Rivi: {ticket.seat.row}</Text>
        <Text>Paikka: {ticket.seat.seat}</Text>
        <QRCode
          value={ticket.id}
          size={250}
        />
        <View style={styles.toiletCode}>
          <ToiletCode image={`https://www.finnkino.fi${ticket.img}`} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14
  },
  toiletCode: {
    marginTop: 14
  }
});
