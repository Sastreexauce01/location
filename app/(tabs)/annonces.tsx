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
      <View style={styles.container_appartement}>

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

  container_appartement: {
    flexDirection: "row",
    gap:10, 
     //  backgroundColor:"orange",

    justifyContent:'space-between',
    flexWrap:'wrap'
   
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
