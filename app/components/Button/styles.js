import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth
  }
});
