import React from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";

import { CartCard } from "../../../components/card.component";
import { Mocks } from "../../../services/index";

export const HomeScreen = () => {
  return(
  <SafeAreaView style ={ { flex: 1}}>
      <Text>
      Home Screen here.....
      </Text>
      <ScrollView>
      {Mocks.map((item) => { return (<CartCard item ={item}/>);})}
      </ScrollView>  
  </SafeAreaView>
  );
};
