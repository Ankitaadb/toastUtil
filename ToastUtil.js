import {NativeModules, Platform} from 'react-native';

var RCTToastNative = Platform.OS === 'ios' ? NativeModules.RNToastNative : NativeModules.ToastUtil;

var ToastNative = {
    //Toast duration constants
    show: function (message) {
        Platform.OS === 'android' ?
            RCTToastNative.show(message, RCTToastNative.SHORT)
            :
            RCTToastNative.show(message, RCTToastNative.SHORT, RCTToastNative.BOTTOM, {height: 40});
    }
};

export default ToastNative;