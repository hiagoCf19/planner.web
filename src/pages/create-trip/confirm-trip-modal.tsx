import { User, X } from "lucide-react";
import { FormEvent } from "react";
import Button from "../../components/button";

interface ConfirmTripModalProps {
  setIsConfirmTripModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  createTrip: (e: FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void
}
const ConfirmTripModal = ({
  setIsConfirmTripModalOpen,
  createTrip,
  setOwnerName,
  setOwnerEmail
}: ConfirmTripModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="tetx-lg font-semibold">Confirmar criação de viagem </h2>
            <button type="button" onClick={() => setIsConfirmTripModalOpen(false)}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold"> Florianópolis, Brasil </span> nas datas de <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024 </span> preencha seus dados abaixo:
          </p>
        </div>

        <form
          onSubmit={createTrip}
          className="space-y-3"
        >
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              type="name"
              name="name"
              placeholder="Digite seu nome completo"
              onChange={e => setOwnerName(e.target.value)}
              className="text-zinc-400 bg-transparent outline-none flex-1 text-lg "
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail pessoal"
              onChange={e => setOwnerEmail(e.target.value)}
              className="text-zinc-400 bg-transparent outline-none flex-1 text-lg "
            />
          </div>
          <Button
            type="submit"
            size="full"

          >
            Confirmar criação da viagem
          </Button>
        </form>
      </div>

    </div>
  );
}

export default ConfirmTripModal;