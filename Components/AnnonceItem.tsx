import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Colors } from "./Colors";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

type Props = {
  item: {
    id: number;
    titre: string;
    image: string[];
    date_creation: string;
  };
};

export const AnnonceItem = ({ item }: Props) => {
  const [isLoading, setIsLoading] = useState(true); // État de chargement
  const [modalVisible, setModalVisible] = useState(false); // État du modal

  return (
    <View style={styles.container}>
      <Pressable onPress={() => alert("Tu as cliqué")}>
        {/* Image avec indicateur de chargement */}
        <View style={styles.imageContainer}>
          {isLoading && (
            <ActivityIndicator
              size="large"
              color={Colors.primary}
              style={styles.loader}
            />
          )}
          <ImageBackground
            source={{ uri: item.image[0] }}
            style={styles.image}
            resizeMode="cover"
            onLoadEnd={() => setIsLoading(false)}
          >
            <View style={styles.overlay}>
              <Text style={styles.tag}>Location</Text>
              <Pressable onPress={() => setModalVisible(true)}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={25}
                  color={Colors.light}
                />
              </Pressable>
            </View>
          </ImageBackground>
        </View>

        {/* Informations sur l'annonce */}
        <View style={styles.container_information}>
          <Text style={styles.title}>{item.titre}</Text>
          <View style={styles.container_date}>
            <MaterialIcons name="update" size={15} color={Colors.primary} />
            <Text style={styles.date}>{item.date_creation}</Text>
          </View>
        </View>
      </Pressable>

      {/* MODAL */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => alert("Voir détails")}
            >
              <Text style={styles.modalText}>Voir détails</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => alert("Modifier")}
            >
              <Text style={styles.modalText}>Modifier</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.modalButton, styles.deleteButton]}
              onPress={() => alert("Supprimer")}
            >
              <Text style={[styles.modalText, { color: "red" }]}>
                Supprimer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#E0DEF7",
    height: 200,
    width: "45%",
    justifyContent: "space-between",
  },

  imageContainer: {
    position: "relative",
    height: 150,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },

  loader: {
    position: "absolute",
    zIndex: 1,
  },

  image: {
    height: 150,
    width: "100%",
    justifyContent: "flex-start",
  },

  overlay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingHorizontal: 2,
  },

  tag: {
    backgroundColor: Colors.light,
    padding: 4,
    borderRadius: 5,
  },

  container_information: {
    padding: 2,
    flexDirection: "column",
    gap: 10,
  },

  container_date: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },

  title: {
    color: Colors.dark,
    fontSize: 20,
    fontWeight: "600",
  },

  date: {
    fontSize: 10,
    color: "black",
    opacity: 0.5,
  },

  /* Styles du modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },

  modalButton: {
    width: "100%",
    padding: 10,
    alignItems: "center",
  },

  deleteButton: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    marginTop: 10,
  },

  modalText: {
    fontSize: 16,
    color: Colors.dark,
  },

  closeText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.primary,
  },
});
