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
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "./Colors";
import { colors } from "react-native-swiper-flatlist/src/themes";
import { Image } from "expo-image";
type props = {
  item: {
    titre: string;
    adresse: string;
    prix: number;
    nbre_chambre: number;
    nbre_salle_bains: number;
  };
};
const AppartementItem = ({ item }: props) => {
  return (
    <View style={styes.container}>
      {/* Section Image */}

      <Image  source={{uri:"https://res.cloudinary.com/dait4sfc5/image/upload/v1740654071/3d-contemporary-living-room-interior-modern-furniture_axav0n.jpg"}}/>
      {/* Section Titre */}

      <View style={styes.container_prix}>
        <Text style={styes.prix}>{item.prix} / mois</Text>
        <MaterialIcons
          name="favorite-outline"
          size={24}
          color={Colors.primary}
        />
      </View>

      <Text style={{ fontSize: 25, fontWeight: "500" }}>{item.titre}</Text>

      {/* Section Adresse */}
      <View style={styes.container_adresse}>
        <Entypo name="location-pin" size={30} color={Colors.primary} />
        <Text>{item.adresse}</Text>
      </View>

      {/* Section Detail  */}
      <View style={styes.container_detail}>
        <View style={styes.detail}>
          <Ionicons name="bed-outline" size={24} color={Colors.primary} />
          <Text> {item.nbre_chambre} chambres</Text>
        </View>
        <View style={styes.detail}>
          <Ionicons name="bed-outline" size={24} color={Colors.primary} />
          <Text> {item.nbre_salle_bains} salle de bains</Text>
        </View>
      </View>
    </View>
  );
};

export default AppartementItem;

const styes = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    height: 400,
    width: 350,
    //  backgroundColor: "orange",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.light,
  },

  container_adresse: {
    flexDirection: "row",
    alignItems: "center",
  },

  container_prix: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  prix: {
    fontSize: 25,
    color: Colors.primary,
    fontWeight: "500",
    letterSpacing: 2,
  },
  container_detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: Colors.light,
    paddingTop: 10,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
  },
});
