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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Product from "../components/Product";

import { Ionicons } from "@expo/vector-icons";


export default function ProductScreen({navigation}) {

const tierID = navigation.getParam("tierID")
const tierName = navigation.getParam("tierName")

// console.log("PARAMS" + " "+ navigation.params.tierID)



  const [productsCollection, setProducts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4001/products/tiers/"+tierID)
      .then(res => res.json())
      .then(res => {
        console.log(res._id)
        if (res && !productsCollection.length) {
          setProducts(res);
        }
      });

    navigation.addListener("didFocus", payload => {
      fetch("http://localhost:4001/products/tiers/"+tierID)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if (res && !productsCollection.length) {
            setProducts(res);
          }
          console.log(res);
        });
    });
  }, []);
  const updatedProducts = productID => {
    console.log("!!!!!!!!!"+productsCollection)
    let updatedCollection = productsCollection.filter(product => product._id !== productID);
    setProducts(updatedCollection);
  };

  const addedProduct = product => {
    const newProduct = {
      product_name: product.product_name,
    };
    setProducts([...productsCollection, newProduct]);
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
        Current Products 
      </Text>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {productsCollection ? (
          productsCollection.map(productObj => {

            return (
              <Product
                navigator ={navigation}
                key={productObj._id}
                product_ID={productObj._id}
                product={productObj.product_name}
                quantity={productObj.product_quantity}
                updatedProducts={updatedProducts}
              />
            );
          })
        ) : (
          <Text style={{ marginTop: 10, marginLeft: 20 }}>Products: None!</Text>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SpecificTierMetrics',
        {
          productsCollection: productsCollection,
          tierId: tierID,
          tierName: tierName
        })}
      >
        <Text style={styles.text}>{tierName} Metrics</Text>
      </TouchableOpacity>
          
      
    </View>
    
  );
}
ProductScreen.navigationOptions = ({ navigation }) => ({
  title: "Products",
  headerTitleStyle: {
    color: "black",
    textAlign: "left",
    fontSize: 18,
    fontWeight: "900"
  },
  headerTintColor: "rgba(255,255,255,0.8)",
  
  headerRightContainerStyle: {
    paddingRight: 10
  },
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        const tierID = navigation.getParam("tierID")
        navigation.navigate("ProductFormScreen", {
          tier_ID: tierID
        });
      }}
    >
      <Ionicons name="ios-add" size={30} color="black" left={50} />
    </TouchableOpacity>
  )
});

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
