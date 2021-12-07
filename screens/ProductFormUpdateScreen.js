import React, { useState, useEffect } from "react";
import {
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImagePropTypes
} from "react-native";
import Product from "../components/Product";
import ProductFormUpdate from "../components/ProductFormUpdate";
import { Ionicons } from "@expo/vector-icons";

export default function ProductFormUpdateScreen({ navigation }) {
  const tierID = navigation.getParam("tier_ID")
  const product_ID = navigation.getParam("product_id")
  const product_quantity = navigation.getParam("product_quantity")  
  const product_name = navigation.getParam("product_name")
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text
          style={{
            color: "#605e5e",
            marginLeft: 20,
            marginBottom: 20,
            fontWeight: "900",
            fontSize: 25
          }}
        >
          Update Product
        </Text>
        <ProductFormUpdate
        navigation={navigation}
        tier_ID={tierID}
        product_ID={product_ID}
        key={product_ID}
        quantity={product_quantity}
        name={product_name}
         />
      </ScrollView>
    </View>
  );
}

ProductFormUpdateScreen.navigationOptions = {
  title: "Add Product",
  headerTitleStyle: {
    color: "black",
    textAlign: "left",
    fontSize: 18,
    fontWeight: "900"
  },
  headerTintColor: "black",

  headerLeftContainerStyle: {
    paddingLeft: 10
  }
};

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