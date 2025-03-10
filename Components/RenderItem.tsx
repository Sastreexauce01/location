import { Text, View ,StyleSheet} from "react-native";
import { Colors } from "./Colors";
type Props = {
  item: {
    icone: JSX.Element; // Type pour une icône React Native
    title: string;
  };
};

export default function RenderItem({ item }: Props) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
      {item.icone}
      <Text style={{ marginLeft: 10, fontSize: 16 }}>{item.title}</Text>
    </View>
  );
}


const styles=StyleSheet.create({

    container:{

    },
});