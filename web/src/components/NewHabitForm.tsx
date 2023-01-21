import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="w-full mt-6">
      <div className="flex flex-col gap-3">
        <label
          htmlFor="title"
          className="text-base font-semibold leading-tight"
        >
          Qual seu compromentimento?
        </label>
        <input
          type="text"
          id="title"
          placeholder="Exercícios, dormir bem, etc..."
          autoFocus
          className="px-4 h-[52px] border-2 border-zinc-800 bg-zinc-800 placeholder:text-zinc-400 placeholder:font-normal rounded-lg focus:border-green-600 transition-colors outline-none"
        />
      </div>

      <div className="mt-4 mb-6">
        <label htmlFor="" className="text-base font-semibold leading-tight">
          Qual a recorrência?
        </label>
      </div>

      <button
        type="submit"
        className="w-full h-[52px] flex items-center justify-center gap-3 text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
