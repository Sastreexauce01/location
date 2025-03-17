import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Data_Appartements from "@/Data/data-appartements.json";
import Acessibilite from "@/Components/Acessibilite";
import { Colors } from "@/Components/Colors";

export default function DetailsAnnonce() {
  const { id } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(true);

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
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Section Caroussel image */}
        <View style={styles.container_carousel}>
          {isLoading && (
            <ActivityIndicator
              size="large"
              color={Colors.primary}
              style={styles.loader}
            />
          )}
          <SwiperFlatList
            //autoplay
           // autoplayDelay={6}
           // autoplayLoop
            index={2}
            showPagination
            onChangeIndex={() => setIsLoading(false)}
          >
            {Array.isArray(item.image) && item.image.length > 0 ? (
              item.image.map((img, index) => (
                <View key={index} style={styles.container_image}>
                  <Image
                    source={{ uri: img }}
                    style={styles.image_carousel}
                    onLoadEnd={() => setIsLoading(false)}
                  />
                </View>
              ))
            ) : (
              <Text style={styles.noImageText}>Aucune image disponible</Text>
            )}
          </SwiperFlatList>
        </View>

        <View style={styles.container_information}>
          <Text style={styles.title}>{item.titre}</Text>

          <View style={styles.container_adresse}>
            <Entypo name="location" size={24} color={Colors.primary} />
            <Text style={styles.adresse}>{item.adresse}</Text>
          </View>

          <View style={styles.container_accessibilite}>
            {Array.isArray(item.accessibilite) ? (
              item.accessibilite.map((acces, index) => (
                <Acessibilite acces={acces} key={index} />
              ))
            ) : (
              <Text>{item.accessibilite}</Text>
            )}
          </View>

          <View>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>

          <Text style={styles.date}>Publié le: {item.date_creation}</Text>
        </View>
      </ScrollView>

      <View style={styles.container_contact}>
        <Text style={styles.prix}>{item.prix} F CFA / mois</Text>
        <Pressable
          style={styles.button}
          onPress={() => alert("Contact via WhatsApp")}
        >
          <Text style={styles.buttonText}>Prendre contact</Text>
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
    paddingBottom: 100,
  },
  container_carousel: {
    height: 450,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container_image: {
    backgroundColor: "black",
    width: 450,
  },
  image_carousel: {
    width: "100%",
    height: "100%",
  },
  loader: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 1,
  },
  noImageText: {
    textAlign: "center",
    color: "gray",
    fontSize: 16,
    marginTop: 20,
  },
  container_information: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.dark,
  },
  container_adresse: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  adresse: {
    fontSize: 15,
  },
  container_accessibilite: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 40,
    rowGap: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "500",
    color: Colors.dark,
  },
  description: {
    fontSize: 16,
    color: "gray",
    lineHeight: 24,
    textAlign: "justify",
    paddingVertical: 10,
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
    paddingBottom: 30,
  },
  prix: {
    color: Colors.dark,
    fontSize: 20,
    fontWeight: "500",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
