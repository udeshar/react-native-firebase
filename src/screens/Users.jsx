import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersList } from '../store/actions'

const Users = () => {
          
          const dispatch = useDispatch();
          const data = useSelector((state)=> state.user.users)

          console.log(data)

          useEffect(() => {
                    console.log("running")
                    dispatch(getUsersList())
          }, [])
          

          return (
                    <View>
                              <Text style={{color : 'black'}} >Users</Text>
                              <FlatList 
                                     data={data || []}
                                     renderItem={({item}) => (
                                        <View>
                                                  <Text style={{color : 'black'}} >{item.name}</Text>
                                        </View>
                                     )}   
                              />
                    </View>
          )
}

export default Users

const styles = StyleSheet.create({})