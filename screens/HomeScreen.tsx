import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        <TouchableOpacity className="absolute z-50 top-5 right-10 items-center">
          <Ionicons name="person-circle" color="#E5962D" size={30} />
          <Text className="text-center text-[#E5962D]">UPGRADE</Text>
        </TouchableOpacity>

        <Image className="w-full h-64" source={{ uri: "https://i.imgur.com/e14NE49.png" }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
