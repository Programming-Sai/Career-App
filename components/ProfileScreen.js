import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import your desired icon set
import { IconButton, Tooltip } from 'react-native-paper';



const ProfileScreen = () => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const skills = ['Git', 'Bash', 'Python', 'JS', 'CSS'];
    const [visible, setVisible] = useState(false); // or whatever default value is needed
    const imageList = [
        {key:'1', image:require('../assets/BG.jpg')},
        {key:'2', image:require('../assets/BG.jpg')},
        {key:'3', image:require('../assets/BG.jpg')},
        {key:'4', image:require('../assets/BG.jpg')},
    ]


    function renderItems({item}){
        return(
        <TouchableOpacity style={{ paddingHorizontal: 5 }}>
            <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 10, borderColor:"white", borderWidth:1 }} />
        </TouchableOpacity>
        )
      };
    
    
  return (
    <View style={styles.container} >

        <Animated.View style={[styles.profileBox, {
            height: scrollY.interpolate({
                inputRange: [0, 200],  // Scroll range
                outputRange: ['40%', '13%'],  // Scale range (1x to 2x)
                extrapolate: 'clamp',
            }),
        }]}>
            
            
            <TouchableOpacity 
                onLongPress={() => setTooltipVisible(true)} 
                style={{
                    position: 'absolute', 
                    top: 0, 
                    right: 20, 
                    backgroundColor: 'rgba(0,0,0,0.1)',  
                    borderRadius: 100
            }}>
                <Tooltip
                    title="Edit Profile"
                    visible={visible} // Control visibility with state
                    onDismiss={() => setVisible(false)} // Close tooltip when not needed
                >
                    <IconButton
                        icon="pencil"
                        size={15}
                        onPress={() => {
                            console.log('Pressed');
                            setVisible(false); // Close tooltip on press
                        }}
                    onLongPress={() => setVisible(true)} // Show tooltip on long press
                    />
                </Tooltip>
            </TouchableOpacity>


    
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
            {/* <Text>
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
            </Text> */}
            
            <View style={styles.info}>
               <View style={styles.dataInfo}>
                    <Text style={styles.title}>Personal Information</Text>

                    <Text style={styles.label}>First Name</Text>
                    <Text style={styles.data}>Jon</Text>

                    <Text style={styles.label}>Last Name</Text>
                    <Text style={styles.data}>Snow</Text>

                    <Text style={styles.label}>Other Name</Text>
                    <Text style={styles.data}>Targearyan</Text>

                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.data}>jon@gmail.com</Text>

                    <Text style={styles.label}>First Name</Text>
                    <Text style={styles.data}>Jon</Text>

                    <Text style={styles.label}>Date OF Birth</Text>
                    <Text style={styles.data}>00/00/0000</Text>

                    <Text style={styles.label}>Gender</Text>
                    <Text style={styles.data}>M</Text>
               </View>

               <View style={styles.dataInfo}>
                   <Text style={styles.title}>Academic Records</Text>

                    <Text style={styles.label}>Education Level</Text>
                    <Text style={styles.data}>N/A</Text>

                    <Text style={styles.label}>Institution Name</Text>
                    <Text style={styles.data}>N/A</Text>

                    <Text style={styles.label}>Field Of Study</Text>
                    <Text style={styles.data}>Targearyan</Text>

                    <Text style={styles.label}>Graduaiton Year</Text>
                    <Text style={styles.data}>N/A</Text>

                    <Text style={styles.label}>Documents</Text>
                    <FlatList 
                        data={imageList}
                        renderItem={renderItems}
                        keyExtractor={(item)=>item.key}
                        horizontal={true}                                                                              
                        alwaysBounceHorizontal={true}
                        contentContainerStyle={{ paddingVertical: 10 }} />
               </View>

               <View style={styles.dataInfo}>
                   <Text style={styles.title}>Skills & Interests</Text>

                    <Text style={styles.label}>Skills</Text>
                    <View style={styles.skillContainer}>
                        <Text style={[styles.skill, styles.data]}>
                            {skills.map((skill, i, arr) => (i < arr.length - 1 ? skill + ', ' : skill))}
                        </Text>
                    </View>

                    <Text style={styles.label}>Interests</Text>
                    <Text style={styles.data}>N/A</Text>
               </View>

               <View style={styles.dataInfo}>
                    <Text style={styles.title}>Career Path Recommendations</Text>

                    <Text style={styles.label}>Recommended Career Paths</Text>
                    <Text style={styles.data}>Jon</Text>

                    <Text style={styles.label}>Details Button</Text>
                    <Text style={styles.data}>Snow</Text>
                    {/* When the details button is clicked, it will open a modal that would show the details of the career prospect */}
               </View>

               <View style={styles.dataInfo}>
                    <Text style={styles.title}>Internship Opportunities</Text>

                    <Text style={styles.label}>Applied Internships</Text>
                    <Text style={styles.data}>Jon</Text>

                    <Text style={styles.label}>Recommended Internships</Text>
                    <Text style={styles.data}>Snow</Text>

                    <Text style={styles.label}>Search & Filter Options</Text>
                    <Text style={styles.data}>Snow</Text>
               </View>

               <View style={styles.dataInfo}>
                    <Text style={styles.title}>Skill Development</Text>

                    <Text style={styles.label}>Recommended Courses</Text>
                    <Text style={styles.data}>Jon</Text>

                    <Text style={styles.label}>Progress Tracker</Text>
                    <Text style={styles.data}>Snow</Text>
               </View>
            </View>
        
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
        position:'relative',
        display:'flex',
        alignItems:'center',
        // backgroundColor:'lightgrey',
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
        marginTop:'5%',
        // paddingHorizontal:20,
        paddingBottom:'40%',
        // maxHeight: 200,
    },
    label:{
        fontWeight:'bold',
        fontSize:11,
        opacity:0.5,
    },
    data:{
        fontWeight: 'light',
        fontSize:18,
        paddingBottom: 20,
    },
    info:{
        // backgroundColor:'lightgrey',
        paddingHorizontal:20,
    },
    title:{
        fontSize:18,
        fontWeight: 'bold',
        opacity: 0.5,
        paddingBottom: 20,
    },
    dataInfo:{
        marginBottom: 20,
    }
});

export default ProfileScreen;


`
Based on the information you've provided, here’s a structured outline of what the profile page could include for a user in your application. This outline ensures that the user experience is intuitive and comprehensive, encompassing all necessary functionalities.

### Profile Page Structure

7. **Skill Development**
   - **Recommended Courses**: List of personalized course suggestions with links to online platforms.
   - **Progress Tracker**: Visual progress bars or percentage completion for each course the user is enrolled in.

9. **Notifications**
   - **Recent Notifications**: List of recent notifications about new recommendations, internship updates, etc.
   - **Mark All as Read**: Button to clear notifications.

10. **Buttons**
   - **Save Changes**: Button to save any updates made to the profile.
   - **Cancel**: Button to discard changes and revert to the last saved state.
   - **Log Out**: Option to log out of the application.

### Additional Considerations
- **Responsive Design**: Ensure that the profile page is mobile-friendly.
- **User Experience (UX)**: Use tooltips or hints to guide the user when filling out fields.
- **Error Handling**: Clearly indicate any errors (e.g., invalid email format) during profile updates.

### Conclusion
This structure provides a comprehensive overview of the profile page, ensuring users can easily manage their personal information, explore career opportunities, and access relevant resources. Adapt the layout and functionality based on user feedback and usability testing to enhance the overall experience.
`