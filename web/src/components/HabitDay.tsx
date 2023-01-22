import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';
import clsx from 'clsx';

interface Props {
  completed: number;
  amount: number;
}

export function HabitDay({ completed, amount }: Props) {
  const completedPercentage = Math.round((amount / completed) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          'w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg',
          {
            'bg-zinc-900 border-2 border-zinc-800': completedPercentage === 0,
            'bg-violet-900 border-violet-800':
              completedPercentage >= 0 && completedPercentage < 20,
            'bg-violet-800 border-violet-700':
              completedPercentage >= 20 && completedPercentage < 40,
            'bg-violet-700 border-violet-600':
              completedPercentage >= 40 && completedPercentage < 60,
            'bg-violet-600 border-violet-500':
              completedPercentage >= 60 && completedPercentage < 80,

            'bg-violet-500 border-violet-400': completedPercentage >= 80,
          }
        )}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font text-zinc-400">TODO</span>
          <span className="mt-1 font-semibold leading-tight text-3xl">
            20/12
          </span>

          <ProgressBar progress={5} />

          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
