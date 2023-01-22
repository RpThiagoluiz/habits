import { Check } from 'phosphor-react';

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        What is your new habit ?
      </label>
      <input
        id="title"
        type="text"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        placeholder="ex.Exercises, sleep well,relax, etc..."
        autoFocus
      ></input>

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        What is periodic occurrence ?
      </label>

      <button
        type="button"
        className="mt-6 rounded-lg p-4 flex items-center justify-center  gap-3 font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
