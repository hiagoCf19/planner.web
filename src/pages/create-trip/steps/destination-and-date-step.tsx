import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  setIsGuestsInputOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DestinationAndDateStep = ({
  isGuestsInputOpen,
  setIsGuestsInputOpen
}: DestinationAndDateStepProps) => {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="text-zinc-400 size-5" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai" className="bg-transparent text-lg placeholder:-zinc-400 outline-none flex-1" />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="text-zinc-400 size-5" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
      </div>
      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen
        ? <button
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
          onClick={() => setIsGuestsInputOpen(false)}>
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
        : <button
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
          onClick={() => setIsGuestsInputOpen(true)}>
          Continuar
          <ArrowRight className="size-5" />
        </button>}
    </div>
  );
}

export default DestinationAndDateStep;