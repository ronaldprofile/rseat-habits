import { Text, View, ScrollView } from "react-native";
import {
  HabitSquare,
  HABIT_SIZE,
  DAYS_PER_WEEK
} from "../../components/HabitSquare";
import { Header } from "../../components/Header";
import { generateRangeDatesFromYearStart } from "../../utils/generate-dates-from-year-beginning";

const EIGHTEEN_WEEKS = 18;
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateRangeDatesFromYearStart();

const minumumSummaryDatesSize = EIGHTEEN_WEEKS * DAYS_PER_WEEK;
const amountOfDaysToFillSummaryTable =
  minumumSummaryDatesSize - summaryDates.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 py-16">
      <Header />

      <View className="mt-6 mb-2 flex flex-row">
        {weekDays.map((weekDay, index) => {
          return (
            <Text
              key={`${weekDay}-${index}`}
              className="mx-1 font-bold text-xl text-zinc-400"
              style={{
                width: HABIT_SIZE,
                height: HABIT_SIZE
              }}
            >
              {weekDay}
            </Text>
          );
        })}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        <View className="flex flex-row flex-wrap">
          {summaryDates.map((date: Date) => {
            return <HabitSquare key={date.toISOString()} />;
          })}

          {amountOfDaysToFillSummaryTable > 0 &&
            Array.from({ length: amountOfDaysToFillSummaryTable }).map(
              (_, index) => {
                return (
                  <View
                    key={index}
                    className="m-1 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40"
                    style={{
                      width: HABIT_SIZE,
                      height: HABIT_SIZE
                    }}
                  />
                );
              }
            )}
        </View>
      </ScrollView>
    </View>
  );
}
