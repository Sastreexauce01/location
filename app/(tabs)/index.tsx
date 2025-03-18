import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Pressable,
  FlatList
} from "react-native";

import { Colors } from "@/Components/Colors";
import { Link } from "expo-router";
import { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Data_Appartements from "@/Data/data-appartements.json";
import AppartementItem from "@/Components/AppartementItem";

export default function Index() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        {/* section input  */}
        <View style={styles.container_input}>
          <EvilIcons name="location" size={24} color={Colors.dark} />
          <TextInput style={styles.input} placeholder="Destinations" />
        </View>

        {/* Section Button */}



        {/* section Appartement */}

        <FlatList
          data={Data_Appartements}
          contentContainerStyle={styles.flatListContainer}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item=>item.id.toString()}
          renderItem={({item})=> <AppartementItem item={item} />}
        />



        <Link href="../Screen/connexion"> Page de connexion</Link>
        <Link href="../Screen/inscription"> Page d'inscription</Link>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  container_input: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 20,
    padding: 8,
    borderColor: Colors.dark,
    marginBottom: 20, // Un peu d'espace sous l'input
  },
  input: {
    height: 30, // Augmenter la hauteur pour plus de confort
    width: "80%", // Augmenter la largeur
    //backgroundColor: Colors.light,
    paddingHorizontal: 10,
  },

  flatListContainer:{
    gap: 25,
    marginLeft: 15,
    paddingRight: 20,
  },
});
