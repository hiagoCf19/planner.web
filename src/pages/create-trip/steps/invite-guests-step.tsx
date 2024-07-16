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
    <div className="sm:h-16 sm:bg-zinc-900 sm:px-4 rounded-xl sm:flex items-center sm:shadow-shape gap-3 space-y-4 sm:space-y-0">
      <button
        type="button"
        className="flex items-center gap-2 flex-1"
        onClick={() => setIsGuestsModalOpen(true)}
      >
        <UserRoundPlus className="text-zinc-400 size-5" />
        {emailsToInvite.length > 0
          ? (
            <span className="text-zinc-100 text-lg flex-1 truncate text-left">{emailsToInvite.length} pessoa(s) convidada(s)
            </span>
          )
          : (
            <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>
          )
        }

      </button>

      <div className="w-px h-6 bg-zinc-800 hidden sm:block" />

      <button
        onClick={() => setIsConfirmTripModalOpen(true)}
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 w-full sm:w-auto justify-center">
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>

    </div>
  );
}

export default InviteGuestsStep;