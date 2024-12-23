import { StyleSheet, Text, View, StatusBar,Image } from 'react-native'
import React,{useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
     navigation.navigate("Home")    
    },2000)
  })
  return (
    <View style={{}}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#fff" translucent={false} />
      <View style={{ height: '100%',alignItems:'center',justifyContent:"center",backgroundColor:"#fff"  }}>
        <Image
          source={require('../assets/logo.png')}
          style={{height:150,width:150}}
        />

        <View>
          <Text style={{
            color:"#F29D38",
            fontSize:responsiveFontSize(2.1),
            // fontStyle: 'italic',
            fontWeight:"400"
        }}>
          
          JYOTIRBINDU FOUNDATION
          </Text>
        </View>
      </View>
     </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})