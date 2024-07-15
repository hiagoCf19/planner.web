import { Link2, Plus } from "lucide-react";
import Button from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import CreateLinkModal from "./create-link-modal";
interface Links {
  id: string;
  title: string;
  url: string;
}
const ImportantLinks = () => {
  const { tripId } = useParams()
  const [links, setLinks] = useState<Links[]>([])
  const [isCreateNewLinkModalOpen, setIsCreateNewLinkModalOpen] = useState(false);

  useEffect(() => {
    api.get(`trips/${tripId}/links`)
      .then(response => {
        setLinks(response.data)
      })
  }, [tripId])
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        {/* links */}
        {links.map(link => (
          <div className="flex items-center justify-between gap-4" key={link.id}>
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">{link.title}
              </span>
              <a href={link.url} className="block text-xs text-zinc-400 truncate hover:text-zinc-200 hover:underline" target="_blank">
                {link.url}
              </a>
            </div>
            <Link2 className="text-zinc-400 size-5 shrink-0" />

          </div>
        ))}
        {/* <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB
            </span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 hover:underline">
              http://www.airbnb.com.br/rooms/123assaaiosjiodjqodo
            </a >
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />

        </div> */}
      </div>
      <Button variant="secondary" size="full" onClick={() => setIsCreateNewLinkModalOpen(true)}>
        Cadastrar novo link
        <Plus className="size-5" />
      </Button>
      {isCreateNewLinkModalOpen && (
        <CreateLinkModal setIsCreateNewLinkModalOpen={setIsCreateNewLinkModalOpen} />
      )}
    </div>
  );
}

export default ImportantLinks;