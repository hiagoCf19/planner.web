import { MapPin, Calendar, Settings2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale';
interface Trip {
  id: string;
  destination: string;
  startsAt: string;
  endsAt: string;
  isConfirmed: boolean;
}
const DestinationAndDateHeader = () => {
  //  o useParams do react router tras todos os parametros que temos em nossa URL, dentro dele podemos pegar o TripId.
  const { tripId } = useParams()
  const [trip, setTrip] = useState<Trip | undefined>()

  useEffect(() => {
    api.get(`trips/${tripId}`)
      .then(response => {
        setTrip(response.data)
      })
  }, [tripId])

  const formattedDates = trip &&
    format(parseISO(trip.startsAt), "d 'de' LLL", { locale: ptBR })
      .concat(' até ')
      .concat(format(parseISO(trip.endsAt), "d 'de' LLL", { locale: ptBR }))

  return (
    <div className=" sm:px-4 px-2 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between space-x-2">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className=" text-zinc-100 text-sm sm:text-base truncate">
          {trip?.destination}
        </span>
      </div>
      <div className="flex items-center sm:gap-5 gap-2">
        <div className="flex items-center sm:gap-2 flex-1">
          <Calendar className="size-5 text-zinc-400 hidden sm:block" />
          <span className=" text-zinc-100 text-sm sm:text-base truncate">{formattedDates}</span>
        </div>
        <div className="w-px h-6 bg-zinc-800 hidden sm:block" />

        <button className="rounded-lg sm:px-5 p-1.5 font-medium flex items-center gap-2 justify-center bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
          <span className="hidden sm:block">
            Alterar local/data
          </span>
          <Settings2 className="size-5" />
        </button>
      </div>
    </div>);
}

export default DestinationAndDateHeader;