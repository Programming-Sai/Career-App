import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated } from 'react-native';

const ProfileScreen = () => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const skills = ['Git', 'Bash', 'Python', 'JS', 'CSS'];
    
  return (
    <View style={styles.container} >

        <Animated.View style={[styles.profileBox, {
            height: scrollY.interpolate({
                inputRange: [0, 200],  // Scroll range
                outputRange: ['40%', '13%'],  // Scale range (1x to 2x)
                extrapolate: 'clamp',
            }),
        }]}>
            <Animated.Image source={require('../assets/BG.jpg')} style={[styles.profilePicture,
            {
                transform: [
                {
                    scale: scrollY.interpolate({
                    inputRange: [0, 200],  // Scroll range
                    outputRange: [1, 0.3],  // Scale range (1x to 2x)
                    extrapolate: 'clamp',
                    }),
                },
                {
                    translateX: scrollY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [0, -450],  // Rotate from 0 to 360 degrees
                    extrapolate: 'clamp',
                    }),
                },
                {
                    translateY: scrollY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [0, -200],  // Rotate from 0 to 360 degrees
                    extrapolate: 'clamp',
                    }),
                },
                ],
            },]}/>
            <Animated.Text style={[styles.header, 
            {
                transform:[
                    {
                        translateX: scrollY.interpolate({
                            inputRange: [0, 200],
                            outputRange: [0, -50],  
                            extrapolate: 'clamp',
                        }),
                    },{
                        translateY: scrollY.interpolate({
                            inputRange: [0, 200],
                            outputRange: [0, -170],  
                            extrapolate: 'clamp',
                        }),
                    },
                ],
                fontSize: scrollY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [25, 18],  
                    extrapolate: 'clamp',
                }),
                letterSpacing: scrollY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [3, 0],  
                    extrapolate: 'clamp',
                }),
            }
                ]}>Jon Snow</Animated.Text>
            <View style={styles.skillContainer}>
                <Animated.Text style={[styles.skill, 
            {
                transform:[
                    {
                        translateX: scrollY.interpolate({
                            inputRange: [0, 200],
                            outputRange: [0, 0],  
                            extrapolate: 'clamp',
                        }),
                    },{
                        translateY: scrollY.interpolate({
                            inputRange: [0, 200],
                            outputRange: [0, -190],  
                            extrapolate: 'clamp',
                        }),
                    },
                ],
                fontSize: scrollY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [15, 10],  
                    extrapolate: 'clamp',
                }),
                
            }
                ]}>
                    {skills.map((skill, i, arr) => (i < arr.length - 1 ? skill + '  ●  ' : skill))}
                </Animated.Text>
            </View>
        </Animated.View>

        <Animated.ScrollView contentContainerStyle={styles.body} onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }  
        )}
        scrollEventThrottle={16} 
        >
        {/* <View style={styles.body}> */}
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
        </Animated.ScrollView>
       

      
      
    </View>
  );
};

const styles = StyleSheet.create({

    container:{
        flexGrow:1,
        alignContent:'center',
        paddingTop:'10%'
    },
    profilePicture:{
        width:180,
        height:180,
        borderRadius:100
    },
    profileBox:{
        
        display:'flex',
        alignItems:'center'
    },
    header:{
        fontSize:25,
        fontWeight:'bold',
        letterSpacing:3,
    },
    skillContainer:{
        display:'flex',
        flexDirection:'row',
    },
    skill:{
        opacity:0.5,
        fontSize:15,
        marginTop:'5%'
    },
    body:{
        marginTop:'10%',
        paddingHorizontal:20,
        paddingBottom:'40%',
        // maxHeight: 200,
    }

});

export default ProfileScreen;
