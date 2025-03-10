import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/Components/Colors";
import { Data_setting, Data_support } from "@/Data/data";
import RenderItem from "@/Components/RenderItem";

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Section Information profile */}
      <View style={styles.Container_information}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Image
            source={{ uri: "https://www.w3schools.com/w3images/avatar2.png" }}
            style={styles.image}
          />
          <View style={styles.information}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>Exauce SASTRE</Text>
            <Text>sastreexauce01@gmail.com</Text>
          </View>
        </View>

        <AntDesign name="right" size={24} color={Colors.dark} />
      </View>

      {/* Section parametre */}
      <View>
        <Text>Parametre preference</Text>
        <FlatList
          data={Data_setting}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <RenderItem item={item} />}
        />
      </View>
      {/* Section Support */}
      <View>
        <Text>Support</Text>
        <FlatList
          data={Data_support}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <RenderItem item={item} />}
        />
      </View>
      {/* Section Deconnexion*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",

    marginTop: 20,
    padding: 20,
  },

  Container_information: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    padding: 8,
    borderWidth: 2,
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
});
