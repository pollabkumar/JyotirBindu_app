import React, { useRef, useState, } from 'react';
import {
    Button,
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    FlatList
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Menuu from 'react-native-vector-icons/Feather';
import Viewww from 'react-native-vector-icons/AntDesign';
import Ribbon from 'react-native-vector-icons/FontAwesome5';
import { SliderBox } from "react-native-image-slider-box";
import { data, imagess, role } from '../demodata/Demodata';
import { useNavigation } from '@react-navigation/native';

import HeaderOnly from '../Other/Header';


const deviceheight = Dimensions.get('window').height
const devicewidth = Dimensions.get('window').width
// #302c51
const Home = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const drawer = useRef(null);
    const navigation = useNavigation();

    // const navigationView = () => (
    //     <View style={[styles.container, styles.navigationContainer]}>
    //         <View style={{
    //             flexDirection: "column",
    //             alignItems: 'center',
    //             paddingVertical: 10,
    //             paddingHorizontal: 8,
    //             borderBottomWidth: 1,
    //             borderBottomColor: "#fe6000",
    //             width: "100%",
    //         }}>
    //             <View
    //                 style={{
    //                     borderRadius: 50,
    //                     overflow: 'hidden',
    //                     marginLeft: 3
    //                 }}>
    //                 <Image
    //                     style={{ height: 70, width: 70 }}
    //                     // source={require('./assets/user.jpg')}
    //                     // source={require('../assets/logo.png')}

    //                 />
    //             </View>
    //             <View style={{ padding: 5 }}>
    //                 <View>
    //                     <Text style={{ color: "#00763a", fontSize: responsiveFontSize(2), fontWeight: "400" }}>JYOTIRBINDU fOUNDATION</Text>
    //                 </View>

    //             </View>

    //         </View>




    //         <View style={{ backgroundColor: '#fff', marginLeft: 5 }}>
    //             <View style={styles.menuBlock}>



    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('Dashboard')}
    //             style={styles.eachMenu}>
    //             <Homee name='home'
    //               style={{fontSize:responsiveFontSize(2)}}
    //               color='#ff6000'
    //             />
    //             <Text style={styles.menuText}>Home</Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('Services')}
    //             style={styles.eachMenu}>
    //             <Servicess name='feature-search-outline'
    //               style={{fontSize:responsiveFontSize(2)}}
    //               color='#ff6000'
    //             />
    //             <Text style={styles.menuText}>Service</Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('Gallery')}
    //             style={styles.eachMenu}>
    //             <Servicess name='view-gallery-outline'
    //               style={{fontSize:responsiveFontSize(2)}}
    //               color='#ff6000'
    //             />
    //             <Text style={styles.menuText}>Gallery</Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('About')}
    //             style={styles.eachMenu}>
    //             <Aboutus name='receipt-outline'
    //               style={{fontSize:responsiveFontSize(2)}}
    //               color='#ff6000'
    //             />
    //             <Text style={styles.menuText}>About</Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('TermsandCondition')}
    //             style={styles.eachMenu}>
    //             <Terms name='file-text-o'
    //               style={{fontSize:responsiveFontSize(2)}}
    //               color='#ff6000'
    //             />
    //             <Text style={styles.menuText}>Terms & Conditions</Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('PrivacyPolicy')}
    //             style={styles.eachMenu}>
    //             <Privacy name='privacy-tip'
    //               style={{fontSize:responsiveFontSize(2)}}
    //               color='#ff6000'
    //             />
    //             <Text style={styles.menuText}>Privacy Policy</Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('Disclaimer')}
    //             style={styles.eachMenu}>
    //             <Disclaimerr name='warning'
    //               style={{fontSize:responsiveFontSize(2)}}
    //               color='#ff6000'
    //             />
    //             <Text style={styles.menuText}>Disclaimer</Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('Cancellation')}
    //             style={styles.eachMenu}>
    //             <Cancellation name='free-cancellation'
    //               style={{fontSize:responsiveFontSize(2)}}
    //               color='#ff6000'
    //             />
    //             <Text style={styles.menuText}>Cancellation</Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('ReturnAndRefund')}
    //             style={styles.eachMenu}>
    //             <Refunnd name='cash-refund'
    //               style={{fontSize:responsiveFontSize(2)}}
    //               color='#ff6000'
    //             />
    //             <Text style={styles.menuText}>Return And Refund</Text>
    //           </TouchableOpacity>


    //           <TouchableOpacity
    //             onPress={() => navigation.navigate('ContactUs')}
    //             style={styles.eachMenu}>
    //             <Contactt name='contacts'
    //               style={{fontSize:responsiveFontSize(2)}}
    //               color='#ff6000'
    //             />
    //             <Text style={styles.menuText}>Contact Us</Text>
    //           </TouchableOpacity>




    //             </View>
    //         </View>
    //     </View>
    // );

    const image = [
        require('../assets/banner1.jpeg'),
        require('../assets/banner2.jpeg'),
        require('../assets/banner3.jpeg'),
        // require('../assets/Rectangle.png'),
    ]




    return (


        <View style={{ flex: 1, backgroundColor: "#fff", }}>

            <StatusBar
                animated={true}
                backgroundColor="#302c51"
                barStyle={statusBarStyle}
            />
            <HeaderOnly name="Jyotirbindu Foundation" />

            <ScrollView>

                <SliderBox
                    images={image}
                    // images={imaage}
                    autoplauInterval={2000}
                    autoplay
                    circleLoop
                    imageLoadingColor='#ff6000'
                    dotColor="#302c51"
                    resizeMethod={'resize'}
                    resizeMode={'contain'}
                    ImageComponentStyle={{ borderRadius: 10, width: "96%", marginTop: 2, }}
                />
                {/* our Role */}


                <View style={{ width: "100%", marginTop: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2.8), fontWeight: "700", }}>Concern About Our Role</Text>
                    </View>
                </View>


                <View style={{ marginTop: 10 }}>

                    <FlatList
                        data={role}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (

                                <View style={{}}>
                                    <View style={{
                                        width: (devicewidth) - 16,
                                        height: 180,
                                        // backgroundColor: "#d8d8d8",#02532a
                                        backgroundColor: "#02532a",
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        marginHorizontal: 3,
                                        // marginRight:40
                                    }}>
                                        <View style={{ alignItems: "center", paddingVertical: 5, }}>
                                            <Text style={{ color: "#fff", fontSize: responsiveFontSize(2.1), fontWeight: "400", borderBottomWidth: 0.65, width: "50%", textAlign: "center", borderColor: "#fff" }}>{item.title}</Text>
                                        </View>
                                        <View style={{ alignItems: "center", justifyContent: "center", paddingVertical: 10 }}>
                                            <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.85), fontWeight: "300", textAlign: "justify" }}>{item.note}</Text>
                                        </View>
                                    </View>
                                </View>


                            )
                        }}
                    />
                </View>


                {/* causes */}

                <View style={{ width: "100%", paddingHorizontal: 10, marginTop: 15, alignItems: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ribbon name="ribbon" style={{ color: "#ff6015", fontSize: responsiveFontSize(1.65) }} />
                        <Text style={{ color: "#ff6015", paddingLeft: 5, fontSize: responsiveFontSize(1.65),fontWeight:"500" }}>Our Causes</Text>
                    </View>
                    <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2.8), fontWeight: "700", paddingTop: 5 }}>The Causes We Care About</Text>
                </View>


                <View style={{ marginTop: 10 }}>

                    <FlatList
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (

                                <View style={{ marginTop: 6 }}>

                                    <View style={{
                                        width: (devicewidth / 2) - 14,
                                        height: 300,
                                        backgroundColor: "#d8d8d8",
                                        marginHorizontal: 7,
                                        borderRadius: 10,

                                    }}>

                                        <Image
                                            source={item.image}
                                            style={{ height: 130, width: "100%", borderRadius: 10 }}
                                            resizeMode="cover"
                                        />
                                        <View style={{ paddingTop: 4, alignItems: "center" }}>
                                            <Text style={{ color: "#302c51", fontSize: responsiveFontSize(2), fontWeight: "700", fontSize: responsiveFontSize(2), }}>{item.title}</Text>
                                        </View>
                                        <View style={{ paddingTop: 4, alignItems: "center" }}>
                                            <Text style={{ color: '#000', fontSize: responsiveFontSize(1.85), fontWeight: "400", }}>{item.headtitle}</Text>
                                        </View>
                                        <View style={{ paddingTop: 7, paddingLeft: 5, alignItems: "center" }}>
                                            <Text style={{ color: '#000', fontSize: responsiveFontSize(1.75), fontWeight: "300",textAlign:"justify"}}>{item.description}</Text>
                                        </View>


                                        {/* <View></View> */}

                                        <View
                                            style={{
                                                alignItems: "center",
                                                justifyContent: "center",
                                                position: "absolute",
                                                bottom: 7,
                                                width: "100%",
                                                paddingHorizontal: 5
                                            }}>
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate('OurCausesDetails', { data: item })}
                                                style={{
                                                    backgroundColor: "#302c51",
                                                    borderRadius: 15,
                                                    // padding: 10,
                                                    alignItems: "center",
                                                    width: "100%",
                                                    justifyContent: "space-between",
                                                    paddingVertical: 5,
                                                    flexDirection: "row",
                                                    paddingHorizontal: 10,

                                                }}>
                                                <View style={{ alignItems: "center", }}>
                                                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.55), fontWeight: "300" }}>View more</Text>
                                                </View>
                                                <View style={{ backgroundColor: "#fff", paddingHorizontal: 2, borderRadius: 50, paddingVertical: 2, alignItems: "center", }}>
                                                    <Viewww name='arrowright' style={{ color: "#302c51", fontSize: responsiveFontSize(1.5) }} />
                                                </View>

                                            </TouchableOpacity>
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
                            <View style={{}}>
                            <Text style={{  alignSelf: "center", fontSize: responsiveFontSize(1.2),
                             paddingTop: 10
                              }}>Self Employed</Text>
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

                {/* lkmkljkl */}



                <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                    <View style={{ width: "100%", flexDirection: "row", gap: 5 }}>


                        <TouchableOpacity
                            onPress={() => navigation.navigate('DonateForm')}
                            style={{ backgroundColor: '#ff6000', width: "32%", alignItems: "center", borderRadius: 7 }}
                        >
                            <Text style={{ color: "#fff", paddingVertical: 10 }}>Donate Now</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                            style={{ backgroundColor: '#06ac58', width: "32%", alignItems: "center", borderRadius: 7 }}
                        >
                            <Text style={{ color: "#fff", paddingVertical: 10 }}>Membership</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Reachus')}
                            style={{ backgroundColor: '#ff6000', width: "32%", alignItems: "center", borderRadius: 7 }}>
                            <Text style={{ color: "#fff", paddingVertical: 10 }}>Reach Us!</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ marginBottom: 10 }}></View>



            </ScrollView>


        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    navigationContainer: {
        // backgroundColor: '#ecf0f1',
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
    },
    menuBlock: { paddingTop: 10 },
    eachMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingVertical: 8,

    },
    menuText: {
        fontSize: responsiveFontSize(1.85),
        paddingLeft: 10,
        fontWeight: '400',
        color: '#ff6000',
    },
});