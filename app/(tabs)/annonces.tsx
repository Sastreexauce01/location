import { Text, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Annonces() {
  return (
    <View>





      <Text>Mes annonces </Text>

      <View>
      <FontAwesome6 name="add" size={24} color="black" />
      <Text>Creer un annonce</Text>
      </View>
    </View>
  );
}
