import React, { useState, useEffect } from 'react';
import Student from '../../Student';
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
import { styles } from '../styles/styles';
import Icon from 'react-native-vector-icons/Entypo';
import Education from '../components/Education';
import CustomButton from '../components/CustomButton';


function Resume() {
      const [name, setName] = useState('Udesh Arlekar');
      const [mobile, setMobile] = useState(9158807160);
      const [isNameChanged, setIsNameChanged] = useState(false);

      useEffect(() => {
            alert('Name changed');
            setIsNameChanged(!isNameChanged)
      }, [name]);

      return (
            <View style={styles.main} >
                  <SafeAreaView >
                        <ScrollView>
                              <View style={{ position: 'relative', overflow: 'visible' }} >
                                    <ImageBackground source={require('../../assets/images/bg.jpg')} style={{ width: '100%', height: 150 }}>
                                    </ImageBackground>
                                    <View style={{ width: 150, height: 150, borderRadius: 75, overflow: 'hidden', borderWidth: 10, borderColor: 'grey', position: 'absolute', top: 60, left: 20 }} >
                                          <Image source={require('../../assets/images/profile.jpeg')} style={{ height: '100%', width: '100%' }} />
                                    </View>
                              </View>
                              <View style={{ padding: 20, marginTop: 60 }} >
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }} >{name}</Text>
                                    <Text style={{ fontSize: 16, color: 'grey' }} >Software Developer</Text>
                                    <TextInput 
                                          style={{color: 'black', fontSize: 16, marginTop: 20, borderWidth : 1, paddingLeft : 15}}
                                          value={mobile}
                                          onChangeText={(e)=>{
                                                setMobile(e)
                                          }}
                                          placeholder='try changing your mobile number'
                                          placeholderTextColor={'grey'}
                                          keyboardType='numeric'
                                    />

                                    <Education mobile={mobile} />

                                    <View style={{ marginTop: 20 }} >
                                          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }} >About</Text>
                                          <Text style={{ fontSize: 16, color: 'grey', marginTop: 10 }} >I am a software developer with 1 year of experience in react native and react js. I have worked on many projects and have good knowledge of react native and react js.</Text>
                                    </View>
                                    {/* Education */}
                                    <View style={{ marginTop: 20 }} >
                                          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }} >Education</Text>
                                          <View style={{ marginTop: 10 }} >
                                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }} >Sridora caculo college of commerce</Text>
                                                <Text style={{ fontSize: 16, color: 'grey' }} >2018 - 2021</Text>
                                                <Text style={{ fontSize: 16, color: 'grey' }} >Mapusa Goa</Text>
                                          </View>
                                          <View style={{ marginTop: 10 }} >
                                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }} >Goa university</Text>
                                                <Text style={{ fontSize: 16, color: 'grey' }} >2022 - current</Text>
                                                <Text style={{ fontSize: 16, color: 'grey' }} >Taligao panaji goa</Text>
                                          </View>
                                    </View>
                                    <View style={{flex : 1, height : 80, flexDirection : 'row', marginTop : 20}} >
                                          <View style={{flex : 1, backgroundColor : 'red', margin : 5}} ></View>
                                          <View style={{flex : 1, backgroundColor : 'yellow', margin : 5}} ></View>
                                          <View style={{flex : 1, backgroundColor : 'green', margin : 5}} ></View>
                                          <View style={{flex : 1, backgroundColor : 'blue', margin : 5}} ></View>
                                    </View>
                                    {/* projects */}
                                    <View style={{ marginTop: 20 }} >
                                          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }} >Projects</Text>
                                          <View style={{ marginTop: 10 }} >
                                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }} >React native</Text>
                                                <Text style={{ fontSize: 16, color: 'grey' }} >2021</Text>
                                                <Text style={{ fontSize: 16, color: 'grey' }} >React native is a framework for building native apps using React.</Text>
                                          </View>
                                          <View style={{ marginTop: 10 }} >
                                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }} >React js</Text>
                                                <Text style={{ fontSize: 16, color: 'grey' }} >2021</Text>
                                                <Text style={{ fontSize: 16, color: 'grey' }} >React js is a framework for building web apps using React.</Text>
                                          </View>
                                    </View>
                                    <View style={{ marginTop: 20 }} >
                                          {/* <Button title={isNameChanged ? "Back to normal" : "Edit"} onPress={() => {
                                                setName('Udesh')
                                                isNameChanged ? setName('Udesh Arlekar') : setName('Udesh')
                                          }} /> */}
                                          <CustomButton style={{backgroundColor : 'blue'}} title={isNameChanged ? "Back to normal" : "Edit"} callback={()=>{
                                                console.log(isNameChanged)
                                                isNameChanged ? setName('Udesh') : setName('Udesh Arlekar')
                                          }} />
                                    </View>
                              </View>
                        </ScrollView>
                  </SafeAreaView>
            </View>
      );
}



export default Resume;
