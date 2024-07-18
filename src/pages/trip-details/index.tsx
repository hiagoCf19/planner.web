import { CalendarRange, Info, Plus } from "lucide-react";
import { useState } from "react";
import CreateActivityModal from "./create-activity-modal";
import ImportantLinks from "./important-links";
import Guests from "./guests";
import Activities from "./activities";
import DestinationAndDateHeader from "./destination-and-date-header";
import Button from "../../components/button";
import Details from "./details-modal";


const TripDetailsPage = () => {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);


  return (
    <>
      <div className={`max-w-6xl px-6 py-10 mx-auto space-y-8 `}>
        <DestinationAndDateHeader />
        <main className="sm:flex gap-16 sm:px-4">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between ">
              <h2 className="sm:text-3xl text-xl font-semibold flex-1">Atividades</h2>
              <div className="">
                <Button
                  onClick={() => setIsCreateActivityModalOpen(true)}
                  size="full"
                >
                  Cadastrar atividade
                  <Plus className="size-5" />
                </Button>
              </div>
            </div>
            <Activities />

          </div>
          <div className="w-80 space-y-6 hidden sm:block ">
            <ImportantLinks />
            <div className="w-full h-px bg-zinc-800" />
            <Guests />
          </div>
        </main>


        {isCreateActivityModalOpen && (
          <CreateActivityModal
            setIsCreateActivityModalOpen={setIsCreateActivityModalOpen}
          />
        )}

        <div className="fixed bottom-0 inset-x-0 w-full px-4 py-6 sm:hidden ">
          <div className="bg-zinc-900 w-full p-2.5 rounded-lg flex gap-2">
            <div className="flex-1">
              <Button variant="primary" size="full" onClick={() => setIsCreateActivityModalOpen(true)} >
                <CalendarRange className="size-5" />
                Atividades
              </Button>
            </div>
            <div className="flex-1">
              <Button variant="secondary" size="full" onClick={() => setDetailsModalOpen(true)} >
                <Info className="size-5" />
                Detalhes
              </Button>
            </div>

          </div>
        </div>

      </div>
      {isDetailsModalOpen && (
        <Details setDetailsModalOpen={setDetailsModalOpen} />
      )}
    </>
  );
}

export default TripDetailsPage;