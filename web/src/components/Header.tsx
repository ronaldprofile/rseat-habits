import { Plus } from "phosphor-react";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src="/logo.svg" alt="" />
      <button
        type="button"
        className="group flex items-center gap-3 font-semibold border border-violet-500 rounded-lg py-4 px-6 hover:bg-violet-700 transition-colors"
      >
        <Plus
          size={20}
          className="text-violet-500 group-hover:text-white transition-colors"
        />
        Novo hábito
      </button>
    </div>
  );
}
