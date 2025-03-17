import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "./Colors";
type props = {
  item: {
    titre: string;
    adresse:string,
    prix:number;
    nbre_chambre:number;
    nbre_salle_bains:Number;
  };
};
const AppartementItem = ({ item }: props) => {
  return (
    <View style={styes.container}>
      
      {/* Section Image */}


      {/* Section Titre */}

      <View>
        <Text>{item.prix} / mois</Text>
      </View>

      <Text>{item.titre}</Text>

      {/* Section Adresse */}
      <View>
        <Entypo name="location-pin" size={24} color={Colors.primary} />
        <Text>{item.adresse}</Text>
      </View>
      
      <View>
      <Ionicons name="bed-outline" size={24} color={Colors.primary} />
      <Text> {item.nbre_chambre} chambres</Text>
      </View>

    </View>
  );
};

export default AppartementItem;

const styes = StyleSheet.create({
  container: {
    padding:20,
    height: 400,
    width: 350,
  //  backgroundColor: "orange",
    borderRadius: 20,
    borderWidth:1,
    borderColor:Colors.light
  },
});
