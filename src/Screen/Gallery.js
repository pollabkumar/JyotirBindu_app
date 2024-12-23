import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, FlatList, Dimensions,Modal } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import Cross from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { imagess } from '../demodata/Demodata'
const Gallery = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [iimmmggee, setiimmmggee] = useState();
    const [modal, setmodal] = useState(false);
    function one(image) {
        setmodal(true)
        setiimmmggee(image)
    }
    function close(){
        setmodal(false)
    }
    return (
        <View style={{ flex: 1, }}>
            <StatusBar
                animated={true}
                backgroundColor="#302c51"
                barStyle={statusBarStyle}
            />

            <View
                style={{
                    flexDirection: 'row',
                    //  paddingHorizontal: 10,
                    paddingVertical: 8,
                    alignItems: 'center',
                    backgroundColor: "#302c51",
                    elevation: 1,
                    position: 'relative',
                    zIndex: 20,
                    justifyContent: "space-between",
                    height: 50
                }}>
                <View style={{ flexDirection: 'row', justifyContent: "center", }}>
                    {/* <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: "center", paddingLeft: responsiveWidth(1), marginTop: 2 }}>
                        <TouchableOpacity
                            style={{ borderRadius: 20, justifyContent: "center", textAlign: "center" }}
                            onPress={() => navigation.goBack()}
                            // navigation.goBack()
                        >
                            <Back
                                name="arrow-back-sharp"
                                style={{ fontSize: responsiveFontSize(3), color: "#4e8ef9", textAlign: "center", justifyContent: "center", color: "#fff" }}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity> */}
                      <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: "center", paddingLeft: responsiveWidth(1), marginTop: 2 }}>
                        <TouchableOpacity
                            style={{ borderRadius: 20, justifyContent: "center", textAlign: "center",paddingHorizontal:5,paddingVertical:5 }}
                            onPress={() => navigation.goBack()}
                        // navigation.goBack()
                        >
                            <Back
                                name="arrow-back-sharp"
                                style={{ fontSize: responsiveFontSize(2.5), color: "#4e8ef9", textAlign: "center", justifyContent: "center", color: "#fff" }}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", }}>
                        <Text
                            style={{
                                fontSize: responsiveFontSize(2.1),
                                color: "#fff",
                                fontWeight: '400',
                                alignItems: "center"
                            }}>
                            Gallery
                        </Text>
                    </View>
                </View>
            </View>
         
            {
                modal ? (
                    <Modal animationType="slide" transparent={true} visible={true}>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                // marginHorizontal: 20,
                            }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                    padding: 1,

                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                    width: '90%',
                                    height: '50%',
                                    justifyContent:"center",
                                    alignItems:"center"
                                    // paddingVertical: 30,
                                }}>
                                    <TouchableOpacity 
                                    onPress={()=>close()}
                                    style={{paddingVertical:10}}>
                                        <Cross name="circle-with-cross"
                                          style={{color:"red",fontSize:responsiveFontSize(3)}}
                                        />
                                    </TouchableOpacity>
                                <Image
                                    source={iimmmggee}
                                    style={{width: '100%',borderRadius: 20,}}
                                    resizeMode="cover"
                                />
                            </View>
                        </View>
                    </Modal>
                ) : (
                    ''
                )
            }

            <View style={{ marginHorizontal: 10, }}>
            
                <FlatList
                    data={imagess}
                    style={{marginBottom:55}}
                    // numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            
                            <View
                                // onPress={() => one(item.image)}
                                style={{
                                    width: "100%"
                                }}>
                                <Image
                                    source={item.image}
                                    style={{ height: 250, width: Dimensions.get('window').width / -10, borderRadius: 10, marginTop: 6 }}
                                    resizeMode="cover"
                                />
                            </View>
                          
                        )
                    }}
                />
                <View style={{paddingBottom:170}}></View>
            </View>
           
        </View>
    )
}

export default Gallery

const styles = StyleSheet.create({})