import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Menuu from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const Reachus = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: "#302c51", justifyContent: "center" }}>
        <StatusBar
            animated={true}
            backgroundColor="#302c51"
            barStyle={statusBarStyle}
        />
        <View style={{}}>
            <View style={{ width: "100%", paddingHorizontal: 15 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2.8), fontWeight: "400", fontStyle: 'italic' }}>Reach Us !</Text>
                </View>
    
                <View style={{ paddingTop: responsiveHeight(5) }}>
    
                    <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2), fontWeight: "200", fontStyle: 'italic' }}>
                      Name
                    </Text>
                    <TextInput
                        placeholder="Enter Your Name"
                        placeholderTextColor={'#fff'}
                        style={{
                            width: '100%',
                            borderBottomWidth: 0.29,
                            borderBottomColor: "#a1bdc8",
                            marginTop: 5,
    
                            padding: 0,
                            fontSize: responsiveFontSize(1.85),
                            color: '#fff',
                            fontWeight: '200',
                            fontStyle: 'italic'
                        }}
                    />
    
                </View>
    
    
                <View style={{ paddingTop: 10 }}>
                    <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2), fontWeight: "200", fontStyle: 'italic' }}>
                    Mobile Number
                    </Text>
                    <TextInput
                        placeholder="Enter Your Mobile Number"
                        placeholderTextColor={'#fff'}
                        style={{
                            width: '100%',
                            borderBottomWidth: 0.29,
                            borderBottomColor: "#a1bdc8",
                            marginTop: 5,
    
                            padding: 0,
                            fontSize: responsiveFontSize(1.85),
                            color: '#fff',
                            fontWeight: '200',
                            fontStyle: 'italic'
                        }}
                    />
    
                </View>
    
                <View style={{ paddingTop: 10 }}>
                    <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2), fontWeight: "200", fontStyle: 'italic' }}>
                   Email
                    </Text>
                    <TextInput
                        placeholder="Enter Email Id"
                        placeholderTextColor={'#fff'}
                        style={{
                            width: '100%',
                            borderBottomWidth: 0.29,
                            borderBottomColor: "#a1bdc8",
                            marginTop: 5,
    
                            padding: 0,
                            fontSize: responsiveFontSize(1.85),
                            color: '#fff',
                            fontWeight: '200',
                            fontStyle: 'italic'
                        }}
                    />
    
                </View>
    
                <View style={{ paddingTop: 10 }}>
                    <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2), fontWeight: "200", fontStyle: 'italic' }}>
                    Remarks
                    </Text>
                    <TextInput
                        placeholder="write something"
                        placeholderTextColor={'#fff'}
                        style={{
                            width: '100%',
                            borderBottomWidth: 0.29,
                            borderBottomColor: "#a1bdc8",
                            marginTop: 5,
    
                            padding: 0,
                            fontSize: responsiveFontSize(1.85),
                            color: '#fff',
                            fontWeight: '200',
                            fontStyle: 'italic'
                        }}
                    />
    
                </View>
    
    
                <TouchableOpacity
                    style={{
                        marginTop: responsiveHeight(10),
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        paddingHorizontal: 10
    
                    }}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('Login')}
                        style={{
                            backgroundColor: '#F29D38', borderRadius: 15,
                            padding: 10,
    
    
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center",
    
                        }}>
                        <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), paddingHorizontal: 35 }}>Submit</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
    
      
    
            </View>
        </View>
    
      </View>
        // <View style={{ flex: 1 }}>
        //     <StatusBar
        //         animated={true}
        //         backgroundColor="#302c51"
        //         barStyle={statusBarStyle}
        //     />



        //     {/* mmeennuuu */}
        //     <View style={{
        //         width: "100%",
        //         backgroundColor: "#302c51",
        //         height: 40,
        //         flexDirection: "row",
        //         justifyContent: "space-between",
        //         paddingHorizontal: 5,
        //         alignItems: "center"
        //     }}>


        //         <TouchableOpacity
                  
        //             style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

        //             <Menuu name="chevron-left"
        //                 style={{ fontSize: responsiveFontSize(2.6), color: "#fff", paddingLeft: 6, fontWeight: "600", }}
        //             />

        //             <Text style={{ fontSize: responsiveFontSize(2.3), color: "#fff", paddingLeft: 6, fontWeight: "400", }}>Reach Us!</Text>

        //         </TouchableOpacity>


        //     </View>


        //     {/* form */}
        //     <View style={{ marginHorizontal: 10 }}>
        //         <View style={{ width: "100%", marginTop: 10 }}>
        //             <View>
        //                 <Text style={{ color: '#000', fontSize: 16, }}>
        //                     Name
        //                 </Text>
        //                 <TextInput
        //                     placeholder="Enter Your Name"
        //                     placeholderTextColor={'#6F7074'}
        //                     style={{
        //                         width: '100%',
        //                         borderBottomWidth: 0.29,
        //                         borderBottomColor: "#a1bdc8",
        //                         marginTop: 5,
        //                         padding: 0,
        //                         fontSize: 15,
        //                         color: '#000',
        //                         fontWeight: '300',
        //                     }}
        //                 />
        //             </View>

        //             <View>
        //                 <Text style={{ color: '#000', fontSize: 16, }}>
        //                     Email
        //                 </Text>
        //                 <TextInput
        //                     placeholder="Enter Your Email"
        //                     placeholderTextColor={'#6F7074'}
        //                     style={{
        //                         width: '100%',
        //                         borderBottomWidth: 0.29,
        //                         borderBottomColor: "#a1bdc8",
        //                         marginTop: 5,
        //                         padding: 0,
        //                         fontSize: 15,
        //                         color: '#000',
        //                         fontWeight: '300',
        //                     }}
        //                 />
        //             </View>

        //             <View>
        //                 <Text style={{ color: '#000', fontSize: 16, }}>
        //                     Phone
        //                 </Text>
        //                 <TextInput
        //                     placeholder="Enter Your Phone Number"
        //                     placeholderTextColor={'#6F7074'}
        //                     style={{
        //                         width: '100%',
        //                         borderBottomWidth: 0.29,
        //                         borderBottomColor: "#a1bdc8",
        //                         marginTop: 5,
        //                         padding: 0,
        //                         fontSize: 15,
        //                         color: '#000',
        //                         fontWeight: '300',
        //                     }}
        //                 />
        //             </View>

        //             <View>
        //                 <Text style={{ color: '#000', fontSize: 16, }}>
        //                     Remarks
        //                 </Text>
        //                 <TextInput
        //                     placeholder="Write Something"
        //                     placeholderTextColor={'#6F7074'}
        //                     style={{
        //                         width: '100%',
        //                         height: 60,
        //                         marginTop: 5,
        //                         padding: 0,
        //                         fontSize: 15,
        //                         color: '#000',
        //                         fontWeight: '300',
        //                         backgroundColor: "#e2e4e7",
        //                         borderRadius: 5
        //                     }}
        //                 />
        //             </View>

        //              {/* Capcha */}
        //             <View style={{paddingTop:5}}>
        //                 <Text style={{ color: '#000', fontSize: 16, }}>
        //                     Captcha
        //                 </Text>

        //                 <View style={{}}>
                    
        //                 </View>

        //             </View>

        //             <View style={{paddingTop:10}}>
        //             <TextInput
        //                     placeholder="Enter Captcha"
        //                     placeholderTextColor={'#6F7074'}
        //                     style={{
        //                         width: '100%',
        //                         borderBottomWidth: 0.29,
        //                         borderBottomColor: "#a1bdc8",
        //                         marginTop: 5,
        //                         padding: 0,
        //                         fontSize: 15,
        //                         color: '#000',
        //                         fontWeight: '300',
        //                     }}
        //                 />
        //             </View>


        //         </View>
        //     </View>

        //     <View
        //         style={{
        //             alignItems: "center",
        //             justifyContent: "center",
        //             position: "absolute",
        //             bottom: 10,
        //             width: "100%",
        //             paddingHorizontal: 10
        //         }}>
        //         <TouchableOpacity
        //             // onPress={() => navigation.navigate('ThankyouPage')}
        //             style={{
        //                 backgroundColor:"#302c51", borderRadius: 15,
        //                 padding: 10,


        //                 alignItems: "center",
        //                 width: "100%",
        //                 justifyContent: "center",

        //             }}>
        //             <Text style={{ color: '#fff', fontSize: 17, paddingHorizontal: 35 }}>Submit</Text>
        //         </TouchableOpacity>
        //     </View>

        // </View>
    )
}

export default Reachus

const styles = StyleSheet.create({})