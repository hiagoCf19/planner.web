import { Calendar, Tag, X } from "lucide-react";
import Button from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateActivityModalProps {
  setIsCreateActivityModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const CreateActivityModal = ({
  setIsCreateActivityModalOpen
}: CreateActivityModalProps) => {

  const { tripId } = useParams();


  async function createActivity(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = data.get('title')
    const occurs_at = data.get('occursAt')?.toString();

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at
    }).catch((e) => console.error(e))
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="tetx-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={() => setIsCreateActivityModalOpen(false)}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atividades
          </p>
        </div>

        <form
          onSubmit={createActivity}
          className="space-y-3"
        >
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="text-zinc-400 bg-transparent outline-none flex-1 text-lg "
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="datetime-local"
                name="occursAt"
                placeholder="Data e horario da atividade "
                className="text-zinc-400 bg-transparent outline-none flex-1 text-lg [color-scheme:dark] "
              />

            </div>

          </div>
          <Button size="full">
            Salvar atividade
          </Button>
        </form>
      </div>

    </div>
  );
}

export default CreateActivityModal;