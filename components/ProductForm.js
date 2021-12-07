import React, { useState } from "react";
import {
  Picker,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";

function ProductForm(props) {

  const tierID = props.tier_ID
  
  const [inputNameState, setInputName] = useState("");
  const [inputQuantityState, setInputQuantity] = useState("");


  const [pickerState, setPickerValue] = useState("low");

  async function handleSubmit() {
    console.log(inputNameState)
    console.log(inputQuantityState)

    if (inputNameState && pickerState && inputQuantityState) {
      const newProduct = {
        tier_id: tierID,
        product_name: inputNameState,
        product_quantity: inputQuantityState

      };
 
      fetch("http://localhost:4001/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newProduct)
      })
        .then(res => res.json())
        .then(res => {
            
          if (res) {
            Alert.alert("Product has been added");

            props.navigation.goBack();
          }
        })
        .catch(console.log);
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Add Product Name Here"
        autoFocus
        style={{
          borderWidth: 1,
          borderColor: "#5ce0e9",
          borderTopColor: "white",
          color: "black",
          fontSize: 40,
          marginTop: 30,
          paddingLeft: 10
        }}
        value={inputNameState}
        onChangeText={text => setInputName(text)}
      />
       <TextInput
        placeholder="Add Product Quantity"
        autoFocus
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderTopColor: "white",
          color: "black",
          fontSize: 40,
          marginTop: 30,
          paddingLeft: 10
        }}
        value={inputQuantityState}
        onChangeText={text => setInputQuantity(text)}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 15,
          borderRadius: 4,
          elevation: 3,
          margin: 20,
          backgroundColor: 'black',
        }}
      >
        <Text style={{ 
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
           }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductForm;