import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import LogoHabits from "../assets/logo.svg";

export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <LogoHabits />

      <TouchableOpacity
        activeOpacity={0.7}
        className="py-3 px-4 flex flex-row items-center justify-center border border-violet-500 rounded-lg"
      >
        <Feather name="plus" color={colors.violet[500]} size={20} />

        <Text className="ml-3 font-semibold text-white text-base">Novo</Text>
      </TouchableOpacity>
    </View>
  );
}
