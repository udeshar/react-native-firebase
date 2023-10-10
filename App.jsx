import React from 'react';
import Resume from './src/screens/Resume';
import Assignment2 from './src/screens/Assignment2';
import FlatlistWork from './src/screens/FlatlistWork';
import Menu from './src/screens/Menu';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import { SafeAreaView, ActivityIndicator } from 'react-native'
import { store } from './src/store';
import FoodMenu from './src/screens/FoodMenu';

const Stack = createStackNavigator();

function App() {

      const screenOptions = {
            headerShown: false
      }


      return (
            <SafeAreaView style={{ flex: 1 }} >
                  <NavigationContainer>
                        <Stack.Navigator
                              screenOptions={{
                                    headerStyle: {
                                          backgroundColor: 'tomato',
                                    },
                                    headerTitleStyle: {
                                          color: "#fff"
                                    }
                              }}
                        >
                              <Stack.Screen name="Splash" component={Splash} options={screenOptions} />
                              <Stack.Screen name="Login" component={Login} options={screenOptions} />
                              <Stack.Screen name="Signup" component={Signup} options={screenOptions} />
                              <Stack.Screen name="Menu" component={Menu} />
                              <Stack.Screen name="Resume" component={Resume} />
                              <Stack.Screen name="Assignment2" component={Assignment2} />
                              <Stack.Screen name="Profile" component={FlatlistWork} />
                              <Stack.Screen name="FoodMenu" component={FoodMenu} />
                              <Stack.Screen name="Bottom" component={BottomTabs} options={screenOptions} />
                        </Stack.Navigator>
                  </NavigationContainer>
            </SafeAreaView>
      );
}



export default App;
