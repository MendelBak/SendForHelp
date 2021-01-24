import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import UserScreen from '../screens/UserScreen';
import ResponderScreen from '../screens/ResponderScreen';
import {
  BottomTabParamList,
  SymptomsParamList,
  TabOneParamList,
  TabTwoParamList,
} from '../types';
import rootStores from '../stores';
import EmergencyStore from '../stores/emergency.store';
import { EMERGENCY_STORE } from '../stores/storesKeys';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name='TabOne'
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Symptoms'
        component={SymptomsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='TabTwo'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const emergencyStore: EmergencyStore = rootStores[EMERGENCY_STORE];

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

const TabOneNavigator = observer(() => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name='TabOneScreen'
        component={UserScreen}
        options={{
          headerTitle: emergencyStore.getEmergency
            ? 'EMERGENCY IN PROGRESS'
            : '',
        }}
      />
    </TabOneStack.Navigator>
  );
});

const SymptomsStack = createStackNavigator<SymptomsParamList>();

const SymptomsNavigator = observer(() => {
  return (
    <SymptomsStack.Navigator>
      <SymptomsStack.Screen
        name='SymptomsScreen'
        component={UserScreen}
        options={{ headerTitle: 'WHAT IS HAPPENING?' }}
      />
    </SymptomsStack.Navigator>
  );
});

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name='TabTwoScreen'
        component={ResponderScreen}
        options={{
          headerTitle: emergencyStore.getEmergency
            ? 'EMERGENCY IN PROGRESS'
            : '',
        }}
      />
    </TabTwoStack.Navigator>
  );
}
