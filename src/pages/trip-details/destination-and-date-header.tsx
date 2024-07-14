import { MapPin, Calendar, Settings2 } from "lucide-react";
import Button from "../../components/button";
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




  // const displayedDate = trip ? format(trip.starts_at, "d' de 'LLL").concat(' até ').concat(format(trip.ends_at, "d' de 'LLL"))
  //   : null
  const formattedDates = trip &&
    format(parseISO(trip.startsAt), "d 'de' LLL", { locale: ptBR })
      .concat(' até ')
      .concat(format(parseISO(trip.endsAt), "d 'de' LLL", { locale: ptBR }))




  return (<div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
    <div className="flex items-center gap-2">
      <MapPin className="size-5 text-zinc-400" />
      <span className=" text-zinc-100">
        {trip?.destination}
      </span>
    </div>
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <span className=" text-zinc-100">{formattedDates} </span>
      </div>
      <div className="w-px h-6 bg-zinc-800" />
      <Button variant="secondary" >
        Alterar local/data
        <Settings2 className="size-5" />
      </Button>
    </div>
  </div>);
}

export default DestinationAndDateHeader;