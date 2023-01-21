import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";

import cx from "clsx";

interface HabitySquareProps {
  completed: number;
  amount: number;
}

export function HabitySquare({ amount, completed }: HabitySquareProps) {
  const completedPercentage = Math.round((completed / amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={cx("h-10 w-10  rounded-lg", {
          "bg-zinc-900 border-2 border-zinc-800": completedPercentage === 0,
          "bg-violet-900 border-violet-700":
            completedPercentage > 0 && completedPercentage < 20,
          "bg-violet-800 border-violet-600":
            completedPercentage >= 20 && completedPercentage < 40,
          "bg-violet-700 border-violet-500":
            completedPercentage >= 40 && completedPercentage < 60,
          "bg-violet-600 border-violet-500":
            completedPercentage >= 60 && completedPercentage < 80,
          "bg-violet-500 border-violet-400": completedPercentage >= 80
        })}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[374px] p-6 flex flex-col bg-zinc-900 rounded-2xl shadow-md shadow-black">
          <span className="font-semibold text-base text-zinc-400">
            terça-feira
          </span>
          <span className="text-3xl text-white font-extrabold leading-tight">
            02/01
          </span>

          <ProgressBar progress={completedPercentage} />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
