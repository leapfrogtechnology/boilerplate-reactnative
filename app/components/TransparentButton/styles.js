import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';

export default StyleSheet.create({
    button: {
        height: 50,
        width: 200,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.border
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});
