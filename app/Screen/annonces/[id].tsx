import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import Entypo from "@expo/vector-icons/Entypo";

import Data_Appartements from "@/Data/data-appartements.json";
import Acessibilite from "@/Components/Acessibilite";
import { Colors } from "@/Components/Colors";

export default function DetailsAnnonce() {
  //Recuperation de l'id dans le lien
  const { id } = useLocalSearchParams();
  const item = Data_Appartements.find(
    (annonce) => annonce.id.toString() === id
  );

  const [isLoading, setIsLoading] = useState(true); // État de chargement
  const [modalVisible, setModalVisible] = useState(false); // État du modal

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Annonce introuvable</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.scrollContainer]}
        showsVerticalScrollIndicator={false}
      >
        {/* Section Caroussel image */}
        <Image source={{ uri: item.image[0] }} style={styles.image} />

        <View style={styles.container_information}>
          {/* Section Titre */}
          <Text style={styles.title}>{item.titre}</Text>

          {/* Section Adress */}
          <View style={styles.container_adresse}>
            <Entypo name="location" size={24} color={Colors.primary} />
            <Text style={{ fontSize: 15 }}> {item.adresse} </Text>
          </View>

          {/* Section Acessibilite */}
          <View style={styles.container_accessibilite}>
            {Array.isArray(item.accessibilite) ? (
              item.accessibilite.map((acces, index) => (
                <Acessibilite acces={acces} key={index} />
              ))
            ) : (
              <Text>{item.accessibilite}</Text> // Si c'est une chaîne de caractères
            )}
          </View>

          {/* Section Description */}
          <View>
            <Text
              style={{ fontSize: 25, fontWeight: "500", color: Colors.dark }}
            >
              Description
            </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>

          {/* Section Maps */}
          <View>
            <Text>Maps</Text>
          </View>

          <Text style={styles.date}>Publié le: {item.date_creation}</Text>
        </View>
      </ScrollView>

      {/* Section Prendre Contact */}
      <View style={styles.container_contact}>
        <Text style={{color:Colors.dark, fontSize:20, fontWeight:'500'}}>{item.prix}F cfa /mois</Text>
        <Pressable
          style={styles.button}
          onPress={() => alert("ok sur whatsapp")}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Prendre contact</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  scrollContainer: {
    paddingBottom: 100, // Pour éviter que les annonces ne soient cachées par le bouton
  },

  image: {
    width: "100%",
    height: 350,

    marginBottom: 20,
  },
  container_information: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
  },
  container_accessibilite: {
    flexDirection: "row",
    flexWrap: "wrap",
    //justifyContent:'space-between',
    columnGap: 40,
    rowGap: 20,
    //backgroundColor:'red',
  },

  description: {
    fontSize: 16,
    color: "gray",
    lineHeight: 24, // Pour une meilleure lisibilité
    marginBottom: 15,
    textAlign: "justify",
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.dark,
  },

  container_adresse: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  date: {
    fontSize: 14,
    color: "gray",
  },

  container_contact: {
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    height: 100,
    borderTopWidth: 1,
    borderColor: Colors.dark,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingBottom:30,
    zIndex: 2,
    
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    
  },
});
