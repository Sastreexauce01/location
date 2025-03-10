import { Text, View, StyleSheet, ImageBackground ,Pressable} from "react-native";
import { Colors } from "./Colors";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

type Props = {
  item: {
    id: number;
    titre: string;
    image: string[];
    date_creation: string;
    // Tableau de chaînes (URLs d'images)
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
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <SimpleLineIcons
            name="options-vertical"
            size={20}
            color={Colors.light}
          />
          <Text>Location</Text>
        </View>
      </ImageBackground>

      <View style={styles.container_information}>
        <Text style={styles.title}>{item.titre}</Text>
        <View style={styles.container_date}>
          <MaterialIcons name="update" size={15} color={Colors.primary} />
          <Text style={{ fontSize: 10, color: "black", opacity: 0.5 }}>
            {item.date_creation}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin:5,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#E0DEF7",
    height: 200,
    width: "45%",
    justifyContent: "space-between",
  },
  image: {
    height: 150,
    width: "auto",
    justifyContent: "flex-end",
  },
  container_information: {
    padding: 2,
    flexDirection: "column",
    gap: 2,
    justifyContent: "space-between",
  },
  container_date: {
    flexDirection: "row",
    alignItems:'center',
    gap:2,
  },
  title: {
    color: Colors.dark,
    fontSize: 20,
    fontWeight: "semibold",
  },
});
