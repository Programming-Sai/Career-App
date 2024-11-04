// HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  ImageBackground,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const imageList = [
  { key: "1", image: require("../assets/BG.jpg") },
  { key: "2", image: require("../assets/BG.jpg") },
  { key: "3", image: require("../assets/BG.jpg") },
  { key: "4", image: require("../assets/BG.jpg") },
];

const careerPaths = [
  {
    id: "1",
    title: "Software Engineering",
    description: "Design, develop, and maintain software applications.",
    skills: ["Programming", "Problem-Solving", "Team Collaboration"],
    education: "Bachelor's in Computer Science or related field",
    potentialEmployers: ["Google", "Microsoft", "Apple"],
    backgroundColor: "rgba(255, 99, 71, 0.5)", // Tomato
    icon: "code-slash", // Ionicon for coding
  },
  {
    id: "2",
    title: "Data Science",
    description:
      "Analyze and interpret complex data to help businesses make decisions.",
    skills: ["Data Analysis", "Machine Learning", "Statistics"],
    education: "Bachelor's in Data Science or related field",
    potentialEmployers: ["IBM", "Facebook", "Amazon"],
    backgroundColor: "rgba(54, 162, 235, 0.5)", // Light Blue
    icon: "stats-chart", // Ionicon for data
  },
  {
    id: "3",
    title: "Digital Marketing",
    description:
      "Plan and execute digital marketing campaigns to drive online engagement.",
    skills: ["SEO", "Content Creation", "Analytics"],
    education: "Bachelor's in Marketing or related field",
    potentialEmployers: ["HubSpot", "Salesforce", "Google"],
    backgroundColor: "rgba(75, 192, 192, 0.5)", // Aqua
    icon: "megaphone", // Ionicon for marketing
  },
  {
    id: "4",
    title: "Cybersecurity Specialist",
    description: "Protect systems and networks from cyber threats and attacks.",
    skills: ["Network Security", "Risk Analysis", "Attention to Detail"],
    education: "Bachelor's in Cybersecurity or related field",
    potentialEmployers: ["Cisco", "Norton", "CrowdStrike"],
    backgroundColor: "rgba(153, 102, 255, 0.5)", // Lavender Purple
    icon: "lock-closed", // Ionicon for security
  },
  {
    id: "5",
    title: "Project Management",
    description:
      "Lead teams and manage projects to ensure timely completion and success.",
    skills: ["Leadership", "Organizational Skills", "Time Management"],
    education: "Bachelor's in Business Management or related field",
    potentialEmployers: ["Deloitte", "PwC", "Accenture"],
    backgroundColor: "rgba(255, 159, 64, 0.5)", // Light Orange
    icon: "clipboard", // Ionicon for project management
  },
  {
    id: "6",
    title: "Graphic Design",
    description: "Create visual content to communicate messages and ideas.",
    skills: ["Creativity", "Typography", "Color Theory"],
    education: "Bachelor's in Graphic Design or related field",
    potentialEmployers: ["Adobe", "Canva", "Figma"],
    backgroundColor: "rgba(244, 67, 54, 0.5)", // Red
    icon: "brush", // Ionicon for design
  },
  {
    id: "7",
    title: "Product Management",
    description: "Oversee product development from concept to market.",
    skills: ["Market Research", "User Experience", "Strategic Planning"],
    education: "Bachelor's in Business or related field",
    potentialEmployers: ["Apple", "Google", "Spotify"],
    backgroundColor: "rgba(76, 175, 80, 0.5)", // Green
    icon: "cube", // Ionicon for product
  },
  {
    id: "8",
    title: "Human Resources",
    description: "Manage employee relations and organizational development.",
    skills: ["Communication", "Conflict Resolution", "Recruitment"],
    education: "Bachelor's in Human Resources or related field",
    potentialEmployers: [
      "HR Consulting Firms",
      "Large Corporations",
      "Startups",
    ],
    backgroundColor: "rgba(255, 193, 7, 0.5)", // Amber
    icon: "people", // Ionicon for HR
  },
  {
    id: "9",
    title: "Mechanical Engineering",
    description: "Design and build mechanical systems and devices.",
    skills: ["Problem-Solving", "Creativity", "Technical Skills"],
    education: "Bachelor's in Mechanical Engineering or related field",
    potentialEmployers: ["General Motors", "Boeing", "NASA"],
    backgroundColor: "rgba(63, 81, 181, 0.5)", // Indigo
    icon: "construct", // Ionicon for engineering
  },
  {
    id: "10",
    title: "Environmental Science",
    description: "Study and protect the environment and natural resources.",
    skills: ["Research", "Analytical Skills", "Environmental Awareness"],
    education: "Bachelor's in Environmental Science or related field",
    potentialEmployers: [
      "Nonprofits",
      "Government Agencies",
      "Research Institutions",
    ],
    backgroundColor: "rgba(0, 188, 212, 0.5)", // Cyan
    icon: "leaf", // Ionicon for environment
  },
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function renderItems({ item }) {
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 5 }}
        onPress={() => {
          setModalVisible(true);
          console.log(modalVisible);
        }}
      >
        <Image
          source={item.image}
          style={{
            width: 200,
            height: 150,
            borderRadius: 10,
            borderColor: "white",
            borderWidth: 1,
          }}
        />
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.headerWelcome}>Welcome Jon</Text>
          <Text style={styles.textList}>
            {["Git", "Bash", "Python", "JS", "CSS"].map((skill, i, arr) =>
              i < arr.length - 1 ? skill + "  ●  " : skill
            )}
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/BG.jpg")}
            style={{ width: 40, height: 40, borderRadius: 500 }}
          />
        </View>
      </View>
      <View style={styles.searchBar}>
        <Icon name="search" style={styles.iconSearch} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="black"
          style={styles.search}
        />
      </View>
      <View style={styles.slider}>
        <Text style={styles.header}>Courses</Text>
        <FlatList
          data={imageList}
          renderItem={renderItems}
          keyExtractor={(item) => item.key}
          horizontal={true}
          alwaysBounceHorizontal={true}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      </View>

      <View style={styles.slider}>
        <Text style={styles.header}>Internships</Text>
        <FlatList
          data={imageList}
          renderItem={renderItems}
          keyExtractor={(item) => item.key}
          horizontal={true}
          inverted={true}
          alwaysBounceHorizontal={true}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      </View>

      <View style={styles.pathList}>
        <Text style={styles.header}>Career Paths</Text>
        {careerPaths.map((path, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.path, { backgroundColor: path.backgroundColor }]}
          >
            <Text style={styles.title}>{path.title}</Text>

            <Text style={styles}>- {path.description}</Text>
            <Text style={styles}>- {path.education}</Text>
            <Text style={styles.textList}>
              {path.skills.map((skill, i, arr) =>
                i < arr.length - 1 ? skill + "  ●  " : skill
              )}
            </Text>
            <Text style={styles.textList}>
              {path.potentialEmployers.map((skill, i, arr) =>
                i < arr.length - 1 ? skill + "  ●  " : skill
              )}
            </Text>
            <Icon name={path.icon} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="fade" // or 'slide', 'none'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ImageBackground
            style={styles.modalContent}
            source={require("../assets/BG.jpg")}
          >
            <Text>This is a Modal!</Text>
            <Button
              title="Close Modal"
              onPress={() => setModalVisible(false)}
            />
          </ImageBackground>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    marginTop: 30,
  },
  slider: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: 300,
    height: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pathList: {
    padding: 10,
  },
  path: {
    padding: 10,
    marginVertical: 10,
    textAlign: "center",
    borderRadius: 10,
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  icon: {
    position: "absolute",
    top: 20,
    left: "70%",
    fontSize: 110,
    opacity: 0.5,
    color: "rgba(128,128,128,1)",
  },
  textList: {
    opacity: 0.6,
    fontSize: 11,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  headerWelcome: {
    fontWeight: "bold",
    fontSize: 25,
  },
  searchBar: {
    backgroundColor: "rgba(128, 0, 128, 0.3)",
    padding: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
    paddingRight: 40,
  },
  iconSearch: {
    fontSize: 20,
    fontWeight: "bold",
  },
  search: {
    width: "100%",
  },
});
