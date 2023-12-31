import React from 'react';
import Resume from './src/screens/Resume';
import Assignment2 from './src/screens/Assignment2';
import FlatlistWork from './src/screens/FlatlistWork';
import Menu from './src/screens/Menu';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Cart from './src/screens/Cart';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import { SafeAreaView, Text } from 'react-native'
import { store } from './src/store/store';
import FoodMenu from './src/screens/FoodMenu';
import CustomHeader from './src/components/CustomHeader';
import Users from './src/screens/Users';
import RnPaper from './src/screens/RnPaper';
import Todos from './src/screens/Todos';
import Posts from './src/screens/Posts';
import Doc from './src/screens/Doc';
import Contactss from './src/screens/Contacts';
import SingleContact from './src/screens/SingleContact';
import BackgroundTaskk from './src/screens/BackgroundTask';

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
                              <Stack.Screen name="FoodMenu" component={FoodMenu} options={{
                                    header : ({navigation}) => <CustomHeader title={"Food Menu"} navigation={navigation} />
                              }} />
                              <Stack.Screen name="Cart" component={Cart} />
                              <Stack.Screen name="Users" component={Users} />
                              <Stack.Screen name="RnPaper" component={RnPaper} options={screenOptions}  />
                              <Stack.Screen name="Todos" component={Todos} />
                              <Stack.Screen name="Posts" component={Posts}  />
                              <Stack.Screen name="Doc" component={Doc}  />
                              <Stack.Screen name="ContactsDisplay" component={Contactss}  />
                              <Stack.Screen name="SingleContact" component={SingleContact}  />
                              <Stack.Screen name="BackgroundTask" component={BackgroundTaskk}  />
                              <Stack.Screen name="Bottom" component={BottomTabs} options={screenOptions} />
                        </Stack.Navigator>
                  </NavigationContainer>
            </SafeAreaView>
      );
}



export default App;
