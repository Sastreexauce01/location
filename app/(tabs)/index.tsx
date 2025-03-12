import { Text, View } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> Page Acceuil</Text>
      <Link href="../Screen/connexion"> Page de connexion</Link>
      <Link href="../Screen/inscription"> Page d'inscription</Link>

    </View>
  );
}
