import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../App";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Demo">;

const DemoScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView className="bg-[#E5962D] flex-1">
      <TouchableOpacity onPress={navigation.goBack} className="flex-row items-center p-5">
        <Ionicons name="arrow-back" color="white" size={30} />

        <Text className="text-white">Go Back</Text>
      </TouchableOpacity>

      <View className="flex-1 items-center justify-center px-10">
        <Text className="text-white text-2xl font-extrabold">Hooray!</Text>
        <Text className="text-white text-2xl font-extrabold mb-20">You have access to this feature</Text>
        <Ionicons name="build-outline" size={200} color="white" />
        <View className="-mt-16 -ml-8">
          <Ionicons name="checkmark-circle-sharp" size={60} color=" #96F550" />
        </View>
        <Text className="text-white mt-10 flex-1 font-bold text-center">
          This is where you create a new screen & change the rest of the app so the navigation is as follows:
          navigation.navigate('ThePageYouWant')
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DemoScreen;
