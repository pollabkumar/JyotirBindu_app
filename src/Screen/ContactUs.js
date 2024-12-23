import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Back from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Location from 'react-native-vector-icons/dist/MaterialIcons';
import Call from 'react-native-vector-icons/dist/MaterialIcons';
import Email from 'react-native-vector-icons/dist/Fontisto';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const ContactUs = () => {
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
              style={{ borderRadius: 20, justifyContent: "center", textAlign: "center", paddingHorizontal: 5, paddingVertical: 5 }}
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
              Contact Info
            </Text>
          </View>

        </View>


      </View>

      <ScrollView>

        <View style={{ width: "100%", paddingTop: 5, paddingHorizontal: 10,paddingTop:7}}>
          <View style={{}}>
             <Text style={{color: "#302c51", fontSize: responsiveFontSize(2.2), fontWeight: "600",}}>Jyotirbindu Foundation</Text>
          </View>
          <Text style={{ color: "#302c51", fontSize: responsiveFontSize(1.75), fontWeight: "400", textAlign: "justify",paddingTop:7 }}>
          Welcome to JYOTIRBINDU FOUNDATION! We are a company based in Assam, dedicated to making a positive impact on society. Our mission is to improve the lives of the underprivileged and contribute to the overall welfare of the community.
          </Text>
        </View>

        <View style={{paddingTop:10}}>
          <View style={{ width: "100%", paddingHorizontal: 10, }}>
            <View style={{ flexDirection: "row", paddingTop: 5, alignItems: "center" }}>
              <Location name='location-on'
                style={{ color: "#fff", fontSize: responsiveFontSize(2.2), backgroundColor: "#302c51", paddingHorizontal: 5, paddingVertical: 5, borderRadius: 20 }}
              />
              <Text
                style={{ color: "#302c51", fontSize: responsiveFontSize(1.85), paddingLeft: 5, fontWeight: "600" }}>
                LOCATION
              </Text>
            </View>

            <View style={{}}>
              <Text
                style={{ color: "#302c51", fontSize: responsiveFontSize(1.85), paddingTop: 5, paddingLeft: 12, fontWeight: "400" }}>
                H No.3, Ganga Path, Anandapur, Hengrabari, Guwahati, 781006 Assam
              </Text>
            </View>
          </View>
        </View>


        <View style={{}}>
          <View style={{ width: "100%", paddingHorizontal: 10, }}>
            <View style={{ flexDirection: "row", paddingTop: 15, alignItems: "center" }}>
              <Call name='wifi-calling-3'
                style={{ color: "#fff", fontSize: responsiveFontSize(2.1), backgroundColor: "#302c51", paddingHorizontal: 5, paddingVertical: 5, borderRadius: 20 }}
              />
              <Text
                style={{ color: "#302c51", fontSize: responsiveFontSize(1.85), paddingLeft: 5, fontWeight: "600" }}>
                CALL US
              </Text>
            </View>

            <View style={{}}>
              <Text
                style={{ color: "#302c51", fontSize: responsiveFontSize(2), paddingTop: 5, paddingLeft: 12, fontWeight: "400" }}>
                +91 8638455882
              </Text>
            </View>
          </View>
        </View>

        <View style={{}}>
          <View style={{ width: "100%", paddingHorizontal: 10, }}>

            <View style={{ flexDirection: "row", paddingTop: 15, alignItems: "center" }}>
              <Email name='email'
                style={{ color: "#fff", fontSize: responsiveFontSize(2), backgroundColor: "#302c51", paddingHorizontal: 5, paddingVertical: 5, borderRadius: 20 }}
              />
              <Text
                style={{ color: "#302c51", fontSize: responsiveFontSize(1.85), paddingLeft: 5, fontWeight: "600" }}>
                EMAIL US
              </Text>
            </View>

            <View style={{}}>
              <Text
                style={{ color: "#302c51", fontSize: responsiveFontSize(2), paddingTop: 5, paddingLeft: 12, fontWeight: "400" }}>
                jyotirbindufoundation23@gmail.com
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 40, marginHorizontal: 10 }}>
          <View style={{ width: "100%", backgroundColor: "#302c51", borderRadius: 15, paddingHorizontal: 10 }}>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Text style={{ color: "#fff", fontSize: responsiveFontSize(2.15), paddingLeft: 5, fontWeight: "700" }}>Let’s Talk ! </Text>
            </View>


            <View style={{ paddingTop: responsiveHeight(1) }}>

              <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontStyle: 'italic',fontWeight: "400" }}>
                Name
              </Text>
              <TextInput
                placeholder="Enter Your Name"
                placeholderTextColor={"#fff"}
                style={{
                  width: '100%',
                  borderBottomWidth: 0.29,
                  borderBottomColor: "#fff",
                  marginTop: 5,

                  padding: 0,
                  fontSize: responsiveFontSize(1.85),
                  color: '#fff',
                  fontWeight: '200',
                  fontStyle: 'italic'
                }}
              />

            </View>


            <View style={{ paddingTop: 15 }}>
              <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                Mobile Number
              </Text>
              <TextInput
                placeholder="Enter Your Mobile Number"
                placeholderTextColor={"#fff"}
                style={{
                  width: '100%',
                  borderBottomWidth: 0.29,
                  borderBottomColor: "#fff",
                  marginTop: 5,

                  padding: 0,
                  fontSize: responsiveFontSize(1.85),
                  color: '#fff',
                  fontWeight: '200',
                  fontStyle: 'italic'
                }}
              />

            </View>

            <View style={{ paddingTop: 15 }}>
              <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                Email
              </Text>
              <TextInput
                placeholder="Enter Email Id"
                placeholderTextColor={"#fff"}
                style={{
                  width: '100%',
                  borderBottomWidth: 0.29,
                  borderBottomColor: "#fff",
                  marginTop: 5,

                  padding: 0,
                  fontSize: responsiveFontSize(1.85),
                  color: '#fff',
                  fontWeight: '200',
                  fontStyle: 'italic'
                }}
              />

            </View>


            <View style={{ paddingTop: 15 }}>
              <Text style={{ color: "#fff", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                Remark
              </Text>
              <TextInput
                placeholder="write something"
                placeholderTextColor={"#fff"}
                style={{
                  width: '100%',
                  borderBottomWidth: 0.29,
                  borderBottomColor: "#fff",
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
                // marginTop: responsiveHeight(3),
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                paddingVertical: 18

              }}>
              <TouchableOpacity
                // onPress={() => navigation.navigate('Login')}
                style={{
                  backgroundColor: '#F29D38', borderRadius: 15,
                  padding: 7,


                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",

                }}>
                <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), paddingHorizontal: 35 }}>Submit</Text>
              </TouchableOpacity>
            </TouchableOpacity>



          </View>
        </View>

        <View style={{paddingBottom:50}}></View>

      </ScrollView>
    </View>
  )
}

export default ContactUs

const styles = StyleSheet.create({})