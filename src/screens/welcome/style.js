import {StyleSheet} from 'react-native';
import {blue, white} from '../../constants/color.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  subContainer: {
    marginTop: '40%',
    alignItems: 'center',
  },
  heading: {
    marginHorizontal: '20%',
    color: blue,
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 30,
    textAlign: 'center',
  },
});

export default styles;
