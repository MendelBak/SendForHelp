import { Vibration, TouchableNativeFeedback, Pressable } from 'react-native';
import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { observer } from 'mobx-react';
import EmergencyStore from '../stores/emergency.store';

const emergencyStore = new EmergencyStore();

const TabOneScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Pressable
        disabled={emergencyStore.isEmergency}
        onLongPress={() => (
          emergencyStore.declareEmergency(),
          alert(
            emergencyStore.isEmergency
              ? 'SENDING FOR HELP'
              : 'HELP IS ON ITS WAY'
          ),
          Vibration.vibrate(200)
        )}
        style={styles.alertButton}
         background={TouchableNativeFeedback.Ripple('red', true)}
      >
        <View style={styles.alertButton}>
          <Text style={styles.alertButton__text}>SEND FOR HELP</Text>
        </View>
      </Pressable>

      <Pressable
        disabled={!emergencyStore.isEmergency}
        onLongPress={() => (
          alert(`Call for help canceled ${emergencyStore.isEmergency}`),
          emergencyStore.resolveEmergency(),
          // disabled={true},
          Vibration.vibrate(200)
        )}
        style={styles.cancelButton}
        //  background={TouchableNativeFeedback.Ripple('red', true)}
      >
        <View style={styles.cancelButton}>
          <Text style={styles.cancelButton__text}>CANCEL EMERGENCY</Text>
        </View>
      </Pressable>
    </View>
  );
});

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertButton: {
    backgroundColor: '#ABCBA9',
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  alertButton__text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  cancelButton: {
    backgroundColor: 'green',
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    marginTop: 20,
    // height: 100,
    // borderRadius: 100,
  },
  cancelButton__text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});
