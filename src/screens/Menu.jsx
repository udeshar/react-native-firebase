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
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Users")} >
                                                  <Text style={styles.link}>Users</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("RnPaper")} >
                                                  <Text style={styles.link}>RnPaper</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Todos")} >
                                                  <Text style={styles.link}>Todos (React native paper + redux)</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Posts")} >
                                                  <Text style={styles.link}>Get Post using axios</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Doc")} >
                                                  <Text style={styles.link}>Document picker</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("ContactsDisplay")} >
                                                  <Text style={styles.link}>Contacts</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("BackgroundTask")} >
                                                  <Text style={styles.link}>Background Task</Text>
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