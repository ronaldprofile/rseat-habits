import {
  TouchableOpacity,
  Dimensions,
  TouchableOpacityProps
} from "react-native";

export const DAYS_PER_WEEK = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const HABIT_MARGIN_BETWEEN = 8;
export const HABIT_SIZE =
  Dimensions.get("screen").width / DAYS_PER_WEEK -
  (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitSquareProps extends TouchableOpacityProps {}

export function HabitSquare(props: HabitSquareProps) {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      className="m-1 bg-zinc-900 border-2 border-zinc-800 rounded-lg"
      style={{
        width: HABIT_SIZE,
        height: HABIT_SIZE
      }}
    />
  );
}
