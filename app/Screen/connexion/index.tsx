import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "expo-image";
import { Colors } from "@/Components/Colors";
import { Link } from "expo-router";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const login = () => {
  const [emailValue, setemailValue] = useState<string>(
    "sastreexauce01@gmail.com"
  );

  return (
    
     <View  
    style={styles.container}>
     
      <Image
        source={{
          uri: "https://res.cloudinary.com/dait4sfc5/image/upload/v1741799422/Banniere_login_ij56s0.png",
        }}
        style={styles.image}
      />
      {/* Section de input */}
      <View>
        <View style={styles.container_input}>
          <MaterialIcons name="email" size={24} color={Colors.primary} />
         
          <TextInput
            style={styles.input}
            onChangeText={setemailValue}
            value={emailValue}
          />
         

        </View>

        <View style={styles.container_inscription}>
          <Text style={{ color: Colors.dark }}>Vous n'avez pas de compte?</Text>
          <Link href={"../Screen/inscription"} asChild>
            <Text style={{ color: Colors.primary }}>Inscrivez vous ici</Text>
          </Link>
        </View>
      </View>
    

    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "orange",
    paddingVertical: 100,
    flex: 1,
  },

  image: {
    height: 200,
    width: "100%",
    justifyContent: "flex-start",
  },

  container_inscription: {
    flexDirection: "row",
    gap: 4,
    color: Colors.dark,
  },

  container_input: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    padding: 2,
    borderColor: Colors.primary,
  },

  input: {
    height: 20,
    width: 90,
    backgroundColor: Colors.light,
  },
});
