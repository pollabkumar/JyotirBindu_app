import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const PrivacyPolicy = () => {
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
                    height: 50
                }}>
                <View style={{ flexDirection: 'row', justifyContent: "center", }}>
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

                    <View style={{ justifyContent: "center",  }}>
                        <Text
                            style={{
                                fontSize: responsiveFontSize(2.1),
                                color: "#fff",
                                fontWeight: '400',
                                alignItems: "center"
                            }}>
                            Privacy Policy
                        </Text>
                    </View>

                </View>


            </View>


            <View style={{ marginHorizontal: 6, marginTop: 5,paddingHorizontal:7 }}>
                <View style={{ width: "100%" ,paddingTop:3}}>
                    <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2.6), fontWeight: "700" }}>Information Gathering</Text>
                </View>

                <View style={{ width: "100%",paddingTop:5 }}>
                    <Text style={{ color: "#302c51",  fontSize: responsiveFontSize(1.95), fontWeight: "500" }}>
                    1. Jyotirbindu Foundation collects information from the users in a number of ways, for example when the user log in or sign in, the user may submits the following data:
                    </Text>
                </View>

                <View style={{ width: "100%",paddingTop:5 }}>
                    <Text style={{ fontSize: responsiveFontSize(1.95), fontWeight: "400", color: "#302c51" }}>{`\u25CF Name`}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.95), fontWeight: "400", color: "#302c51" }}>{`\u25CF Telephone number`}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.95), fontWeight: "400", color: "#302c51" }}>{`\u25CF Payment processing details`}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.95), fontWeight: "400", color: "#302c51" }}>{`\u25CF Any other data as required`}</Text>
                </View>

                <View style={{ width: "100%",paddingTop:10 }}>
                    <Text style={{ color: "#302c51", fontSize: responsiveFontSize(1.95), fontWeight: "500" }}>
                    2. Jyotirbindu Foundation does not collect or record the user’s personal information unless he/she chooses to provide it.
                    </Text>
                </View>



                <View style={{ width: "100%" ,paddingTop:10}}>
                    <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2.6), fontWeight: "700" }}>Use Of Personal Information</Text>
                </View>

                <View style={{ width: "100%",paddingTop:5 }}>
                    <Text style={{ color: "#302c51",  fontSize: responsiveFontSize(1.75), fontWeight: "400",textAlign:"justify"  }}>
                    1. General browsing of Jyotirbindu Foundation website is anonymous and it does not register the user’spersonal information except the time, date and place of visits and the name of internet service provider. This data is used only for statistics and diagnosis.
                    </Text>
                </View>

                <View style={{ width: "100%",paddingTop:5 }}>
                    <Text style={{ color: "#302c51", fontSize: responsiveFontSize(1.75), fontWeight: "400",textAlign:"justify"  }}>
                    2. Jyotirbindu Foundation keeps the user information strictly confidential and this information is secured safely. All relevant information collected through Jyotirbindu Foundation website is handled and used by internal and/or authorized officials only. It is nevershared with any external agencies.
                    </Text>
                </View>
            </View>

        </View>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})