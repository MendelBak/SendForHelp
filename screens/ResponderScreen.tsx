import { observer } from 'mobx-react';
import { getOwnPropertyDescriptors } from 'mobx/dist/internal';
import * as React from 'react';
import { Pressable, StyleSheet, Vibration } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import rootStores from '../stores';
import EmergencyStore from '../stores/emergency.store';
import { EMERGENCY_STORE } from '../stores/storesKeys';

const emergencyStore: EmergencyStore = rootStores[EMERGENCY_STORE];

const ResponderScreen = observer(() => {
  return (
    <View style={styles.container}>
      <View style={styles.emergencyStatus}>
        <Text>
          {emergencyStore.getEmergency
            ? 'EMERGENCY IN PROGRESS'
            : 'NO EMERGENCY'}
        </Text>
        <Text>
          {emergencyStore.getFirstResponder
            ? `FIRST RESPONDER: ${emergencyStore.getFirstResponder}`
            : ''}
        </Text>
      </View>
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
});

export default ResponderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'grey',
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
  emergencyStatus: {
    height: 50,
    width: '50%',
    alignItems: 'center',
    textAlignVertical: 'top',
    borderWidth: 2,
    borderColor: 'red',
    marginBottom: 100,
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
