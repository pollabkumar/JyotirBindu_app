import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  Share
} from 'react-native';
// import History from 'react-native-vector-icons/Octicons';
// import Shared from 'react-native-vector-icons/AntDesign';
// import Search from 'react-native-vector-icons/AntDesign';
// import Kundali from 'react-native-vector-icons/MaterialCommunityIcons';
// import ProfileIcon from 'react-native-vector-icons/dist/FontAwesome';
// import Pricing from 'react-native-vector-icons/MaterialCommunityIcons';
// // import Terms from 'react-native-vector-icons/dist/FontAwesome';
// import Privacy from 'react-native-vector-icons/MaterialIcons';
// import Login from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
// // import Aboutus from 'react-native-vector-icons/dist/Ionicons';
// import Home from 'react-native-vector-icons/dist/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from '../navigation/StackNavigator'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import Homee from 'react-native-vector-icons/AntDesign';
import Servicess from 'react-native-vector-icons/MaterialCommunityIcons';
import Aboutus from 'react-native-vector-icons/dist/Ionicons';
import Terms from 'react-native-vector-icons/dist/FontAwesome';
import Privacy from 'react-native-vector-icons/MaterialIcons';
import Disclaimerr from 'react-native-vector-icons/AntDesign';
import Cancellation from 'react-native-vector-icons/MaterialIcons';
import Refunnd from 'react-native-vector-icons/MaterialCommunityIcons';
import Contactt from 'react-native-vector-icons/AntDesign';
function drawer(props) {
  const navigation = useNavigation();
  const [approveAuth, setApproveAuth] = useState();
  const [data, setdata] = useState('')
  const [apploaddata, setapploaddata] = useState("")
  const [statusBarStyle, setStatusBarStyle] = useState();

  const closeMenu = () => {
    props.setdrawer(false);
  };

  const onMove = () => {
    props.setdrawer(false);
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <>


      {props.drawer && (
        <Animatable.View
          animation="fadeInLeft"
          duration={100}
          style={styles.mainDrawerArea}>
          <View style={styles.drawerArea}>
            <View
              style={{
                // backgroundColor:"#e8ebed",
                flexDirection: "column",
                alignItems: 'center',
                // marginTop: 1,
                paddingVertical: 10,
                paddingHorizontal: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#F29D38",
                width: "100%",
              }}>
              <View
                style={{
                  borderRadius: 50,
                  overflow: 'hidden',
                  marginLeft: 3
                }}>
                <Image
                  style={{ height: 70, width: 70 }}
                  source={require('../assets/logo.png')}
                  // source={require('../assets')}


                /> 
              </View>
              <View style={{ padding: 5 }}>
                <View>
                  <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2), fontWeight: "500" }}>JYOTIRBINDU FOUNDATION</Text>
                </View>
                {/* <View>
                  <Text style={{ color: "#000", fontSize: 13,  }}>sunil@gmail.com</Text>
                </View> */}

              </View>

            </View>


            <View style={{ backgroundColor: '#fff', marginLeft: 5 }}>
              <View style={styles.menuBlock}>
                
                <TouchableOpacity
                  onPress={() => navigation.navigate('Dashboard')}
                  style={styles.eachMenu}>
                  <Homee name='home'
                    size={19}
                    color="#F29D38"
                  />
                  <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  onPress={() => navigation.navigate('Services')}
                  style={styles.eachMenu}>
                  <Servicess name='feature-search-outline'
                    size={19}
                    color="#F29D38"
                  />
                  <Text style={styles.menuText}>Service</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => navigation.navigate('Gallery')}
                  style={styles.eachMenu}>
                  <Servicess name='view-gallery-outline'
                    size={19}
                    color="#F29D38"
                  />
                  <Text style={styles.menuText}>Gallery</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('About')}
                  style={styles.eachMenu}>
                  <Aboutus name='receipt-outline'
                    size={19}
                    color="#F29D38"
                  />
                  <Text style={styles.menuText}>About Us</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('TermsandCondition')}
                  style={styles.eachMenu}>
                  <Terms name='file-text-o'
                    size={19}
                    color="#F29D38"
                  />
                  <Text style={styles.menuText}>Terms & Conditions</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('PrivacyPolicy')}
                  // onPress={onShare}
                  style={styles.eachMenu}>
                  <Privacy name='privacy-tip'
                    size={19}
                    color="#F29D38"
                  />
                  <Text style={styles.menuText}>Privacy Policy</Text>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => navigation.navigate('Disclaimer')}
                  style={styles.eachMenu}>
                  <Disclaimerr name='warning'
                    size={19}
                    color="#F29D38"
                  />
                  <Text style={styles.menuText}>Disclaimer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Cancellation')}
                  style={styles.eachMenu}>
                  <Cancellation name='free-cancellation'
                    size={19}
                    color="#F29D38"
                  />
                  <Text style={styles.menuText}>Cancellation</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('ReturnAndRefund')}
                   style={styles.eachMenu}>
                  <Refunnd
                     name='cash-refund'
                    size={19}
                    color="#F29D38"
                  />
                  <Text style={styles.menuText}>Return And Refund</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('ContactUs')}
                  style={styles.eachMenu}>
                  <Contactt name='contacts'
                    size={19}
                    color="#F29D38"
                  />
                  <Text style={styles.menuText}>Contact Us</Text>
                </TouchableOpacity>

       


              </View>
            </View>

            
          </View>
          <TouchableOpacity
            style={styles.nonDrawer}
            onPress={() => props.setdrawer(false)}></TouchableOpacity>
        </Animatable.View>
      )}
    </>
  );
}

export default drawer;

const styles = StyleSheet.create({
  mainDrawerArea: {
    height: windowHeight,
    backgroundColor: '#f9f9f966',
    width: windowWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    zIndex: 30,
  },
  nonDrawer: { width: '20%', height: '100%' },
  drawerArea: { backgroundColor: '#fff', width: '75%', height: '100%' },
  drawerAreaHead: { backgroundColor: 'blue', minHeight: 110 },
  UserBLock: { flexDirection: 'row', marginTop: -60, paddingLeft: 10 },
  userName: {
    fontWeight: '700',
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
    letterSpacing: 2,
  },
  userEmail: { fontWeight: '500', fontSize: 12, color: '#fff' },
  menuBlock: { paddingTop: 10 },
  eachMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 8,
  },
  menuText: {
    fontSize: responsiveFontSize(1.95),
    paddingLeft: 10,
    fontWeight: '400',
    color: '#F29D38',
  },
});
