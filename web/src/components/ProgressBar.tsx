interface Props {
  progress: number;
}

export function ProgressBar({ progress }: Props) {
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Habit progress in this day"
        aria-valuenow={progress}
        className="h-3 rounded-xl bg-violet-600"
        style={progressStyle}
      ></div>
    </div>
  );
}
