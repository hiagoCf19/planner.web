import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  setIsGuestsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  emailsToInvite: string[],
  setIsConfirmTripModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const InviteGuestsStep = ({
  emailsToInvite,
  setIsGuestsModalOpen,
  setIsConfirmTripModalOpen
}: InviteGuestsStepProps) => {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        className="flex items-center gap-2 flex-1"
        onClick={() => setIsGuestsModalOpen(true)}
      >
        <UserRoundPlus className="text-zinc-400 size-5" />
        {emailsToInvite.length > 0
          ? (
            <span className="text-zinc-100 text-lg flex-1 text-left">{emailsToInvite.length} pessoa(s) convidada(s)
            </span>
          )
          : (
            <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>
          )
        }

      </button>

      <div className="w-px h-6 bg-zinc-800" />
      <button
        onClick={() => setIsConfirmTripModalOpen(true)}
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
}

export default InviteGuestsStep;