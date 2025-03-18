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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
    <View style={styles.container}>
      <View>
        {/* Section Image */}
        <Image
          source={{
            uri: "https://res.cloudinary.com/dait4sfc5/image/upload/v1740654071/3d-contemporary-living-room-interior-modern-furniture_axav0n.jpg",
          }}
          style={{
            width: "100%",
            height: 250,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        {/* Section Information */}
        <View style={styles.container_information}>
          {/* Section  Prix*/}
          <View style={styles.container_prix}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.prix}>{item.prix} F cfa</Text>
              <Text style={{ color: "grey" }}> / mois</Text>
            </View>
            <MaterialIcons
              name="favorite-outline"
              size={24}
              color={Colors.primary}
            />
          </View>

          <Text style={{ fontSize: 25, fontWeight: "500" }}>{item.titre}</Text>

          {/* Section Adresse */}
          <View style={styles.container_adresse}>
            <Entypo name="location-pin" size={30} color={Colors.primary} />
            <Text style={{ color: "grey" }}>{item.adresse}</Text>
          </View>

          {/* Section Detail  */}
          <View style={styles.container_detail}>
            <View style={styles.detail}>
              <Ionicons name="bed-outline" size={24} color={Colors.primary} />
              <Text> {item.nbre_chambre} Chambres</Text>
            </View>
            <View style={styles.detail}>
              <Ionicons name="bed-outline" size={24} color={Colors.primary} />
              <Text> {item.nbre_salle_bains} Salle de bains</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Visite virtuelle section */}

      <View style={styles.container_virtuelle}>
        <Pressable
          style={styles.button_virtuelle}
          onPress={() => alert("tu as clique ")}
        >
          <MaterialCommunityIcons
            name="camera-marker-outline"
            size={24}
            color={Colors.light}
          />
          <Text style={{ color: Colors.light }}>Visite Virtuelle</Text>
        </Pressable>
        {/* Section triangle */}

        <View style={styles.triangle}></View>
      </View>
    </View>
  );
};

export default AppartementItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",

    height: 450,
    width: 350,
    // backgroundColor: "orange",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.light,
  },

  container_information: {
    padding: 20,
    flexDirection: "column",
    gap: 20,
  },

  container_adresse: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "orange",
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
    letterSpacing: 1,
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

  container_virtuelle: {
    position: "absolute",
    left: -10,
    top: "50%",
    borderRadius: 10,
  },

  button_virtuelle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    backgroundColor: Colors.primary,
  },
  triangle: {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 10, // Largeur du triangle
    borderTopWidth: 10, // Hauteur du triangle
    borderLeftColor: "transparent",
    borderTopColor: "#5655D5",
  },
});
