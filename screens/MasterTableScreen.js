import React, { useState, useEffect } from "react";
import {
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";

import TableBuild from "../components/TableBuild"

export default function MasterTableScreen({navigation}) {
    const [tiersCollection, setTiers] = useState([]);
    console.log("working?")
    useEffect(() => {
      fetch("http://localhost:4001/tiers")
        .then(res => res.json())
        .then(res => {
          console.log(res._id)
          if (res && !tiersCollection.length) {
            setTiers(res);
          }
        });
  
      navigation.addListener("didFocus", payload => {
        fetch("http://localhost:4001/tiers")
          .then(res => res.json())
          .then(res => {
            console.log(res)
            if (res && !tiersCollection.length) {
              setTiers(res);
            }
            console.log(res);
          });
      });
    }, []);
  
    const updatedTiers = tierID => {
      console.log(tier._id)
      let updatedCollection = tiersCollection.filter(tier => tier._id !== tierID);
      setTiers(updatedCollection);
    };


  return (
    <View style={styles.container}>
  <Text
        style={{
          color: "#605e5e",
          marginLeft: 20,
          marginTop: 10,
          marginBottom: 10,
          fontWeight: "900",
          fontSize: 25
        }}
      >
        Master Table
      </Text>        
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {tiersCollection ? (
          tiersCollection.map(tierObj => {

            return (
                <View>
                <Text
                style={{
                  color: "#605e5e",
                  marginLeft: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  fontWeight: "900",
                  fontSize: 25
                }}
              >
                  {tierObj.tier_name}
              </Text>
              <TableBuild
                navigator ={navigation}
                key={tierObj._id}
                tier_id={tierObj._id}
                tier={tierObj.tier_name}
                updatedTiers={updatedTiers}
              />
              </View>
            );
          })
        ) : (
          <Text style={{ marginTop: 10, marginLeft: 20 }}>Tiers: None!</Text>
        )}
      </ScrollView>
    
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
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
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
