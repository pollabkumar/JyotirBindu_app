import { StyleSheet, Text, View, StatusBar, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Back from 'react-native-vector-icons/Ionicons';
import Ribbon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
const OurCausesDetails = ({route}) => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    console.log('pp',route)
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
                            Details
                        </Text>
                    </View>

                </View>


            </View>

            <View style={{marginTop:5}}>
                <View style={{width:"100%",alignItems:"center",paddingHorizontal:10}}>
                  <Image
                  source={route.params?.data.image}
                  style={{width:"100%",borderRadius:7,height:"50%"}}
                  resizeMode="stretch"

                  /> 
          
                    <View style={{width:"100%",alignItems:"center",marginTop:15}}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <Ribbon name="feed-tag" style={{color:"#ff6015",fontSize: responsiveFontSize(1.95)}}/>
                            <Text style={{color:"#ff6015",paddingLeft:5, fontSize: responsiveFontSize(2),fontWeight:"300"}}>{route.params?.data.title}</Text>
                        </View>
                        <View style={{alignItems:"center",paddingTop:7}}>
                           
                            <Text style={{color:"#302c51",paddingLeft:5, fontSize: responsiveFontSize(2.75)}}>{route.params?.data.subtitle}</Text>
                        </View>
                    </View>
                    <View style={{marginHorizontal:2,marginTop:10}}>
                    <View style={{width:"100%"}}>
                        <View style={{}}>
                            <Text style={{color:"#302c51",ontSize: responsiveFontSize(2.8),fontWeight:"300"}}>{route.params?.data.note}</Text>
                        </View>
                    </View>
                    </View>
                </View>
            </View>


        
        </View>
    )
}

export default OurCausesDetails

const styles = StyleSheet.create({})