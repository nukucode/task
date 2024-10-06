import { Home } from "@/components/Home";
import { Sidebar } from "@/components/Sidebar";
import { Modal } from "@/components/Modal";
import { Welcome } from "@/components/Welcome";

function page({ searchParams }) {

  return (
    <div className="flex bg-white">
      <Sidebar />
      <Home />
       <Modal />
    </div>
  );
}

export default page;
