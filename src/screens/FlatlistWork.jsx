import { StyleSheet, Text, View, FlatList, SafeAreaView, Modal } from 'react-native'
import React, {useState} from 'react'
import User from '../components/User'
import CustomButton from '../components/CustomButton'

const data = [
          {
                    id: 1,
                    name: "udesh",
                    email: "udesh.arlekar@gmail.com",
                    age: 23,
          },
          {
                    id: 2,
                    name: "Savio",
                    email: "savio@gmail.com",
                    age: 23
          },
          {
                    id: 3,
                    name: "Ranjana",
                    email: "ranjana@gmail.com",
                    age: 21,
          },
          {
                    id: 4,
                    name: "Mayuresh",
                    email: "mayuresh@gmail.com",
                    age: 25
          },
          {
                    id: 5,
                    name: "Sheetal",
                    email: "sheetal@gmail.com",
                    age: 25
          }
]

const FlatlistWork = () => {

          const [modalVisible, setModalVisible] = useState(false);

          return (
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}  >

                              <Modal 
                                        visible={modalVisible}
                                        transparent={true}
                                        onRequestClose={() => setModalVisible(!modalVisible)}
                                        animationType='fade'
                              >
                                        <View style={{flex : 1, alignItems : 'center', justifyContent : 'center', backgroundColor : '#000000BF'}} >
                                                  <View style={{backgroundColor : 'white', width : '75%', height : "35%", display : 'flex', alignItems : 'center', justifyContent : 'space-between', padding : 20}} >
                                                            <Text style={{color : 'black', fontSize : 20, fontWeight: 'bold'}} >Hello modal</Text>
                                                            <Text style={{color : '#000', textAlign : 'center'}} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, saepe dolor quae nobis quibusdam iure accusamus aliquid fugiat. Animi incidunt beatae ad, quia nulla veniam aperiam sed quo porro doloremque.</Text>
                                                            <CustomButton title={"close modal"} callback={()=>setModalVisible(!modalVisible)} style={{backgroundColor : 'blue', marginHorizontal : 20}} />
                                                  </View>
                                        </View>
                              </Modal>

                              <View style={{padding : 20, gap : 10}} > 
                                        {
                                                  data.map((item, index) => (
                                                            <View key={index} style={styles.flatlistItem} >
                                                                      <Text style={{ color: 'black' }} >{item.name}</Text>
                                                            </View>
                                                  ))
                                        }
                              </View>

                              <CustomButton title={"show modal"} callback={()=>setModalVisible(!modalVisible)} style={{backgroundColor : 'blue', marginHorizontal : 20}} />
                              <Text>FlatlistWork</Text>
                              <FlatList
                                        data={data}
                                        style={styles.flatlist}
                                        horizontal={true}
                                        contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
                                        renderItem={({ item, index }) => (
                                                  <User item={item} index={index} />
                                        )}
                              />


                    </SafeAreaView>
          )
}

export default FlatlistWork

const styles = StyleSheet.create({
          flatlistItem: {
                    padding: 20,
                    backgroundColor: 'lightgreen',
                    borderRadius: 10
          },
          text : {
                    color : '#000'
          }
})