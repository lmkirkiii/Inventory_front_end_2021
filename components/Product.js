import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import _ from "lodash";

function Product(props) {

  const productID = props.product_ID
  console.log("!!!!!!!" + productID)
  async function handleDelete() {
    Alert.alert("Are you sure you want to delete this Product");
    console.log(productID)
      fetch("http://localhost:4001/products/delete/" + productID, {
        method: "DELETE"
      }).catch(console.log);
       props.navigator.goBack()
      
    }


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
      <Text style={styles.text}>
          {props.product.length > 20
            ? props.product.substring(0, 21).concat("...")
            : props.product}
        </Text>
      </View>
      <TouchableOpacity 
      style={{ alignSelf: "flex-end", marginLeft: 50 }}
      onPress={() => props.navigator.navigate('ProductFormUpdateScreen',
      {
        tierID: props.tier_id,
        product_name: props.product,
        product_quantity: props.quantity,
        product_id: props.product_ID
      })}
      >
        <Ionicons name="ios-more" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity 
                style={{ alignSelf: "flex-end", marginLeft: 50 }} 
                onPress={() =>{handleDelete()} }>
                <Ionicons name="ios-remove-circle" size={32} color="red" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#eeeaea",
    borderRadius: 50,
    height: 25,
    marginRight: 20,
    width: 25
  },
  completed: {
    backgroundColor: "#5ff0bd",
    borderRadius: 50,
    height: 25,
    marginRight: 20,
    width: 25
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "600"
  }
});

export default Product;