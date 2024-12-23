
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const ReturnAndRefund = () => {
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
                            Return And Refund
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ width: "100%", paddingTop: 5, paddingHorizontal: 10 }}>
                <Text style={{ color: "#302c51", fontSize: responsiveFontSize(1.75), fontWeight: "400", textAlign: "justify" }}>
                There is no refund after membership fee is given or donation is done. Once payment is completed, this policy dictates that the donar will not be eligible for a refund, regardless of the circumstances.
                </Text>
            </View>

            <View style={{ width: "100%", paddingTop: 5, paddingHorizontal: 10 }}>
                <Text style={{ color: "#302c51", fontSize: responsiveFontSize(1.95), fontWeight: "400", textAlign: "justify" }}>
                    For more details contact
                </Text>
                <Text style={{ color: "#ff6000", fontSize: responsiveFontSize(1.85), fontWeight: "400", textAlign: "justify" }}>
                    jyotirbindufoundation23@gmail.com
                </Text>
            </View>


        </View>
    )
}

export default ReturnAndRefund

const styles = StyleSheet.create({})