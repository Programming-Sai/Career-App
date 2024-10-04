import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, ImageBackground, ScrollView, Platform } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from 'react';


// "andriod clientID": "454437600910-2i6ko04es0q6hj7f1titgprhu82fdtgb.apps.googleusercontent.com"

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    "androidClientId": "454437600910-2i6ko04es0q6hj7f1titgprhu82fdtgb.apps.googleusercontent.com"
  })

  useEffect(()=>{
    handleGoogleSignIn();
  }, [response]);


  const handleGoogleSignIn = async ()=> {
    console.log("Process Started")
    const token = response?.authentication?.accessToken;
      if (response?.type == 'success' && token){
        try{
          res = await fetch("https://www.googleapis.com/userinfo/v2/me", {headers: {Authorization: `Bearer ${token}`},});
          const user = await res.json();
          setUserInfo(user);
          console.log(userInfo)
        }catch (e){

        }
      }
  };

  

  return (
    <ImageBackground source={require('../assets/BG.jpg')} resizeMode='cover'  style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
            <View style={{padding:20,}}>
                <View style={styles.textContainer}>
                    <View style={{height:"25%", marginVertical:10}}>
                        <Image source={require('../assets/Logo.png')} style={{height:"100%", aspectRatio:0.9}} />
                    </View>
                    <View style={styles.left}>
                        <Text style={[ styles.text, styles.bold] }>Career App</Text>
                        <Text style={[ styles.text, {width:"70%", textAlign:"left"} ]}>Kickstart your career with top internships and jobs.</Text>
                    </View>
                    <View style={styles.right}>
                        <Text style={[ styles.text, styles.bold ]}>Sign In</Text>
                        <Text style={[ styles.text, {width:"50%", textAlign:"right", } ]}>Brighten Your Career Path</Text>
                    </View>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder='Full Name' placeholderTextColor={'white'} />
                    <TextInput style={styles.input} placeholder='Password' placeholderTextColor={'white'} />

                    <Text style={[ styles.text, {width:"100%", textAlign:'right', fontWeight:'bold'} ]}>Forgot Password?</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Sign In</Text>
                    </TouchableOpacity>
                    <View style={{position:'absolute', borderBottomWidth:1, top:"73%", width:'70%', borderBottomColor:"white"}}/>
                    <Text style={[ styles.text, {position:"relative", backgroundColor:'#746afc', padding:10, borderRadius:50} ]}>OR</Text>
                    
                    
                    <View style={styles.oAuthImageLinks}>
                      <TouchableOpacity onPress={()=>{promptAsync()}} style={styles.oAuthButton}>
                        <Image source={require('../assets/Google.png')} style={[styles.oAuthImage, {width:'110%', height:'110%'}]} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{navigation.navigate('Main')}} style={styles.oAuthButton}>
                        <Image source={require('../assets/Github.png')} style={[styles.oAuthImage, {}]} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{navigation.navigate('Main')}} style={styles.oAuthButton}>
                        <Image source={require('../assets/Facebook.png')} style={[styles.oAuthImage, {}]} />
                      </TouchableOpacity>
                    </View>


            </View>
        </View>

            </ScrollView>
        </KeyboardAvoidingView>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%', 
    backgroundColor:"lightgrey",
    flex:1
  },
  textContainer:{
    // marginBottom:"-10%"
  },
  left: {
    width:'100%',
    display:"flex",
    alignItems:'flex-start'

  },
  right: {
    width:'100%',
    display:"flex",
    alignItems:'flex-end',
    paddingRight:10
  },
  bold:{
    fontWeight:"bold",
    fontSize:15,
  },
  form:{
    display:'flex',
    gap:10,
    alignItems:'center',
  },
  oAuthImageLinks:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    gap:30,
  },
  input: {
    width:'100%', 
    padding:10, 
    paddingLeft:20,
    borderColor:'#a03aff',
    borderWidth:2,
    color:"white",
    borderRadius:50,
    marginBottom:10
  },
  button:{
    backgroundColor:'#42a7fc',
    paddingHorizontal:30,
    paddingVertical:10,
    borderRadius:20
  },    
  text:{
    color:'white'
  },
  oAuthButton: {
    height: 60,  
    width: 60,   
    justifyContent: 'center',
    alignItems: 'center',
  },
  oAuthImage: {
    height: '80%',  
    width: '80%',   
    resizeMode: 'contain',  
  },
});
