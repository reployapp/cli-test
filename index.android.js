/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';

class PanTest extends Component {
  componentWillMount() {
     this._panResponder = PanResponder.create({
       // Ask to be the responder:
       onStartShouldSetPanResponder: (evt, gestureState) => true,
       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
       onMoveShouldSetPanResponder: (evt, gestureState) => true,
       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

       onPanResponderGrant: (evt, gestureState) => {
         // The guesture has started. Show visual feedback so the user knows
         // what is happening!

         // gestureState.{x,y}0 will be set to zero now
       },
       onPanResponderMove: (evt, gestureState) => {
         // The most recent move distance is gestureState.move{X,Y}

         // The accumulated gesture distance since becoming responder is
         // gestureState.d{x,y}
         console.log(evt.nativeEvent.locationX)
       },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
         // The user has released all touches while this view is the
         // responder. This typically means a gesture has succeeded
       },
        onPanResponderTerminate: (evt, gestureState) => {
         // Another component has become the responder, so this gesture
         // should be cancelled
       },
        onShouldBlockNativeResponder: (evt, gestureState) => {
         // Returns whether this component should block native components from becoming the JS
         // responder. Returns true by default. Is currently only supported on android.
         return true;
       },
     });
   }

   onResponderMove(e) {
     var evt = e.nativeEvent;
     console.log(evt.locationX);
   }

   render() {
     return (
       <View
         style={styles.box}
        {...this._panResponder.panHandlers}>
       </View>
     );
   }
 }

 var styles = StyleSheet.create({
   box: {
     flexDirection: 'row',
     alignSelf: 'center',
     width: 200,
     height: 50,
     backgroundColor: 'red'
   }
 });

AppRegistry.registerComponent('PanTest', () => PanTest);
