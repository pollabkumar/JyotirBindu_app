import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Back from 'react-native-vector-icons/Ionicons';
import Bankk from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CheckBox from '@react-native-community/checkbox';
const Form = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [photo, setPhotoURI] = useState(false)
    const handdlechange = () => {
        const options = {
            noData: true,
        };
        launchImageLibrary(options, response => {
            if (response.assets) {
                console.log(response, 'jdkas');
                setPhotoURI(response.assets[0].uri);
            }
        });
    };
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
                    height: 50,
                    alignItems: "center"
                }}>
                <View style={{ flexDirection: 'row', justifyContent: "center", }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: "center", paddingLeft: responsiveWidth(1), }}>
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
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", paddingLeft: responsiveWidth(.68) }}>
                        <Text
                            style={{
                                fontSize: responsiveFontSize(2.1),
                                color: "#fff",
                                fontWeight: '400',
                                alignItems: "center"
                            }}>
                            Membership Form
                        </Text>
                    </View>

                </View>


            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 10, marginTop: 5 }}>

                    <View style={{ width: "100%" }}>


                        <View style={{ width: "100%", alignItems: "center", backgroundColor: "#dfdfdf", paddingVertical: 10, borderRadius: 10 }}>
                            <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2), fontWeight: "600" }}>
                                Membership Form For Nominal Members
                            </Text>
                            <View style={{ paddingTop: 5, paddingHorizontal: 5, }}>
                                <Text style={{ color: "#302c51", fontSize: responsiveFontSize(1.5) }}>
                                    I hereby request to become a Nominal Member of your Trust and remit herewith Rs. 1000/- as
                                    a membership fees and Rs. 10.00 towards form charge, I undertake to accept and abide by all
                                    rules and regulations stated in Bye Laws of the Trust a applicable for Nominal Members with
                                    such notification and made from time to time.
                                </Text>
                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Applicant’s Full Name
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Name"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Father’s/Husband Name
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Father’s/Husband Name"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Date Of Birth
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Date Of Birth"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>


                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Permanent Address
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Permanent Address"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Post Office
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Post Office"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Police Station
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Police Station"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Pin
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Pin Number"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    District
                                </Text>
                                <TextInput
                                    placeholder="Enter Your District"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    State
                                </Text>
                                <TextInput
                                    placeholder="Enter Your State"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>




                        {/* checkbox */}
                        <View style={{ flexDirection: "row", paddingTop: 10 }}>

                            <Text style={{ color: "#000" }}>Check if Permanent and Present/Communication Address are Same</Text>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                tintColors={{ color: "#000" }}
                                style={{ color: "#000" }}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                        </View>


                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Permanent Address
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Permanent Address"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Post Office
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Post Office"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Police Station
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Police Station"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>

                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Pin
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Pin Number"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    District
                                </Text>
                                <TextInput
                                    placeholder="Enter Your District"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    State
                                </Text>
                                <TextInput
                                    placeholder="Enter Your State"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Occupation
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Occupation"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Educational Qualification
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Educational Qualification"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Mobile Number
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Mobile Number"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>


                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Email
                                </Text>
                                <TextInput
                                    placeholder="Enter Your Email"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Nominee
                                </Text>
                                <TextInput
                                    placeholder="Enter Nominee"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Age
                                </Text>
                                <TextInput
                                    placeholder="Enter Age "
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Relationship
                                </Text>
                                <TextInput
                                    placeholder="Enter Relationship  "
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Address
                                </Text>
                                <TextInput
                                    placeholder="Enter Address"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Contact Number
                                </Text>
                                <TextInput
                                    placeholder="Enter Contact Number "
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        {/* bank */}

                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 25 }}>
                            <View style={{}}>
                                <Bankk name='bank'
                                    style={{
                                        color: "#fff", backgroundColor: "#302c51",
                                        paddingHorizontal: 5,
                                        paddingVertical: 5,
                                        fontSize: responsiveFontSize(1.55),
                                        borderRadius: 40
                                    }}
                                />
                            </View>

                            <View style={{ paddingLeft: 5 }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), }}>Bank Details</Text>
                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Name of the Bank
                                </Text>
                                <TextInput
                                    placeholder="Enter Name of the Bank "
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Branch
                                </Text>
                                <TextInput
                                    placeholder="Enter Branch Name "
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Account Number
                                </Text>
                                <TextInput
                                    placeholder="Enter Account Number"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>


                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    IFSC Code
                                </Text>
                                <TextInput
                                    placeholder="Enter IFSC Code"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    MICR Code
                                </Text>
                                <TextInput
                                    placeholder="Enter MICR Code"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Date
                                </Text>
                                <TextInput
                                    placeholder="Enter Date"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ paddingTop: responsiveHeight(2) }}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400", fontStyle: 'italic' }}>
                                    Place
                                </Text>
                                <TextInput
                                    placeholder="Enter Place"
                                    placeholderTextColor={'#000'}
                                    style={{
                                        width: '100%',
                                        borderBottomWidth: 0.29,
                                        borderBottomColor: "#000",
                                        marginTop: 5,

                                        padding: 0,
                                        fontSize: responsiveFontSize(1.85),
                                        color: '#000',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                />

                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 20,
                            }}>
                            <View>
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: 15,
                                        paddingLeft: 9,
                                        paddingTop: 4,
                                    }}>
                                    Upload image
                                </Text>
                                <TouchableOpacity
                                    onPress={handdlechange}
                                    style={{
                                        borderWidth: 1,
                                        borderColor: '#e3e3e3',
                                        margin: 10,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        backgroundColor: "#302c51",
                                        paddingHorizontal: 1,
                                        paddingVertical: 1,
                                    }}>
                                    <Text style={{ color: '#fff', fontSize: 13, padding: 5 }}>
                                        Choose File
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                {photo ? (
                                    <View>
                                        <Image
                                            source={{ uri: photo }}
                                            style={{ height: 100, width: 100,borderRadius:10 }}
                                        />
                                    </View>
                                ) : (
                                    <View style={{}}>
                                        <Image
                                            style={{ height: 100, width: 100 ,borderRadius:10}}
                                            source={require('../assets/n.jpg')}
                                        />
                                    </View>
                                )}
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    bottom: 2,
                    width: "100%",
                    paddingHorizontal: 10
                }}>
                <TouchableOpacity
                    // onPress={() => navigation.navigate('ThankyouPage')}
                    style={{
                        backgroundColor: "#302c51", borderRadius: 15,
                        padding: 10,
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "center",
                    }}>
                    <Text style={{ color: '#fff', fontSize: 17, paddingHorizontal: 35 }}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Form

const styles = StyleSheet.create({})