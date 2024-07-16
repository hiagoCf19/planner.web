import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import Button from "../../components/button";


interface InviteGuestsModalProps {
  setIsGuestsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  removeEmailFromInvite: (emailToRemove: string) => void;
  addNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void;
  emailsToInvite: string[]

}

const InviteGuestsModal = ({
  setIsGuestsModalOpen,
  emailsToInvite,
  removeEmailFromInvite,
  addNewEmailToInvite,
}: InviteGuestsModalProps) => {



  return (
    <div className="fixed inset-0 bg-black/90 sm:bg-black/60 flex sm:items-center justify-center items-end ">
      <div className="sm:w-[640px] h-[60vh]  sm:h-auto sm:rounded-xl py-5 sm:px-6 px-4 shadow-shape bg-zinc-900 space-y-5  ">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="tetx-lg font-semibold">Selecionar convidados</h2>
            <button type="button" onClick={() => setIsGuestsModalOpen(false)}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.
          </p>
        </div>
        {/* map da lista de emails */}
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.length > 0 ? (
            emailsToInvite.map((email, i) => (
              <div key={i} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">{email}</span>
                <button>
                  <X className="size-4 text-zinc-400" onClick={() => removeEmailFromInvite(email)} />
                </button>

              </div>
            ))
          ) : (
            <p className="text-center w-full text-zinc-500 text-sm">Você ainda não convidou ninguém para viajar...</p>
          )}
        </div>
        <div className="w-full h-px bg-zinc-800 hidden sm:block" />
        <form
          onSubmit={addNewEmailToInvite}
          className="sm:p-2.5 sm:bg-zinc-950 sm:border border-zinc-800 rounded-lg sm:flex items-center gap-2 fixed sm:relative bottom-0 inset-x-0 mx-4 sm:mx-0 space-y-3 sm:space-y-0 py-4 "
        >
          <div className="sm:px-2 flex items-center gap-2 flex-1 p-3.5  bg-zinc-950 sm:py-0 border sm:border-none border-zinc-800 rounded-lg ">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="text-zinc-400 bg-transparent outline-none flex-1 text-lg "
            />
          </div>
          <div className="sm:w-min">
            <Button
              type="submit"
              size="full"
            >
              Convidar
              <Plus className="size-5" />
            </Button>
          </div>
        </form>

      </div>

    </div>
  );
}

export default InviteGuestsModal;