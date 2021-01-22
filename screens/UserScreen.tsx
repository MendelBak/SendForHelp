import { Vibration, TouchableNativeFeedback, Pressable } from 'react-native';
import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { observer } from 'mobx-react';
import EmergencyStore from '../stores/emergency.store';

const emergencyStore = new EmergencyStore();
const UserScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text>
        {emergencyStore.getEmergency ? 'EMERGENCY IN PROGRESS' : 'NO EMERGENCY'}
      </Text>
      <Pressable
        disabled={emergencyStore.getEmergency}
        onLongPress={() => (
          emergencyStore.declareEmergency(),
          alert('SENDING FOR HELP'),
          Vibration.vibrate(200)
        )}
        style={styles.alertButton}
      >
        <View style={styles.alertButton}>
          <Text style={styles.alertButton__text}>SEND FOR HELP</Text>
        </View>
      </Pressable>

      <Pressable
        disabled={!emergencyStore.getEmergency}
        onLongPress={() => (
          alert(`Call for help canceled ${emergencyStore.getEmergency}`),
          emergencyStore.cancelEmergency(),
          Vibration.vibrate(200)
        )}
        style={styles.cancelButton}
      >
        <View style={styles.cancelButton}>
          <Text style={styles.cancelButton__text}>CANCEL EMERGENCY</Text>
        </View>
      </Pressable>
    </View>
  );
});

export default UserScreen;

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
  },
  cancelButton__text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});
