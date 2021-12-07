import React, {  useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';


 
function TableBuild(props) {

    const tierID = props.tier_id
    console.log("VAlid data111 " + props)
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

    }, []);


 
    return (
      <View style={styles.container}>
      <DataTable style={styles.border}>
      <DataTable.Header>
          <DataTable.Title>Product Name</DataTable.Title>
          <DataTable.Title>Quantity</DataTable.Title>
      </DataTable.Header>
      {
      productsCollection.map(productObj => {

        return (
          <DataTable.Row>
            <DataTable.Cell>{productObj.product_name}</DataTable.Cell>
            <DataTable.Cell>{productObj.product_quantity}</DataTable.Cell>
          </DataTable.Row>


        );
        })
        }
      </DataTable>
      </View>
      )}
 
const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingHorizontal: 10,
    
  },
  border:{
    borderWidth: 1,
    borderColor: "grey"
  }
})

export default TableBuild;