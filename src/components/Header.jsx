import { Squares2X2Icon, Bars3Icon } from "@heroicons/react/24/outline";

function Header() {

  return (
    <header className="flex lg:hidden items-center justify-between pb-5">
      <button
        className="flex bg-silverGray w-[35px] h-[35px] rounded-md items-center justify-center"
      >
        <Bars3Icon className="h-6" />
      </button>

      <button className="flex bg-silverGray w-[35px] h-[35px] rounded-md items-center justify-center">
        <Squares2X2Icon className="h-6" />
      </button>
    </header>
  );
}

export { Header };
