import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

import Home from '../screens/Home';
import EquipmentTracker from '../screens/EquipmentTracker';

const App = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  const {
    colors: { gray5 },
  } = useTheme();

  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: gray5 },
      }}
      initialRouteName="Home"
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen
        name="EquipmentTracker"
        component={EquipmentTracker}
        options={{
          presentation: 'modal',
          orientation: 'portrait',
        }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
