import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useRevenueCat } from "../hooks/useRevenueCat";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
};

const ActionRow = ({ title, screen, color, requiresPro, icon, vertical }: Props) => {
  const navigation = useNavigation<NavigationProps>();
  const { isProMember } = useRevenueCat();

  const lockedForProMembers = requiresPro && !isProMember;

  return (
    <TouchableOpacity
      onPress={() => (lockedForProMembers ? navigation.navigate("Paywall") : navigation.navigate(screen))}
      className={`flex flex-1 m-2 items-center justify-center rounded-lg py-6 space-x-2 ${
        vertical ? "flex-col" : "flex-row"
      }`}
      style={{ backgroundColor: lockedForProMembers ? "gray" : color }}
    >
      {lockedForProMembers && (
        <View className="absolute top-4 right-4 rotate-12 items-center">
          <Ionicons name="lock-closed" size={20} color="white" />
          <Text className="text-white font-extrabold">PRO</Text>
        </View>
      )}
      <Ionicons name={icon} color="white" size={30} />
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
