import { Plus, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { NewHabitForm } from "./NewHabitForm";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src="/logo.svg" alt="" />

      <Dialog.Root>
        <Dialog.Trigger>
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
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="bg-background/80 fixed inset-0 w-screen h-screen" />
          <Dialog.Content className="w-full max-w-md bg-zinc-900 absolute top-1/2 left-1/2 rounded-2xl p-10 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="font-extrabold text-3xl text-white">
              Criar hábito
            </Dialog.Title>

            <NewHabitForm />

            <Dialog.Close>
              <X
                size={20}
                className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200 transition-colors"
                aria-label="Fechar modal"
              />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
