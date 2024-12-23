import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sidebar = () => {
    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <View style={{
                flexDirection: "column",
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#fe6000",
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
                        // source={require('./assets/user.jpg')}
                        source={require('../assets/logo.png')}

                    />
                </View>
                <View style={{ padding: 5 }}>
                    <View>
                        <Text style={{ color: "#00763a", fontSize: responsiveFontSize(2), fontWeight: "400" }}>JYOTIRBINDU fOUNDATION</Text>
                    </View>

                </View>
              
            </View>




            <View style={{ backgroundColor: '#fff', marginLeft: 5 }}>
                <View style={styles.menuBlock}>

      
               
              <TouchableOpacity
                onPress={() => navigation.navigate('Dashboard')}
                style={styles.eachMenu}>
                <Homee name='home'
                  style={{fontSize:responsiveFontSize(2)}}
                  color='#ff6000'
                />
                <Text style={styles.menuText}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Services')}
                style={styles.eachMenu}>
                <Servicess name='feature-search-outline'
                  style={{fontSize:responsiveFontSize(2)}}
                  color='#ff6000'
                />
                <Text style={styles.menuText}>Service</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Gallery')}
                style={styles.eachMenu}>
                <Servicess name='view-gallery-outline'
                  style={{fontSize:responsiveFontSize(2)}}
                  color='#ff6000'
                />
                <Text style={styles.menuText}>Gallery</Text>
              </TouchableOpacity>
               
              <TouchableOpacity
                onPress={() => navigation.navigate('About')}
                style={styles.eachMenu}>
                <Aboutus name='receipt-outline'
                  style={{fontSize:responsiveFontSize(2)}}
                  color='#ff6000'
                />
                <Text style={styles.menuText}>About</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('TermsandCondition')}
                style={styles.eachMenu}>
                <Terms name='file-text-o'
                  style={{fontSize:responsiveFontSize(2)}}
                  color='#ff6000'
                />
                <Text style={styles.menuText}>Terms & Conditions</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('PrivacyPolicy')}
                style={styles.eachMenu}>
                <Privacy name='privacy-tip'
                  style={{fontSize:responsiveFontSize(2)}}
                  color='#ff6000'
                />
                <Text style={styles.menuText}>Privacy Policy</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Disclaimer')}
                style={styles.eachMenu}>
                <Disclaimerr name='warning'
                  style={{fontSize:responsiveFontSize(2)}}
                  color='#ff6000'
                />
                <Text style={styles.menuText}>Disclaimer</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Cancellation')}
                style={styles.eachMenu}>
                <Cancellation name='free-cancellation'
                  style={{fontSize:responsiveFontSize(2)}}
                  color='#ff6000'
                />
                <Text style={styles.menuText}>Cancellation</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('ReturnAndRefund')}
                style={styles.eachMenu}>
                <Refunnd name='cash-refund'
                  style={{fontSize:responsiveFontSize(2)}}
                  color='#ff6000'
                />
                <Text style={styles.menuText}>Return And Refund</Text>
              </TouchableOpacity>

      
              <TouchableOpacity
                onPress={() => navigation.navigate('ContactUs')}
                style={styles.eachMenu}>
                <Contactt name='contacts'
                  style={{fontSize:responsiveFontSize(2)}}
                  color='#ff6000'
                />
                <Text style={styles.menuText}>Contact Us</Text>
              </TouchableOpacity>
    
     


                </View>
            </View>
        </View>
    );
  return (
    <Home navigationView={navigationView}/>
  )
}

export default Sidebar

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