import {
  Entypo,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { Colors } from "@/Components/Colors";
export const Data_setting = [
  {
    icone: <FontAwesome5 name="crown" size={24} color={Colors.primary} />,
    title: "Abonnement",
  },
  {
    icone: <MaterialIcons name="bar-chart" size={24} color={Colors.primary} />,
    title: "Statistiques",
  },
  {
    icone: (
      <Ionicons name="notifications-outline" size={24} color={Colors.primary} />
    ),
    title: "Notifications",
  },
  {
    icone: <Entypo name="language" size={24} color={Colors.primary} />,
    title: "Langue",
  },
];

export const Data_support = [
  {
    icone: <Entypo name="help" size={24} color={Colors.primary} />,
    title: "Centre d'aide",
  },
  {
    icone: <MaterialIcons name="bug-report" size={24} color={Colors.primary} />,
    title: "Rapport de bug",
  },
];

export const Data_Annonces=[
  {
    
  }
]