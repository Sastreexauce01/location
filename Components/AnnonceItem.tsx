import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Colors } from "./Colors";

type Props = {
  item: {
    id: number;
    titre: string;
    image: string[]; // Tableau de chaînes (URLs d'images)
  };
};

export const AnnonceItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: item.image[0] }} // Prend la première image du tableau
        style={styles.image}
        resizeMode="cover"
      >
        
      </ImageBackground>
      <View style={styles.overlay}>
          <Text style={styles.title}>{item.titre}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor:Colors.light,
  },
  image: {
    height: 100,
    width:'auto',
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Assombrit l'arrière-plan pour améliorer la lisibilité
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
