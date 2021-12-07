import React, { useState, useEffect } from "react";
import {
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
 

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#605e5e",
          textAlign: "center",
          marginTop: 10,
          marginBottom: 10,
          fontWeight: "900",
          fontSize: 25
        }}
      >
        Menu
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TierScreen')}
      >
        <Text style={styles.text}>Tiers and Products</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.text}>Metrics</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.text}>My Daily Sales</Text>
      </TouchableOpacity>


    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    margin: 20,
    backgroundColor: 'black',
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
