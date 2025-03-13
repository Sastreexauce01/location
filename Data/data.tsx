import {
  Entypo,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import { Colors } from "@/Components/Colors";
export const Data_setting = [
  {
    icone: <FontAwesome5 name="crown" size={20} color={Colors.primary} />,
    title: "Abonnement",
  },
  {
    icone: <MaterialIcons name="bar-chart" size={20} color={Colors.primary} />,
    title: "Statistiques",
  },
  {
    icone: (
      <Ionicons name="notifications-outline" size={20} color={Colors.primary} />
    ),
    title: "Notifications",
  },
  {
    icone: <Entypo name="language" size={20} color={Colors.primary} />,
    title: "Langue",
  },
];

export const Data_support = [
  {
    icone: <Entypo name="help" size={20} color={Colors.primary} />,
    title: "Centre d'aide",
  },
  {
    icone: <MaterialIcons name="bug-report" size={20} color={Colors.primary} />,
    title: "Rapport de bug",
  },
];

export const Data_Annonces=[
  {
    
  }
]

export const icone_acessibilite=[
  {
    title:"Piscine",
    icone:<FontAwesome5 name="swimming-pool" size={20} color={Colors.dark} />
  },
  {
    title:"Television",
    icone:<FontAwesome name="television"  size={20} color={Colors.dark}  />
  },
  {
    title:"Wifi",
    icone:<FontAwesome5 name="wifi" size={20} color={Colors.dark}  />
  },
  {
    title:"Plage",
    icone:<FontAwesome5 name="swimmer"  size={20} color={Colors.dark}  />
  },
  {
    title:"Terrasse",
    icone:<FontAwesome6 name="people-roof" size={20} color={Colors.dark}  />
  },
  {
    title:"Parking",
    icone:<FontAwesome5 name="parking" size={20} color={Colors.dark} />
  },
  {
    title:"Climatisation",
    icone:<MaterialCommunityIcons name="air-filter" size={20} color={Colors.dark} />
  },
  {
    title:"Cuisine",
    icone:<FontAwesome6 name="kitchen-set" size={20} color={Colors.dark} />
  },
]