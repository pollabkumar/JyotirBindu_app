import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const Login = () => {
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
                        <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2.8), fontWeight: "400", fontStyle: 'italic' }}>Login Here</Text>
                    </View>

                    <View style={{ paddingTop: responsiveHeight(5) }}>

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
                                color: '#000',
                                fontWeight: '200',
                                fontStyle: 'italic'
                            }}
                        />

                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2), fontWeight: "200", fontStyle: 'italic' }}>
                            Password
                        </Text>
                        <TextInput
                            placeholder="Enter Your Password"
                            placeholderTextColor={'#fff'}
                            style={{
                                width: '100%',
                                borderBottomWidth: 0.29,
                                borderBottomColor: "#a1bdc8",
                                marginTop: 5,

                                padding: 0,
                                fontSize: responsiveFontSize(1.85),
                                color: '#000',
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
                            onPress={() => navigation.navigate('Form')}
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

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registration')}
                        style={{ flexDirection: "row", justifyContent: "center", paddingTop: responsiveHeight(1) }}>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: "#fff" }}>Don't have an account</Text>
                        <Text style={{ color: '#F29D38', fontSize: responsiveFontSize(1.6), paddingLeft: 5 }}>SIGN UP HERE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})