import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Settings from '../components/Settings';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Icon  from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

function BottomTabs() {
          return (
                    <Tab.Navigator
                              screenOptions={{
                                        tabBarActiveTintColor: 'tomato',
                              }}
                    >
                              <Tab.Screen name="Home" component={Home} options={{tabBarIcon : ({color}) => <Icon name="home" size={25} color={color} />}} />
                              <Tab.Screen name="Settings" component={Settings} options={{tabBarIcon : ({color}) => <Icon name="setting" size={25} color={color} />}} />
                              <Tab.Screen name="About" component={About} options={{tabBarIcon : ({color}) => <Icon name="laptop" size={25} color={color} />}} />
                              <Tab.Screen name="Contacts" component={Contacts} options={{tabBarIcon : ({color}) => <Icon name="contacts" size={25} color={color} />}} />
                    </Tab.Navigator>
          );
}

export default BottomTabs;