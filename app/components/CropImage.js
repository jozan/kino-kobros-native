import React, {
  Component,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class CropImage extends Component {
  render() {
    const {
      position,
      cropSize,
      size,
      style,
      source
    } = this.props;

    return (
      <View
        style={[{
          position: 'absolute',
          overflow: 'hidden',
          height: cropSize.height,
          width: cropSize.width,
        }, style]}
      >
        <Image
          style={{
            position: 'absolute',
            top: position.top * -1,
            left: position.left * -1,
            height: size.height,
            width: size.width,
          }}
          resizeMode="cover"
          source={source}
        />
      </View>
    );
  }
}
