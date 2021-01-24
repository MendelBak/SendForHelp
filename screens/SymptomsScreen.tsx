import { observer } from 'mobx-react';
import * as React from 'react';
import { Linking, Pressable, StyleSheet, Vibration } from 'react-native';

import { Text, View } from '../components/Themed';
import rootStores from '../stores';
import EmergencyStore from '../stores/emergency.store';
import { EMERGENCY_STORE } from '../stores/storesKeys';
import SymptomsModel from '../models/symptoms.model';

const emergencyStore: EmergencyStore = rootStores[EMERGENCY_STORE];

const SymptomsScreen = observer(() => {
  return (
    <View style={styles.container}>
      <View style={styles.emergencyStatus}>
        <Text></Text>
      </View>

      <Pressable style={styles.welcome}>
        <Text>CHOKING</Text>
      </Pressable>
      <Pressable style={styles.welcome}>
        <Text>DROWING</Text>
      </Pressable>
      <Pressable style={styles.welcome}>
        <Text>BLEEDING</Text>
      </Pressable>
      <Pressable style={styles.welcome}>
        <Text>HIT BY HEAVY OBJECT</Text>
      </Pressable>
    </View>
  );
});

export default SymptomsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderWidth: 2,
    color: 'black',
    backgroundColor: 'grey',
  },

  emergencyStatus: {
    height: 50,
    width: '50%',
    alignItems: 'center',
    textAlignVertical: 'top',
    borderWidth: 2,
    borderColor: 'red',
    marginBottom: 100,
    color: 'grey',
  },
});
