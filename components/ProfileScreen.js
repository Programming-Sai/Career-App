import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Fragment } from 'react-native';

const ProfileScreen = () => {
    // const skills = ['Skill One', 'Skill Two', 'Skill Three'];
    const skills = ['Git', 'Bash', 'Python', 'JS', 'CSS'];
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileBox}>
        <Image source={require('../assets/BG.jpg')} style={styles.profilePicture}/>
        <Text style={styles.header}>Jon Snow</Text>
        <View style={styles.skillContainer}>
            <Text style={styles.skill}>
                {skills.map((skill, i, arr) => (i < arr.length - 1 ? skill + '  ●  ' : skill))}
            </Text>
        </View>
        <View style={styles.body}>
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
        </View>
       
      </View>
      
      
      {}
    </ScrollView>
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
        // borderWidth:1,
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
        paddingBottom:'20%'
    }

});

export default ProfileScreen;
