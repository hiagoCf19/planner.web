import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import Button from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from 'date-fns'
import "react-day-picker/dist/style.css";
import InviteGuestsStep from "./invite-guests-step";
interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  eventStartAndEndDates: DateRange | undefined;
  emailsToInvite: string[];
  setIsConfirmTripModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGuestsInputOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGuestsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}
const DestinationAndDateStep = ({
  isGuestsInputOpen,
  eventStartAndEndDates,
  emailsToInvite,
  setIsConfirmTripModalOpen,
  setIsGuestsModalOpen,
  setIsGuestsInputOpen,
  setDestination,
  setEventStartAndEndDates
}: DestinationAndDateStepProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)


  const displayedDate = eventStartAndEndDates
    && eventStartAndEndDates.from
    && eventStartAndEndDates.to
    ? format(eventStartAndEndDates.from, "d ' de 'LLL")
      .concat(' até ')
      .concat(format(eventStartAndEndDates.to, "d ' de 'LLL"))
    : null
  return (
    <div className="sm:h-16 py-5 bg-zinc-900 px-4 rounded-xl flex flex-col sm:flex-row sm:items-center shadow-shape sm:gap-3 gap-5">
      <div className="flex items-center gap-2 flex-1  ">
        <MapPin className="text-zinc-400 size-5" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai"
          className="bg-transparent text-lg placeholder:-zinc-400 outline-none flex-1"
          onChange={e => setDestination(e.target.value)}
        />
      </div>
      <button
        className="flex items-center gap-2 text-left w-[240px]"
        disabled={isGuestsInputOpen}
        onClick={() => setIsDatePickerOpen(true)}
      >
        <Calendar className="text-zinc-400 size-5" />
        <span className="text-lg text-zinc-400 w-40 flex-1 truncate "
        >
          {displayedDate || 'Quando? '}
        </span>
      </button>
      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className=" rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="tetx-lg font-semibold">Selecione a data </h2>
                <button type="button" onClick={() => setIsDatePickerOpen(false)}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>

            </div>
            <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
          </div>
        </div>
      )}
      <div className="w-px h-6 bg-zinc-800 hidden sm:block " />
      {isGuestsInputOpen
        ? <Button
          variant={'secondary'}
          onClick={() => setIsGuestsInputOpen(false)}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
        : <Button

          onClick={() => setIsGuestsInputOpen(true)}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>}

      {isGuestsInputOpen && (
        <div className="sm:hidden space-y-3">
          <div className="w-full h-0.5 bg-zinc-800 rounded-full " />
          <InviteGuestsStep
            emailsToInvite={emailsToInvite}
            setIsConfirmTripModalOpen={setIsConfirmTripModalOpen}
            setIsGuestsModalOpen={setIsGuestsModalOpen} />
        </div>
      )}


    </div>
  );
}

export default DestinationAndDateStep;