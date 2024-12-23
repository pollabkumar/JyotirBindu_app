import React, { useState, useMemo } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Drawer from './drawer';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Wallet from 'react-native-vector-icons/MaterialIcons';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get('window')
const HeaderOnly = props => {
  const navigation = useNavigation();
  const [drawer, setdrawer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState();
  // const memoouse=useMemo(function oneslide(){
  //  return setdrawer(!drawer)
  // },[drawer])
  return (
    <>

      <View style={styles.headerArea}>

        <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
          <TouchableOpacity
            onPress={() => setdrawer(true)}
            style={{ width: 27, height: 25, justifyContent: "center" }}>
            <Icon name="menu" size={21} color="#fff" />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: responsiveFontSize(2.20),
                zIndex: 0,
                justifyContent: 'center',
                fontWeight: "400",

              }}>

              {props && props.name ? props.name : ''}
            </Text>
          </View>

        </View>

        <View style={{ flexDirection: "row"}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DonateForm')}
            style={{
              backgroundColor: "#ff6000",
              paddingHorizontal: 10,
              paddingVertical: 3,
              borderRadius: 20
            }}
          >
            <Text style={{
              fontSize: responsiveFontSize(1.40),
              fontWeight: "500",
              fontStyle:"italic"
            }}>Donate Now</Text>
          </TouchableOpacity>
        </View>



        <Drawer drawer={drawer} setdrawer={setdrawer} />

      </View>
    </>
  );
};

export default HeaderOnly;

const styles = StyleSheet.create({
  headerArea: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    // paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: "#302c51",
    elevation: 5,
    position: 'relative',
    zIndex: 20,
    justifyContent: "space-between",
    height: 48
  },
  logo: { width: 130, height: 45, resizeMode: 'stretch' },
  iconHome: { paddingLeft: 15 },
  mainBg: { backgroundColor: '#ddd', height: '85%' },
});
