import { HabitySquare } from "./HabitSquare";
import { generateRangeDatesFromYearStart } from "../../utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateRangeDatesFromYearStart();

const EIGHTEEN_WEEKS = 18;
const DAYS_PER_WEEK = 7;

const minumumSummaryDatesSize = EIGHTEEN_WEEKS * DAYS_PER_WEEK;
const amountOfDaysToFillSummaryTable =
  minumumSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => {
          return (
            <div
              key={`${weekDay}-${index}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date: Date) => {
          return (
            <HabitySquare
              key={date.toString()}
              amount={5}
              completed={Math.round(Math.random() * 5)}
            />
          );
        })}

        {amountOfDaysToFillSummaryTable > 0 &&
          Array.from({ length: amountOfDaysToFillSummaryTable }).map(
            (_, index) => {
              return (
                <div
                  key={index}
                  className="h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
                />
              );
            }
          )}
      </div>
    </div>
  );
}
