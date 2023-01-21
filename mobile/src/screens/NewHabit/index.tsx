import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { BackButton } from "../../components/BackButton";
import { Checkbox } from "../../components/Checkbox";

import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
];

export function NewHabit() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState =>
        prevState.filter(weekDay => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white text-base font-semibold">
          Qual seu compromentimento?
        </Text>

        <TextInput
          placeholder="Exercícios, dormir bem, etc..."
          className="mt-3 h-12 pl-4 rounded-lg bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-60 transition-colors"
          placeholderTextColor={colors.zinc[400]}
        />

        <View className="mt-4 mb-6">
          <Text className="font-semibold mb-3 text-white text-base">
            Qual a recorrência?
          </Text>

          {availableWeekDays.map((availableWeekDay, index) => {
            return (
              <Checkbox
                key={index}
                title={availableWeekDay}
                checked={weekDays.includes(index)}
                onPress={() => handleToggleWeekDay(index)}
              />
            );
          })}
        </View>

        <TouchableOpacity className="h-14 flex-row items-center justify-center gap-3  bg-green-600 rounded-lg">
          <Feather name="check" size={20} color={colors.white} />

          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
