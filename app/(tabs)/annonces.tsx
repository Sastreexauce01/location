import { Text, View, StyleSheet } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { Colors } from "@/Components/Colors";
import Data_Appartements from "@/Data/data-appartements.json";
import Button from "@/Components/Button";
import { AnnonceItem } from "@/Components/AnnonceItem";
export default function Annonces() {
  return (
    <View style={styles.container}>
      <Text>Mes annonces </Text>

      {/* Section Button pour afficher les annonces*/}
      <View>

        {Data_Appartements.map((item)=>(
          <AnnonceItem key={item.id} item={item}/>
          
        ))}
      </View>

      {/* Section Button pour creer une annonce */}
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    flex: 1,
    padding: 20,
  },

  Container_information: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    padding: 8,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.dark,
  },

  information: {
    gap: 10,
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.dark,
  },
});
