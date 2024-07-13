import { CircleDashed, UserCog } from "lucide-react";
import Button from "../../components/button";

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
      <Button variant="secondary" size="full">
        Gerenciar convidados
        <UserCog className="size-5" />
      </Button>
    </div>
  );
}

export default Guests;