import React, {
  Component,
  View,
  StyleSheet
} from 'react-native';

import CropImage from './CropImage';

export default class ToiletCode extends Component {
  render() {
    const { image } = this.props;

    return (
      <View style={styles.container}>
        <CropImage
          position={{ top: 420*2, left: 170*2 }}
          cropSize={{width: 50*2, height: 20*2}}
          size={{ width: 396*2, height: 560*2 }}
          source={{ uri: image}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
