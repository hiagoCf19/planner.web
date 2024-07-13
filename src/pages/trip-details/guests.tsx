import { CircleDashed, UserCog } from "lucide-react";

const Guests = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-3">
        {/* links */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Joao Generico
            </span>
            <span className="block text-xs text-zinc-400 truncate">
              joao@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />

        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Maria Generica
            </span>
            <span className="block text-xs text-zinc-400 truncate">
              maria@yahoo.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />

        </div>
      </div>
      <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 " >
        Gerenciar convidados
        <UserCog className="size-5" />
      </button>
    </div>
  );
}

export default Guests;