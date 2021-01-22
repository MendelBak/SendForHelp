import * as React from 'react';
import { Pressable, StyleSheet, Vibration } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import EmergencyStore from '../stores/emergency.store';

const emergencyStore = new EmergencyStore();

export default function ResponderScreen() {
  return (
    <View style={styles.container}>
      <Pressable
        disabled={emergencyStore.getEmergency}
        onLongPress={() => (
          emergencyStore.setFirstResponder('Mendel'),
          alert('Thank you for volunteering for this emergency'),
          Vibration.vibrate(200)
        )}
        style={styles.alertButton}
      >
        <View style={styles.alertButton}>
          <Text style={styles.alertButton__text}>I'M ON MY WAY!</Text>
        </View>
      </Pressable>
    </View>
  );
}

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
