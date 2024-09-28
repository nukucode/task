import { Home } from "@/components/Home";
import { Sidebar } from "@/components/Sidebar";

function page() {
  return (
    <div className="flex bg-white">
      <Sidebar />
      <Home />
    </div>
  );
}

export default page;
