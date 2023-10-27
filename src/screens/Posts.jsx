import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useMango from 'use-mango';

const Posts = () => {

          const [posts, setPosts] = useState([])
          const mango = useMango()

          const getPosts = async () => {
                    try {
                              const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                              console.log(response)
                              setPosts(response.data)
                    } catch (error) {
                              console.log(error)
                    }
          }

          const postData = async () => {
                    try {
                              const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                                        title: 'foo',
                                        body: 'bar',
                                        userId: 1
                              })
                              console.info(response.data)
                              // setPosts(response.data)
                    } catch (error) {
                              console.error(error)
                    }
          }

          useEffect(() => {
                    getPosts()
                    postData()
          }, [])

          return (
                    <View style={{ paddingHorizontal: 10, marginTop: 10 }} >
                              <FlatList
                                        data={posts}
                                        ListHeaderComponent={() => (
                                                  <Text style={{fontSize : 180, textAlign : 'center', paddingTop : 30}} >{mango}</Text>
                                        )}
                                        renderItem={({ item }) => {
                                                  console.log(item)
                                                  return (
                                                            <View style={{ padding: 20 }} >
                                                                      <Text style={{ marginVertical: 5, color: "#000", fontWeight : "bold" }} >{item.title}</Text>
                                                                      <Text style={{ color: "#000" }} >{item.body}</Text>
                                                            </View>
                                                  )
                                        }}
                                        keyExtractor={(item) => item.id}
                              />
                    </View>
          )
}

export default Posts

const styles = StyleSheet.create({})