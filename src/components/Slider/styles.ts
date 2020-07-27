import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
  },
  underLay: {},
  picture: {},
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
});

export default styles;
