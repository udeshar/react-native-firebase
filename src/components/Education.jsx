import React from 'react'
import {
          SafeAreaView,
          ScrollView,
          StatusBar,
          StyleSheet,
          Text,
          View,
          ImageBackground,
          Image,
          Button,
          TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Education = ({ mobile }) => {
          return (
                    <View style={{ marginTop: 20 }} >
                              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                                        <Icon name="mobile" size={20} color="black" />
                                        <Text style={{ fontSize: 16, color: 'grey', marginLeft: 10 }} >{mobile}</Text>
                              </View>
                              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
                                        <Icon name="mail" size={20} color="black" />
                                        <Text style={{ fontSize: 16, color: 'grey', marginLeft: 10 }} >udesh.arlekr@gmail.com</Text>
                              </View>
                    </View>
          )
}

export default Education