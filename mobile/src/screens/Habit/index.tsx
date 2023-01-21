import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { View, Text, ScrollView } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Checkbox } from "../../components/Checkbox";
import { ProgressBar } from "../../components/ProgressBar";

interface RouteParam {
  date: string;
}

export function Habit() {
  const route = useRoute();

  const { date } = route.params as RouteParam;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("DD/MM");
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 text-base font-semibold lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-3xl font-extrabold text-white">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={90} />

        <View className="mt-6">
          <Checkbox checked={false} title="Exercitar" />
          <Checkbox checked={false} title="10 min de leitura" />
        </View>
      </ScrollView>
    </View>
  );
}
