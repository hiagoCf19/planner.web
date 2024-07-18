import { Link2, Tag, X } from "lucide-react";
import Button from "../../components/button";
import { useParams } from "react-router-dom";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { toast } from "sonner";

interface CreateLinkModalProps {
  setIsCreateNewLinkModalOpen: (isOpen: boolean) => void
}
const CreateLinkModal = ({
  setIsCreateNewLinkModalOpen
}: CreateLinkModalProps) => {

  const { tripId } = useParams();

  async function createLink(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = data.get('title')
    const url = data.get('url')?.toString();

    await api.post(`/trips/${tripId}/links`, {
      title,
      url
    }).then(() => {
      toast.success("Link cadastrado com sucesso!")
      setIsCreateNewLinkModalOpen(false);
    }).catch((e) => {
      console.error(e)
      toast.error("Ocorreu um erro ao cadastrar o link.")
    })


  }


  return (
    <div className="fixed sm:inset-0 inset-x-0 bottom-0 sm:bg-black/60 bg-black/90  flex sm:items-center items-end justify-center h-screen">
      <div className="w-[640px] sm:rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="tetx-lg font-semibold">Cadastrar link</h2>
            <button type="button" onClick={() => setIsCreateNewLinkModalOpen(false)}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </p>
        </div>

        <form
          onSubmit={createLink}
          className="space-y-3"
        >
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              name="title"
              placeholder="Título da atividade"
              className="text-zinc-400 bg-transparent outline-none flex-1 text-lg "
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Link2 className="size-5 text-zinc-400" />
              <input
                type="url"
                name="url"
                placeholder="URL"
                className="text-zinc-400 bg-transparent outline-none flex-1 text-lg [color-scheme:dark] "
              />

            </div>

          </div>
          <Button size="full" type="submit">
            Salvar link
          </Button>
        </form>
      </div>

    </div>
  );
}

export default CreateLinkModal;