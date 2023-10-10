import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth';

const Menu = ({ navigation }) => {


          function logout() {
                    auth()
                              .signOut()
                              .then(() => navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'Login' }], // Replace 'Login' with the name of your login screen.
                              }));
          }

          return (
                    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'space-between', paddingBottom: 20 }} >
                              <View>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Resume")} >
                                                  <Text style={styles.link} >Resume</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Assignment2")} >
                                                  <Text style={styles.link}>Assignment 2</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Profile")} >
                                                  <Text style={styles.link}>Faltlist</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Bottom")} >
                                                  <Text style={styles.link}>bottom tab screen</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("FoodMenu")} >
                                                  <Text style={styles.link}>Food Menu redux</Text>
                                        </TouchableOpacity>
                              </View>
                              <View>
                                        <TouchableOpacity style={styles.btn} onPress={() => logout()} >
                                                  <Text style={{ ...styles.link, color: 'red' }}>Logout</Text>
                                        </TouchableOpacity>
                              </View>
                    </View>
          )
}

export default Menu

const styles = StyleSheet.create({
          link: {
                    color: 'blue',
                    fontSize: 20,
                    fontWeight: 'bold'
          },
          btn: {
                    marginHorizontal: 20,
                    marginVertical: 10
          }
})