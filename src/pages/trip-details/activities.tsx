import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";


interface Activity {
  date: string;
  activities: {
    activityId: string;
    title: string;
    occurs_at: string;
  }[];
}
const Activities = () => {
  const { tripId } = useParams()
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    api.get(`trips/${tripId}/activities`)
      .then(response => {
        setActivities(response.data.activities)
      })
  }, [tripId])

  return (
    <div className="space-y-8 ">
      {activities.map((activityWithDate, i) => (
        <div key={i + activityWithDate.date} className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">
              Dia {format(parseISO(activityWithDate.date), 'd')}

            </span>
            <span className="text-xs text-zinc-1000">
              {format(parseISO(activityWithDate.date), 'EEEE', { locale: ptBR })}

            </span>
          </div>
          {activityWithDate.activities.length > 0 ? (
            <div className="space-y-2">
              {activityWithDate.activities.map(activity => (
                <div className="space-y-2.5" key={activity.activityId}>
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">{activity.title}</span>
                    <span className="text-zinc-400 ml-auto text-sm">{format(activity.occurs_at, 'HH:mm')} h
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (<p className="" >Nenhuma atividade cadastrada nesta data</p>)}
        </div>

      ))}
    </div>
  );
}

export default Activities;