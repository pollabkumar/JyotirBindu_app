          


//             <Text
//             style={{
//               color: '#000',
//               fontSize: 15,
//               paddingLeft: 9,
//               paddingTop: 5,
//             }}>
//             Gender
//           </Text>
//           <View style={{ paddingTop: 4 }}>
//             <RadioGroup
//               radioButtons={radioButtons}
//               onPress={onPressRadioButton}
//               layout="row"
//               color="#000"

//             />
//           </View>
// <View style={{ margin: 10 }}>
//             <Text
//               style={{
//                 color: '#000',
//                 fontSize: 15,
//                 paddingTop: 4,
//               }}>
//               Doctors Address
//             </Text>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 width: '95%',
//                 borderBottomWidth: 0.29,
//                 borderBottomColor: "#d6d8da",
//                 marginTop: 5,
//               }}>
//               <View style={{ width: '70%', }}>
//                 <Text style={{}}>
//                 </Text>
//               </View>


//               <ActivityIndicator
//                 size="small"
//                 color="#7AAA4B"
//                 animating={show}
//               />


//               <View style={{ width: '30%', marginBottom: 5 }}>
//                 <TouchableOpacity
//                   onPress={() => mainn()}
//                   style={{
//                     borderRadius: 20,
//                     padding: 10,
//                     alignItems: 'center',
//                     backgroundColor: '#7AAA4B',
//                   }}>
//                   <Text style={{ fontSize: 10, color: '#fff', }}>GET LOCATION</Text>
//                 </TouchableOpacity>
//               </View>


//             </View>
//           </View>

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
                Upload Profile image
              </Text>
              <TouchableOpacity
                onPress={handdlechange}
                style={{
                  borderWidth: 1,
                  borderColor: '#e3e3e3',
                  margin: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  backgroundColor: '#7AAA4B',
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
                    style={{ height: 100, width: 80 }}
                  />
                </View>
              ) : (
                <View style={{}}>
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require('../../assets/n.jpg')}
                  />
                </View>
              )}
            </View>
          </View>