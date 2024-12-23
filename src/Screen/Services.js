import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, FlatList, } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import Ribbon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import Medicals from 'react-native-vector-icons/dist/Entypo';
// import Female from 'react-native-vector-icons/dist/FontAwesome5';
// import Aboutus from 'react-native-vector-icons/dist/Ionicons';
// import Aboutus from 'react-native-vector-icons/dist/Ionicons';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

import {Servicesdata } from '../demodata/Demodata';
const Services = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
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
                    height: 50,
                    alignItems:"center"
                }}>
                <View style={{ flexDirection: 'row', justifyContent: "center", }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: "center", paddingLeft: responsiveWidth(1), }}>
                        <TouchableOpacity
                            style={{  borderRadius: 20, justifyContent: "center", textAlign: "center" }}
                            onPress={() => navigation.goBack()}
                        // navigation.goBack()
                        >
                            <Back
                                name="arrow-back-sharp"
                                style={{ fontSize: responsiveFontSize(3), color: "#4e8ef9", textAlign: "center", justifyContent: "center", color: "#fff" }}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", paddingLeft: responsiveWidth(.68) }}>
                        <Text
                            style={{
                                fontSize: responsiveFontSize(2.1),
                                color: "#fff",
                                fontWeight: '400',
                                alignItems: "center"
                            }}>
                            Services
                        </Text>
                    </View>

                </View>


            </View>




            <ScrollView>


            <View style={{
                //  marginTop: 10 
                 }}>
                    <FlatList
                        data={Servicesdata}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{}}>
                                <View style={{ marginHorizontal: 5, marginTop: 2,paddingLeft:4}}>
                                    <View style={{
                                        width: "100%", flexDirection: "row", alignItems: "center",
                                        paddingHorizontal: 2,
                                        paddingVertical: 5,
                                        borderRadius: 10
                                    }}>
                                        <Medicals name="text" style={{ color: "#fff", fontSize: responsiveFontSize(2), backgroundColor: "#302c51", paddingHorizontal: 5, paddingVertical: 5, borderRadius: 20 }} />
                                        <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2), fontWeight: "500",paddingLeft:2 }}> {item.top}</Text>
                                    </View>
                                </View>
            
            
                                <View style={{ width: "100%", marginTop: 15, alignItems: "center" }}>
                                    <Image
                                        source={item.image}
                                        style={{ width: "80%", height: 200, borderRadius: 10 }}
                                        // resizeMode="contain"
                                        // resizeMethod='contain'
                                    />
                                </View>
            
                                <View style={{ alignItems: "center", paddingTop: 10 }}>
                                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                                        <Ribbon name="feed-tag" style={{ color: "#ff6015", fontSize: responsiveFontSize(2),  }} />
                                        <Text style={{ color: "#ff6015", fontSize: responsiveFontSize(1.95), paddingLeft: 5, }}>{item.title}</Text>
                                    </View>
                                    <Text style={{ color: "#ff6015", fontSize: responsiveFontSize(2.7), paddingTop: 5, fontWeight: "400" }}>{item.headtitle}</Text>
                                </View>
            
                                <View style={{ width: "100%", paddingHorizontal: 4, alignItems: "center",paddingHorizontal:10 }}>
                                    <Text style={{ color: "#302c51", fontSize: responsiveFontSize(1.85), fontWeight: "300",textAlign:"justify" }}>
                                    {item.description}
                                    </Text>
                                </View>
                                <View style={{paddingBottom:10}}></View>
                            </View>
                            )
                        }}
                    />
                </View>


                {/* <View style={{}}>
                    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                        <View style={{
                            width: "100%", flexDirection: "row", alignItems: "center",
                            paddingHorizontal: 2,
                            paddingVertical: 5,
                            borderRadius: 10
                        }}>
                            <Edu name="book-education-outline" style={{ color: "#fff", fontSize: responsiveFontSize(2), backgroundColor: "#302c51", paddingHorizontal: 5, paddingVertical: 5, borderRadius: 20 }} />
                            <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2), fontWeight: "400" }}> Education</Text>
                        </View>
                    </View>


                    <View style={{ width: "100%", marginTop: 15, alignItems: "center" }}>
                        <Image
                            source={require("../assets/Education.jpg")}
                            style={{ width: "80%", height: 200, borderRadius: 10 }}
                            resizeMode="cover"
                        />
                    </View>

                    <View style={{ alignItems: "center", paddingTop: 10 }}>
                        <View style={{ alignItems: "center", flexDirection: "row" }}>
                            <Edu name="book-education-outline" style={{ color: "#ff6015", fontSize: responsiveFontSize(2) }} />
                            <Text style={{ color: "#ff6015", fontSize: responsiveFontSize(1.95), paddingLeft: 5, }}>Education</Text>
                        </View>
                        <Text style={{ color: "#ff6015", fontSize: responsiveFontSize(2.7), paddingTop: 5, fontWeight: "400" }}>Child Education</Text>
                    </View>

                    <View style={{ width: "100%", paddingHorizontal: 4, alignItems: "center", }}>
                        <Text style={{ color: "#302c51", fontSize: responsiveFontSize(1.85), fontWeight: "300" }}>
                            Jyotirmoy Foundation believes that education is important for children. We help children who don't have access to good schools. We provide scholarships, improve schools, and give children the books and things they need to learn. By helping children learn, we want to give them a better future.
                        </Text>
                    </View>
                </View> */}
<View style={{ marginBottom: 40 }}></View>
        
            </ScrollView>
        </View>
    )
}

export default Services

const styles = StyleSheet.create({})