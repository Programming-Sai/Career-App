import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Image, Modal, TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have the icon library installed



const notificationsData = {
  Jobs: [
    {
      id: 1,
      title: 'New Job Alert',
      content: 'Software Engineer position available at TechCorp. Apply now!',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '5d ago',
    },
    {
      id: 2,
      title: 'Internship Opportunity',
      content: 'Marketing Assistant position available at XYZ Ltd.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '3d ago',
    },
    {
      id: 3,
      title: 'Remote Job Opening',
      content: 'Join us as a Frontend Developer at Innovate Corp. Remote work available.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '2d ago',
    },
    {
      id: 4,
      title: 'Job Fair Next Week',
      content: 'Attend the Job Fair at City Hall on Saturday. Don’t miss out!',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '1w ago',
    },
  ],
  Skills: [
    {
      id: 5,
      title: 'New Course Available',
      content: 'Advanced JavaScript Programming starting this Monday.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '1d ago',
    },
    {
      id: 6,
      title: 'Upcoming Workshop',
      content: 'Join our workshop on Resume Writing Techniques next week.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '3d ago',
    },
    {
      id: 7,
      title: 'Skill Development Program',
      content: 'Enroll in our Python Bootcamp starting next month.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '2w ago',
    },
    {
      id: 8,
      title: 'Web Development Seminar',
      content: 'Attend a seminar on modern web development practices this Friday.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '4d ago',
    },
  ],
  Advice: [
    {
      id: 9,
      title: 'New Article Published',
      content: 'How to Ace Your Next Interview: Tips and Strategies.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '2d ago',
    },
    {
      id: 10,
      title: 'Networking Tip',
      content: 'Effective strategies to expand your professional network.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '1d ago',
    },
    {
      id: 11,
      title: 'Personal Branding Guide',
      content: 'Learn how to create a strong personal brand in today’s job market.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '3w ago',
    },
    {
      id: 12,
      title: 'Interview Preparation Tips',
      content: 'Get ready for your next interview with these helpful tips.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '1w ago',
    },
  ],
  Updates: [
    {
      id: 13,
      title: 'Profile Update Reminder',
      content: 'Update Your Profile to Get Better Recommendations.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '5d ago',
    },
    {
      id: 14,
      title: 'App Version Update',
      content: 'A new version of the app is available. Update now for the latest features.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '2d ago',
    },
    {
      id: 15,
      title: 'Feature Announcement',
      content: 'We’ve added new features to enhance your experience! Check them out.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '1w ago',
    },
    {
      id: 16,
      title: 'System Maintenance Notice',
      content: 'Scheduled maintenance will occur this weekend. Expect brief downtime.',
      image: require('../assets/BG.jpg'), // Adjust the path as necessary
      timestamp: '3d ago',
    },
  ],
};




const NotificationScreen = () => {
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null); // Track selected notification
  const [routes] = useState([
    { key: 'Jobs', title: 'Jobs' },
    { key: 'Skills', title: 'Skills' },
    { key: 'Advice', title: 'Advice' },
    { key: 'Updates', title: 'Updates' },
  ]);
  
  const [notifications, setNotifications] = useState(notificationsData);

  const deleteNotification = (routeKey, id) => {
    setNotifications((prevState) => ({
      ...prevState,
      [routeKey]: prevState[routeKey].filter((item) => item.id !== id),
    }));
  };

  const handleNotificationPress = (notification) => {
    setSelectedNotification(notification);
    setModalVisible(true);
  };

  const renderRightActions = (routeKey, id) => (
    <View style={styles.deleteButton}>
      <Text
        style={styles.deleteButtonText}
        onPress={() => deleteNotification(routeKey, id)}
      >
        <Icon name="trash-outline" size={20} color="white" />
      </Text>
    </View>
  );

  const renderLeftActions = (notifications) => (
    <View style={styles.viewButton}>
      <Text
        style={styles.deleteButtonText}
        onPress={() => handleNotificationPress(notifications)}
      >
        <Icon name="eye-outline" size={20} color="white" />
      </Text>
    </View>
  );

  const renderScene = ({ route }) => {
    const notificationsForRoute = notifications[route.key];
    return (
      <ScrollView style={styles.scene}>
        {notificationsForRoute.map((notification) => (
          <Swipeable
            key={notification.id}
            renderRightActions={() => renderRightActions(route.key, notification.id)}
            renderLeftActions={() => renderLeftActions(notification)}
          >

            <View style={styles.notificationContainer}>
              <Image style={styles.notificationImgae} source={notification.image}/>
              <View style={styles.textContainer}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationContent}>{notification.content}</Text>
                  <Text style={styles.notificationTimestamp}>{notification.timestamp}</Text>
              </View>
            </View>

          </Swipeable>
        ))}



      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedNotification(null); // Reset selected notification on close
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContainerContent}>
            {selectedNotification && (
              <>
                <Image source={selectedNotification.image} style={styles.image} />
                <Text style={styles.modalTitle}>{selectedNotification.title}</Text>
                <Text style={styles.modalContent}>{selectedNotification.content}</Text>
              </>
            )}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Icon name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      </ScrollView>
    );
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      renderLabel={({ route, focused }) => (
        <Text
          style={[
            styles.tabLabel,
            focused ? styles.activeTabLabel : styles.inactiveTabLabel,
          ]}
        >
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="purple"
        barStyle="light-content"
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: '100%' }}
        renderTabBar={renderTabBar}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  notificationContainer: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginVertical:10,
    backgroundColor: '#F3E5F5',
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"space-between",
    flexDirection:"row",
    gap:10,
  },
  textContainer: {
    display:"flex",
    alignItems:"flex=start",
    justifyContent:"space-between",
    gap:5,
    width:'90%',
    paddingHorizontal:10,
  },
  notificationImgae: {
    width:50,
    height:50,
    objectFit:'cover',
    borderRadius:100,
  },  
  notificationTitle: {
    fontSize:15,
    fontWeight:'bold'
  },
  notificationContent: {
    fontSize:13,
    fontWeight:'lighter',
    width:'92%'
  },
  notificationTimestamp: {
    fontWeight:'bold',
    opacity:0.3,
    textAlign:'right',
    paddingRight: 30,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor: '#FF6F91',
  },
  viewButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor: '#6A8DFF',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: 'purple',
  },
  indicator: {
    backgroundColor: '#fff',
  },
  tabLabel: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    fontSize: 11,
    width:'110%',
    textAlign:'center',
  },
  activeTabLabel: {
    color: '#E6E6FA',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  inactiveTabLabel: {
    color: '#BBBBBB',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalContainerContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    position:"relative",
  },
  closeButton:{
    position:"absolute",
    top:'-5%',
    right:"-5%",
    padding:10,
    backgroundColor:'white',
    borderRadius:100,
    width:40,
    height:40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalContent: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default NotificationScreen;
