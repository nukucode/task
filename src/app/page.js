import { Home } from "@/components/Home";
import { Sidebar } from "@/components/Sidebar";
import { Modal } from "@/components/Modal";
import { Welcome } from "@/components/Welcome";

function page({ searchParams }) {
  const modalShow = searchParams?.show;
  const welcomeShow = searchParams?.welcome;

  return (
    <div className="flex bg-white">
      <Sidebar />
      <Home />
      {!welcomeShow && <Welcome />}
      {modalShow && <Modal />}
    </div>
  );
}

export default page;
