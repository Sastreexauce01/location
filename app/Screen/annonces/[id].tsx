import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Data_Appartements from "@/Data/data-appartements.json";
import { Colors } from "@/Components/Colors";
export default function DetailsAnnonce() {
  const { id } = useLocalSearchParams();
  const item = Data_Appartements.find(
    (annonce) => annonce.id.toString() === id
  );

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Annonce introuvable</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Section Caroussel image */}
      {/* Section Titre */}
      {/* Section Adress */}
      {/* Section Acessibilite */}
      {/* Section Description */}
      {/* Section Maps */}
      {/* Section Prendre Contact */}
      
      <Image source={{ uri: item.image[0] }} style={styles.image} />
      <Text style={styles.title}>{item.titre}</Text>
      <Text style={styles.date}>Publié le: {item.date_creation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 350,
  
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
});
