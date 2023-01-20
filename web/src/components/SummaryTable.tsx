import { HabitDay } from './HabitDay';
import { NextDay } from './NextDay';
import { generateDatesFromYearBeginning } from '../utils/generateDatesFromYearBeginning';
import { maxDaysInMonth } from '../utils/maxDaysInMonth';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const summaryDates = generateDatesFromYearBeginning();

const minSummaryDatesSize = maxDaysInMonth();
const amountOfDaysToFill = minSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="flex justify-between divide-x divide-violet-500">
      <div className="flex p-8">
        <div className="grid grid-rows-7 grid-flow-row gap-8 pr-8">
          {weekDays.map((day, index) => (
            <div
              key={index.toString()}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-rows-7 grid-flow-col gap-8">
          {summaryDates.map((date) => (
            <HabitDay key={date.toString()} />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <NextDay key={index} />
            ))}
        </div>
      </div>

      <div className="w-full p-5">TODO</div>
    </div>
  );
  // return (
  //   <div className="w-full flex justify-between ">
  //    </div>
  // );
}
