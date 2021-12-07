import React, { useState } from "react";
import {
  Picker,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";

function ProductFormUpdate(props) {
  const tierID = props.tier_ID
  const product_quantity = props.quantity
  const product_name = props.name
  const product_id = props.product_ID
  const product_quantity_string = product_quantity.toString()

  const [inputNameState, setInputName] = useState(product_name);
  const [inputQuantityState, setInputQuantity] = useState(product_quantity_string);


  const [pickerState, setPickerValue] = useState("low");

  async function handleSubmit() {


    if (inputNameState && pickerState && inputQuantityState) {
      const newProduct = {
        tier_id: tierID,
        product_name: inputNameState,
        product_quantity: inputQuantityState.toString()

      };
      fetch("http://localhost:4001/products/update/" + product_id , {
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
            Alert.alert("products have been updated");
            props.navigation.goBack();
          }
        })
        .catch(console.log);
    }
  }

  return (
    <View>
      <TextInput
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
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductFormUpdate;