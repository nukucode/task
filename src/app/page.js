import { Home } from "@/components/Home";
import { Sidebar } from "@/components/Sidebar";
import {  Modal } from "@/components/Modal";

function page({ searchParams }) {
  const show = searchParams?.show;
  return (
    <div className="flex bg-white">
      <Sidebar />
      <Home />
      {show && <Modal />}
    </div>
  );
}

export default page;
