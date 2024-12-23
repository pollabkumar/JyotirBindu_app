import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import OurCausesDetails from '../Screen/OurCausesDetails';
// import Reachus from '../forms/Reachus';
// import About from '../Screen/About';
// import Services from '../Screen/Services';
// import Login from '../account/Login';
// import Registration from '../account/Registration';
// import Form from '../membersshipform/Form';
// import DonateForm from '../donatenow/DonateForm';
// import ContactUs from '../Screen/ContactUs';
// import TermsandConditions from '../Screen/TermsandConditions';
// import Gallery from '../Screen/Gallery';
// import PrivacyPolicy from '../Screen/PrivacyPolicy';
// import Disclaimer from '../Screen/Disclaimer';
// import Cancellation from '../Screen/Cancellation';
// import Returnandrefund from '../Screen'
import Home from '../Screen/Home';
import Cancellation from '../Screen/Cancellation';
import Disclaimer from '../Screen/Disclaimer';
import PrivacyPolicy from '../Screen/PrivacyPolicy';
import Gallery from '../Screen/Gallery';
import TermsandConditions from '../Screen/TermsandConditions';
import ContactUs from '../Screen/ContactUs';
import Services from '../Screen/Services';
import DonateForm from '../donatenow/DonateForm';
import Registration from '../account/Registration';
import Login from '../account/Login';
import OurCausesDetails from '../Screen/OurCausesDetails';
import Form from '../membersshipform/Form';
import Reachus from '../forms/Reachus';
import About from '../Screen/About';
import ReturnAndRefund from '../Screen/ReturnAndRefund';
import SplashScreen from './SplashScreen';
const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false

      }}>
        <Stack.Screen name="DonateForm" component={DonateForm} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReturnAndRefund" component={ReturnAndRefund} />
        <Stack.Screen name="Cancellation" component={Cancellation} />
        <Stack.Screen name="Disclaimer" component={Disclaimer} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="TermsandCondition" component={TermsandConditions} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="OurCausesDetails" component={OurCausesDetails} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Reachus" component={Reachus} />
        <Stack.Screen name="About" component={About} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})