import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Colors } from "@/Components/Colors";
import { Link } from "expo-router";


const Inscription = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/dait4sfc5/image/upload/v1741799422/Banniere_login_ij56s0.png",
        }}
        style={styles.image}
      />
      <Text>Pge Inscription</Text>
      <Link href={"/"} asChild><Text style={{color:Colors.primary}}>Page Acceuil</Text></Link> 
      {/* Section de input */}
      <View>

        
        <View style={styles.container_inscription}>
          <Text style={{color:Colors.dark}}>Vous avez un compte ?</Text>
          <Link href={"../Screen/connexion"} asChild><Text style={{color:Colors.primary}}>Connectez vous</Text></Link> 
         
        </View>
      </View>
    </View>
  );
};

export default Inscription;

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
    color:Colors.dark,
  },
});
