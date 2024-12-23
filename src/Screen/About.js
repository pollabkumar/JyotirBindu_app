import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Aboutus from 'react-native-vector-icons/dist/Ionicons';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { Aboutdata } from '../demodata/Demodata';
const About = () => {
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
                            About Us
                        </Text>
                    </View>

                </View>


            </View>

            <ScrollView>



                {/* boxese */}

                <View style={{ marginHorizontal: 9, marginTop: 10 }}>
                    <View style={{ width: "100%", flexWrap: "wrap", flexDirection: "row", gap: 7, alignItems: "center", justifyContent: "center" }}>

                        <View style={{
                            width: "47%",
                            backgroundColor: '#e5ffce',
                            alignItems: "center",
                            flexDirection: "column",
                            paddingVertical: 10,
                            paddingHorizontal: 7,
                            height: 120,
                            borderRadius: 10

                        }}>
                            <View style={{}}>
                                <Image
                                    // source={{uri: "https://jyotirbindufoundation.org/assets/img/solve/1.png"}}
                                    source={require('../assets/1.png')}
                                    style={{ height: 20, width: 20 }}
                                />
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 5 }}>
                                <Text style={{ color: "#2f2c52", fontSize: responsiveFontSize(1.85), fontWeight: "500" }}>Education Facilities</Text>
                            </View>

                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: "#2f2c52", fontSize: responsiveFontSize(1.55), fontWeight: "300", }}>We strive to develop, promote, and improve education of poor children.</Text>
                            </View>

                        </View>




                        <View style={{
                            width: "47%",
                            backgroundColor: '#e5ffce',
                            alignItems: "center",
                            flexDirection: "column",
                            paddingVertical: 10,
                            paddingHorizontal: 7,
                            height: 120,
                            borderRadius: 10
                        }}>
                            <View style={{}}>
                                <Image
                                    source={require('../assets/2.png')}
                                    // source={{uri: "https://jyotirbindufoundation.org/assets/img/solve/2.png"}}
                                    style={{ height: 20, width: 20 }}
                                />
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <Text style={{ color: "#2f2c52", fontSize: responsiveFontSize(1.85), fontWeight: "500" }}>Medical Facilities</Text>
                            </View>

                            <View style={{}}>
                                <Text style={{ color: "#2f2c52", fontSize: responsiveFontSize(1.55), fontWeight: "300", }}>We are dedicated to providing quality healthcare services to those in need.</Text>
                            </View>

                        </View>



                        <View style={{
                            width: "47%",
                            backgroundColor: '#e5ffce',
                            alignItems: "center",
                            flexDirection: "column",
                            paddingVertical: 10,
                            paddingHorizontal: 7,
                            height: 120,
                            borderRadius: 10,

                        }}>
                            <View style={{}}>
                                <Image
                                    source={require('../assets/env2.png')}
                                    // source={{uri: "	https://jyotirbindufoundation.org/assets/img/custom/icons/env2.png"}}
                                    style={{ height: 20, width: 20 }}
                                />
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <Text style={{ color: "#2f2c52", fontSize: responsiveFontSize(1.85), fontWeight: "500" }}>Environment Service</Text>
                            </View>

                            <View style={{}}>
                                <Text style={{ color: "#2f2c52", fontSize: responsiveFontSize(1.55), fontWeight: "300", }}>Our environmental service is dedicated to preserving and safeguarding the planet.</Text>
                            </View>

                        </View>




                        <View style={{
                            width: "47%",
                            backgroundColor: '#e5ffce',
                            alignItems: "center",
                            flexDirection: "column",
                            paddingVertical: 10,
                            paddingHorizontal: 7,
                            height: 120,
                            borderRadius: 10
                        }}>
                            <View style={{}}>
                                <Image
                                    source={require('../assets/animal-safety.png')}
                                    // source={{uri: "https://jyotirbindufoundation.org/assets/img/custom/icons/animal-safety.png"}}
                                    style={{ height: 20, width: 20 }}
                                />
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <Text style={{ color: "#2f2c52", fontSize: responsiveFontSize(1.85), fontWeight: "500" }}>Animal Safety</Text>
                            </View>

                            <View style={{}}>
                                <Text style={{ color: "#2f2c52", fontSize: responsiveFontSize(1.55), fontWeight: "300", }}>We are dedicated to the well-being and protection of all animals.</Text>
                            </View>

                        </View>

                    </View>
                </View>

                {/* second*/}

                <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                    <View style={{ width: "100%", alignItems: "center" }}>

                        <View style={{ flexDirection: "row", paddingTop: 10, alignItems: "center" }}>
                            <Aboutus style={{ fontSize: responsiveFontSize(1.85), color: "#ff6015" }}
                                name="receipt-outline"
                            />
                            <Text style={{ fontSize: responsiveFontSize(1.95), color: "#ff6015", paddingLeft: 7 }}>About Us</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: responsiveFontSize(2.25), color: "#302c51", fontWeight: "500" }}>About Jyotirbindu Foundation</Text>
                        </View>

                        {/* <View style={{ paddingTop: 10, alignItems: "center", }}>
                        <Text style={{ fontSize: responsiveFontSize(1.90), color: "#ff6015",fontWeight:"300" }}>
                            Welcome to JYOTIRBINDU FOUNDATION! We are a company based in Assam, dedicated to making a positive impact on society. Our mission is to improve the lives of the underprivileged and contribute to the overall welfare of the community.
                        </Text>
                    </View>

                    <View style={{ paddingTop: 4, alignItems: "center",}}>
                        <Text style={{ fontSize: responsiveFontSize(1.90), color: "#ff6015",fontWeight:"300" }}>
                            At JYOTIRBINDU FOUNDATION, we are looking forward to improve the lives of
                            the underprivileged and empower communities through various initiatives.
                            We firmly believe in the power of education, social development, and cultural
                            enrichment to uplift individuals and enhance the general well-being of the community.
                        </Text>
                    </View> */}

                    </View>
                </View>

                <View style={{ width: "100%", paddingHorizontal: 10, paddingHorizontal: 15 }}>
                    <View style={{ paddingTop: 10, alignItems: "center", width: "100%" }}>
                        <Text style={{ fontSize: responsiveFontSize(1.75), color: "#302c51", fontWeight: "300" }}>
                            Welcome to JYOTIRBINDU FOUNDATION! We are a company based in Assam, dedicated to making a positive impact on society. Our mission is to improve the lives of the underprivileged and contribute to the overall welfare of the community.
                        </Text>
                    </View>

                    <View style={{ paddingTop: 4, alignItems: "center", width: "100%" }}>
                        <Text style={{ fontSize: responsiveFontSize(1.72), color: "#302c51", fontWeight: "300" }}>
                            At JYOTIRBINDU FOUNDATION, we are looking forward to improve the lives of
                            the underprivileged and empower communities through various initiatives.
                            We firmly believe in the power of education, social development, and cultural
                            enrichment to uplift individuals and enhance the general well-being of the community.
                        </Text>
                    </View>
                </View>

                {/* third*/}

                <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                    <View style={{ width: "100%", alignItems: "center" }}>

                        <View style={{ flexDirection: "row", paddingTop: 10, alignItems: "center" }}>
                            <Aboutus style={{ fontSize: responsiveFontSize(1.85), color: "#ff6015" }}
                                name="receipt-outline"
                            />
                            <Text style={{ fontSize: responsiveFontSize(1.95), color: "#ff6015", paddingLeft: 7 }}>Intentions</Text>
                        </View>

                        <View style={{ width: "100%", alignItems: "center", paddingTop: 5 }}>
                            <Text style={{ fontSize: responsiveFontSize(2.25), color: "#302c51", fontWeight: "500", borderBottomWidth: 0.65, width: "50%", textAlign: "center", borderColor: "#302c51", paddingBottom: 5 }}>Our Objectives</Text>
                        </View>


                    </View>
                </View>
                {/* hkhjfl */}

                <View style={{ marginTop: 10 }}>
                    <FlatList
                        data={Aboutdata}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ paddingTop: 7, marginHorizontal: 12 }}>
                                    <View style={{ width: "100%", backgroundColor: "#dad9d7", paddingVertical: 10, borderRadius: 5 }}>
                                        <View style={{ alignItems: "center" }}>
                                            <Text style={{ fontSize: responsiveFontSize(1.85), color: "#ff6015", fontWeight: "500" }}>
                                                {item.title}
                                            </Text>
                                        </View>
                                        <View style={{ alignItems: "center", paddingHorizontal: 4, paddingTop: 5 }}>
                                            <Text style={{ fontSize: responsiveFontSize(1.85), color: "#302c51", fontWeight: "300" }}>
                                                {item.note}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>

                {/* Directors */}

                <View style={{ width: "100%", marginTop: 15 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2.8), fontWeight: "700", borderBottomWidth: 0.65, width: "40%", textAlign: "center", borderColor: "#302c51", paddingBottom: 5  }}>Directors</Text>
                    </View>
                </View>

                <View style={{ marginTop: 13 }}>
                    <View style={{
                        width: "100%",
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: "row",
                        gap: 5,
                        // marginHorizontal:5
                    }}>
                       <View style={{ backgroundColor: "#302c51", borderRadius: 10, height: 180 }}>
                            <View style={{}}>
                            <Image
                                source={require('../assets/one.jpeg')}
                                resizeMode="stretch"
                                style={{
                                    height: 120,
                                    width: 110,
                                    // borderRadius:10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    borderBottomLeftRadius: 5,
                                    borderBottomRightRadius: 5
                                }} />

                            <Text style={{ color: "#fff", alignSelf: "center", fontSize: responsiveFontSize(1.65), paddingTop: 16 }}>Golap Saikia</Text>

                            </View>
                            <View>
                            <Text style={{  alignSelf: "center", fontSize: responsiveFontSize(1.2), paddingTop: 10 }}>Self Employed</Text>
                            </View> 
                       
                        </View>

                         <View style={{ backgroundColor: "#302c51", borderRadius: 10, height: 180 }}>
                            <View>
                            <Image
                                source={require('../assets/two.jpeg')}
                                resizeMode="stretch"
                                style={{
                                    height: 120,
                                    width: 110,
                                    // borderRadius:10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    borderBottomLeftRadius: 5,
                                    borderBottomRightRadius: 5
                                }} />

                            <Text style={{ color: "#fff", alignSelf: "center", fontSize: responsiveFontSize(1.65), paddingTop: 5 }}>Dipali Prabha</Text>
                            <Text style={{ color: "#fff", alignSelf: "center", fontSize: responsiveFontSize(1.65), }}>Rabha Saikia</Text>
                            </View>

                            <View style={{}}>
                            <Text style={{  alignSelf: "center", fontSize: responsiveFontSize(1.2), paddingTop: 5 }}>Self Employed</Text>
                            </View>

                        </View>

                        <View style={{ backgroundColor: "#302c51", borderRadius: 10, height: 180 }}>
                            <View style={{}}>
                            <Image
                                source={require('../assets/three.jpeg')}
                                resizeMode="stretch"
                                style={{
                                    height: 120,
                                    width: 110,
                                    // borderRadius:10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    borderBottomLeftRadius: 5,
                                    borderBottomRightRadius: 5
                                }} />

                            <Text style={{ color: "#fff", alignSelf: "center", fontSize: responsiveFontSize(1.65), paddingTop: 16}}>Gayatri Saikia</Text>
                            </View>
                            <View style={{}}>
                            <Text style={{  alignSelf: "center", fontSize: responsiveFontSize(1.2), paddingTop: 10 }}>Self Employed</Text>
                            </View>
                        </View>



                    </View>
                </View>






                <View style={{ marginBottom: 10 }}></View>
            </ScrollView>


        </View>
    )
}

export default About

const styles = StyleSheet.create({})