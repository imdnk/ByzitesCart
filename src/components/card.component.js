import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import { TextField, Button} from 'react-native-ui-lib';

import { Mocks } from "../services/index";


export const CartCard = ({item}) => {
       const [selected, setSelected] = useState(null);
  return( <TouchableOpacity style = {{ 
         padding : 16, }}>
         <Image
          style = {{ width: 380,
              height: 200,}}
          source={{uri :item.img_url}}
          />
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        </TouchableOpacity> );
};