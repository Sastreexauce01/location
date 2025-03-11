import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import Data_Appartements from "@/Data/data-appartements.json";

export default function DetailsAnnonce() {
  const { id } = useLocalSearchParams();
  const item = Data_Appartements.find((annonce) => annonce.id.toString() === id);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Annonce introuvable</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
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
