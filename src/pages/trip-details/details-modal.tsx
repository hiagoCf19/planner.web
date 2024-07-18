import { X } from "lucide-react";

import Guests from "./guests";
import ImportantLinks from "./important-links";
interface DetailsProps {
  setDetailsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Details = ({ setDetailsModalOpen }: DetailsProps) => {
  return (


    <div className="fixed inset-0 px-4 bg-zinc-950 h-screen sm:hidden  space-y-6 overflow-y-scroll">
      <X className="fixed right-5 top-6" onClick={() => setDetailsModalOpen(false)} />
      <div className="space-y-6 ">
        <ImportantLinks />
        <div className="w-full h-px bg-zinc-800" />
        <Guests />
      </div>
    </div>

  );
}

export default Details;