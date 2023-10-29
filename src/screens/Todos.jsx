import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, List, Icon, MD3Colors } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo, toggletodo } from '../store/actions';

const Todos = () => {

          const [text, setText] = React.useState("");
          const [selected, setSelected] = React.useState(null);
          const textInputRef = React.useRef(null);
          const dispatch = useDispatch();
          const todos = useSelector((state) => state?.todo?.todos);
          console.log(todos)

          return (
                    <View style={{ flex: 1, justifyContent: 'space-between' }} >
                              <View style={{ paddingHorizontal: 20, marginTop: 20 }} >
                                        <TextInput
                                                  ref={textInputRef}
                                                  label="Add Todo"
                                                  value={text}
                                                  onChangeText={text => setText(text)}
                                                  mode={"outlined"}
                                                  right={<TextInput.Icon icon="send" onPress={()=>{
                                                            if(text.length === 0) return;
                                                            if(selected){
                                                                      dispatch(updateTodo({
                                                                                text,
                                                                                id: selected.id
                                                                      }))
                                                                      setSelected(null)
                                                            } else{
                                                                      dispatch(addTodo({text}))
                                                            }
                                                            setText("")
                                                            textInputRef.current.blur()
                                                  }} />}
                                        />
                                        <Text style={{ color: '#000', marginTop: `20`, fontSize: 20, fontWeight: 'bold', paddingTop: 20 }} >All Todos</Text>
                                        <FlatList 
                                                  data={todos}
                                                  style={{ paddingBottom: 200 }}
                                                  renderItem={({item, index}) => (
                                                            <List.Item
                                                                      title={`Todo item ${index + 1}`}
                                                                      style={{ backgroundColor: selected?.id == item?.id ? "#ffffff" : null }}
                                                                      description={item.text}
                                                                      left={props => <List.Icon {...props} icon="calendar-check" />}
                                                                      right={props => item?.completed ? <List.Icon {...props} icon="check" color={"green"} /> : null}
                                                                      onLongPress={() => setSelected(item)}
                                                            />
                                                  )}
                                                  keyExtractor={item => item.id}
                                        />
                              </View>
                              {
                                        selected &&
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly", paddingVertical: 10, backgroundColor: "#ffffff" }}>
                                                  <TouchableOpacity onPress={()=>{
                                                            setText(selected.text)
                                                            textInputRef.current.focus()
                                                  }} style={{ alignItems: "center" }} >
                                                            <Icon
                                                                      source="calendar-edit"
                                                                      color={MD3Colors.black}
                                                                      size={30}
                                                            />
                                                            <Text style={{ color: "#000" }} >Edit</Text>
                                                  </TouchableOpacity>
                                                  <TouchableOpacity onPress={()=>{
                                                            dispatch(deleteTodo(selected.id))
                                                            setSelected(null)
                                                  }} style={{ alignItems: "center" }} >
                                                            <Icon
                                                                      source="delete"
                                                                      color={MD3Colors.black}
                                                                      size={30}
                                                            />
                                                            <Text style={{ color: "#000" }} >Delete</Text>
                                                  </TouchableOpacity>
                                                  <TouchableOpacity onPress={()=>{
                                                            dispatch(toggletodo(selected.id))
                                                            setSelected(null)
                                                  }} style={{ alignItems: "center" }} >
                                                            <Icon
                                                                      source={selected?.completed ? "cancel" : "check"}
                                                                      color={MD3Colors.black}
                                                                      size={30}
                                                            />
                                                            <Text style={{ color: "#000" }} >{selected?.completed ? 'Incompleted' : 'Completed'}</Text>
                                                  </TouchableOpacity>
                                                  <TouchableOpacity onPress={()=> setSelected(null)} style={{ alignItems: "center" }} >
                                                            <Icon
                                                                      source="close"
                                                                      color={MD3Colors.black}
                                                                      size={30}
                                                            />
                                                            <Text style={{ color: "#000" }} >Cancel</Text>
                                                  </TouchableOpacity>
                                        </View>
                              }
                    </View>
          )
}

export default Todos

const styles = StyleSheet.create({})