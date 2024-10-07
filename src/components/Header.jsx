import { Squares2X2Icon, Bars3Icon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openMenu } from "@/features/buttonSlice";

function Header() {
  const menu = useSelector((state) => state.button.menu);
  const dispatch = useDispatch();
  return (
    <header
      onClick={() => dispatch(openMenu(!menu))}
      className={`flex ${
        !menu ? "lg:flex lg:pl-[5rem]" : "lg:hidden"
      } items-center justify-between pb-5`}
    >
      <button className="flex bg-silverGray w-[35px] h-[35px] rounded-md items-center justify-center">
        <Bars3Icon className="h-6" />
      </button>
      <button className="flex bg-silverGray w-[35px] h-[35px] rounded-md items-center justify-center">
        <Squares2X2Icon className="h-6" />
      </button>
    </header>
  );
}

export { Header };
