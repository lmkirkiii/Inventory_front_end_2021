import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ProductFormScreen from "../screens/ProductFormScreen";
import ProductFormUpdateScreen from "../screens/ProductFormUpdateScreen";
import ProductScreen from "../screens/ProductScreen";
import TierFormScreen from "../screens/TierFormScreen";
import TierScreen from "../screens/TierScreen"
import SpecificTierMetrics from "../screens/SpecificTierMetrics"
import MastertableScreen from "../screens/MasterTableScreen"

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    TierScreen: TierScreen,
    ProductScreen: ProductScreen,
    ProductFormScreen: ProductFormScreen,
    ProductFormUpdateScreen: ProductFormUpdateScreen,
    TierFormScreen: TierFormScreen,
    SpecificTierMetrics: SpecificTierMetrics,
    MastertableScreen: MastertableScreen
  },
  {
    initialRouteName: 'HomeScreen'
  },
  config
);




const tabNavigator = createBottomTabNavigator({
  HomeStack
});

tabNavigator.path = "";

export default tabNavigator;
