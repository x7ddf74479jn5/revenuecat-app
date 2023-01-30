import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { useRevenueCat } from "../hooks/useRevenueCat";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { isProMember } = useRevenueCat();

  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Paywall")}
          className="absolute z-50 top-5 right-10 items-center"
        >
          <Ionicons name="person-circle" color="#E5962D" size={30} />
          <Text className="text-center text-[#E5962D]">{isProMember ? "PRO" : "UPGRADE"}</Text>
        </TouchableOpacity>

        <Image className="w-full h-64" source={{ uri: "https://i.imgur.com/e14NE49.png" }} />

        <View className="mx-5">
          <View className="flex-row justify-between space-x-2">
            <ActionRow title="Track Workout" screen="Demo" color="#E5962D" icon="fitness" vertical />
            <ActionRow title="Browse Workout" screen="Demo" color="#1982C4" icon="library" vertical />
          </View>

          <ActionRow title="Connect with Friends" screen="Demo" color="#F44174" icon="share-social" />
          <ActionRow title="Add an Exercise" screen="Demo" color="#8AC926" icon="add-circle" requiresPro />
          <ActionRow title="Create a Routine" screen="Demo" color="#C03221" icon="md-time" requiresPro />
          <ActionRow title="Join Challenges" screen="Demo" color="#23967F" icon="trophy" requiresPro />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
