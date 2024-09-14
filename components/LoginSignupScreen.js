import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, ImageBackground, ScrollView, Platform } from 'react-native';

export default function LoginSignUp() {
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
                    <View style={{position:'absolute', borderBottomWidth:1, top:"69%", width:'70%', borderBottomColor:"white"}}/>
                    <Text style={[ styles.text, {position:"relative", backgroundColor:'#746afc', padding:10, borderRadius:50} ]}>OR</Text>
                    <View style={styles.oAuthImageLinks}>
                        <Image style={{width:'24%', aspectRatio:1}} resizeMode='contain' source={require('../assets/Google.png')} />
                        <Image style={{width:'15%', aspectRatio:1}} resizeMode='contain' source={require('../assets/Github.png')} />
                        <Image style={{width:'15%', aspectRatio:1}} resizeMode='contain' source={require('../assets/Facebook.png')} />
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
    marginBottom:"-25%"
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
  }
});
