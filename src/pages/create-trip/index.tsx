import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import InviteGuestsModal from "./invite-guests-modal";
import ConfirmTripModal from "./confirm-trip-modal";
import DestinationAndDateStep from "./steps/destination-and-date-step";
import InviteGuestsStep from "./steps/invite-guests-step";

function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    'hiagoferreira@gmail.com', 'invnite@invite.com'
  ])
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const addNewEmailToInvite = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get('email')?.toString();
    if (!email) {
      return;
    }
    if (emailsToInvite.includes(email)) {
      return;
      // adicionar mensagem de email já convidado
    }
    setEmailsToInvite([
      ...emailsToInvite, email
    ])
    e.currentTarget.reset();

  }
  const removeEmailFromInvite = (emailToRemove: string) => {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmailList)
  }
  const createTrip = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/trips/123")
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg ">Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep isGuestsInputOpen={isGuestsInputOpen} setIsGuestsInputOpen={setIsGuestsInputOpen} />
          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              setIsConfirmTripModalOpen={setIsConfirmTripModalOpen}
              setIsGuestsModalOpen={setIsGuestsModalOpen} />
          )}
        </div>
        <p className="text-sm text-zinc-500 ">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />com nossos <a href="#" className="text-zinc-300 underline">
          termos de uso </a> e
          <a href="#" className="text-zinc-300 underline" > políticas de privacidade.
          </a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          setIsGuestsModalOpen={setIsGuestsModalOpen}
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          createTrip={createTrip}
          setIsConfirmTripModalOpen={setIsConfirmTripModalOpen} />
      )}

    </div>
  )
}

export default CreateTripPage