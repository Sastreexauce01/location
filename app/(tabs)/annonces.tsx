import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { Colors } from "@/Components/Colors";
import Data_Appartements from "@/Data/data-appartements.json";
import Button from "@/Components/Button";
import { AnnonceItem } from "@/Components/AnnonceItem";

export default function Annonces() {
  return (
    <View style={styles.container}>
      {/* Scrollable Section */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container_appartement}>
          {Data_Appartements.map((item) => (
            <AnnonceItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>

      {/* Fixed Button */}
      <View style={styles.buttonContainer}>
        <Button />
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
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 100, // Pour éviter que les annonces ne soient cachées par le bouton
  },

  container_appartement: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 10,
    alignItems: "center",
  },
});
