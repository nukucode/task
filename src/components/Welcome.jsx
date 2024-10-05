import Image from "next/image";
import Img from "../../public/img/homepage.png";

function Welcome() {
  const Pagination = ({ acitve }) => {
    return (
      <button>
        <div
          className={`w-[10px] h-[10px] rounded-full ${
            acitve ? "bg-black" : "bg-icon"
          }`}
        />
      </button>
    );
  };
  return (
    <div className="fixed top-0 left-0 z-[999] bg-black/30 h-screen w-full flex items-center justify-center">
      <div className="relative w-[600px] h-auto bg-white rounded-3xl mx-5">
        <Image
          src={Img}
          alt="homepage"
          className="w-full h-[320px] rounded-tl-3xl rounded-tr-3xl object-cover"
        />
        <div className="w-full h-[40px] bg-white relative -mt-[40px] before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-white before:to-white z-[999] before:left-0 before:-top-[5px] before:blur-[5px]" />
        <div className=" mx-auto pb-10 max-w-[420px] space-y-2 px-5">
          <div className="space-x-2 flex items-center justify-center pb-2">
            <Pagination acitve />
            <Pagination />
            <Pagination />
            <Pagination />
          </div>
          <h2 className="font-plusSans font-medium text-[18px] text-center">
            Welcome to Plan.io
          </h2>
          <p className="font-plusSans pb-3 text-grayText text-center text-[14px]">
            Plan.io is a back to basic to-do-list focused on fast <br /> and
            delightful user experince.
          </p>
          <button className="bg-black text-white w-full py-2 font-plusSans rounded-lg">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export { Welcome };
