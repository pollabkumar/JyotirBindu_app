import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const TermsandConditions = () => {
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

                    <View style={{ justifyContent: "center", }}>
                        <Text
                            style={{
                                fontSize: responsiveFontSize(2.1),
                                color: "#fff",
                                fontWeight: '400',
                                alignItems: "center"
                            }}>
                            Terms & Conditions
                        </Text>
                    </View>

                </View>


            </View>

          <ScrollView>

          
           
                <View style={{ width: "100%", alignItems: "center",paddingHorizontal:10,paddingTop:5  }}>
                    <Text style={{ color: "#302c51", fontWeight: '400', fontSize: responsiveFontSize(1.75),textAlign:"justify"}}>
                        Jyotirbindu Foundation reserves the rights to change these terms and conditions at any time by posting changes online.
                        Your continued use of this site after changes are posted constitutes your acceptance of this agreement as modified.
                        You agree to use this site only for lawful purposes, and in a manner which does not infringe the rights, or restrict, 
                        or inhibit the use and enjoyment of the site by any third party.
                    </Text>
                </View>
          

            <View style={{ }}>
                <View style={{ width: "100%", alignItems: "center",paddingHorizontal:10   }}>
                    <Text style={{ color: "#302c51", fontWeight: '400', fontSize: responsiveFontSize(1.75),textAlign:"justify"}}>
                        This site and the information, names, images, pictures, logos regarding or relating to Jyotirbindu
                        Foundation are provided “as is” without any representation or endorsement made and without warranty of
                        any kind whether express or implied. In no event will Jyotirbindu Foundation be liable for any damages
                        including, without limitation, indirect or consequential damages, or any damages whatsoever arising from the
                        use or in connection with such use or loss of use of the site, whether in contract or in negligence.
                    </Text>
                </View>
            </View>

          
                <View style={{ width: "100%", alignItems: "center",paddingHorizontal:9, justifyContent: 'center' }}>
                    <Text style={{ color: "#302c51", fontWeight: '400', fontSize: responsiveFontSize(1.75),textAlign:"justify"  }}>
                        Jyotirbindu Foundation does not warrant that the functions contained in the material contained in this site will
                        be uninterrupted or error free, that defects will be corrected, or that this site or the server that makes it available
                        are free of viruses or bugs or represents the full functionality, accuracy and reliability of the materials.or third party individuals.
                    </Text>
                </View>
         

            <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                <View style={{ width: "100%",}}>
                    <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2.6), fontWeight: "700" }}>Membership</Text>
                </View>

                <View style={{ width: "100%",paddingTop:7 }}>
                    <Text style={{ color: "#302c51", fontSize: responsiveFontSize(1.75),}}>
                    When a user fills the membership form, the user submits the following data on his own concern:
                    </Text>
                </View>

                <View style={{ width: "100%",paddingTop:10 }}>


                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#302c51" }}>{`\u25CF Identity Details`}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#302c51" }}>{`\u25CF Location Details`}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#302c51" }}>{`\u25CF Bank Account Details`}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#302c51" }}>{`\u25CF Other Required Details`}</Text>
                </View>
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 7 }}>
                <View style={{ width: "100%" }}>
                    <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2.6), fontWeight: "700" }}>Donation</Text>
                </View>

                <View style={{ width: "100%",paddingTop:7 }}>
                    <Text style={{ color: "#302c51", fontSize: responsiveFontSize(1.75),}}>
                    When a user fills the donation form, the user submits the following data on his own concern:
                    </Text>
                </View>


                <View style={{ width: "100%",paddingTop:10 }}>
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#302c51" }}>{`\u25CF Name`}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#302c51" }}>{`\u25CF Phone Number`}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#302c51" }}>{`\u25CF Email`}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.75), color: "#302c51" }}>{`\u25CF Other Required Details`}</Text>
                </View>
            </View>
            <View style={{marginBottom:30}}></View>
            </ScrollView>
        </View>
    )
}

export default TermsandConditions

const styles = StyleSheet.create({})