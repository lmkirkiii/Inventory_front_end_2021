import React, { useState } from "react";
import {
  Picker,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";

function TierForm(props) {
  const [inputState, setInput] = useState("");
  const [pickerState, setPickerValue] = useState("low");

  async function handleSubmit() {
    if (inputState && pickerState) {
      const newTier = {
        tier_name: inputState,
      };
      console.log(newTier)
      fetch("http://localhost:4001/tiers/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newTier)
      })
        .then(res => res.json())
        .then(res => {
            
          if (res) {
            Alert.alert(res.tiers);
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
        placeholder="Add Tier Here"
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderTopColor: "white",
          color: "black",
          fontSize: 40,
          marginTop: 30,
          paddingLeft: 10
        }}
        value={inputState}
        onChangeText={text => setInput(text)}
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

export default TierForm;
