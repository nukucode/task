import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/img/logo.png";
import Dashboard from "../../../public/img/dashboared.png";

function page() {
  const Header = () => {
    return (
      <header className="max-w-[90%] mx-auto flex items-center justify-between py-5 sm:p-10">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="logo" className="w-10 h-10" />
          <h3 className="font-plusSans ">Plan.io</h3>
        </Link>

        <navbar className="hidden md:inline-block">
          <ul className="flex items-center space-x-5 font-plusSans">
            <Link href="/product">
              <li className="after:content-['\25BC'] after:text-[12px] after:ml-[5px] ">
                Product
              </li>
            </Link>
            <Link href="/company">
              <li className="after:content-['\25BC'] after:text-[12px] after:ml-[5px]">
                Company
              </li>
            </Link>
            <Link href="/pricing">
              <li>Pricing</li>
            </Link>
            <Link href="blog">
              <li>Blog</li>
            </Link>
            <Link href="jobs">
              <li>Jobs</li>
            </Link>
            <Link href="contacts">
              <li>Contacts</li>
            </Link>
          </ul>
        </navbar>

        <div className="space-x-3">
          <Link href="/login">
            <button className="landing-btn border text-[#7b5feb] border-[#7b5feb] hover:bg-[#7b5feb] hover:text-white">
              Log in
            </button>
          </Link>
          <Link href="/signup">
            <button className="landing-btn text-white bg-[#7b5feb] border hover:border-[#7b5feb] hover:text-[#7b5feb] hover:bg-transparent">
              Sign up
            </button>
          </Link>
        </div>
      </header>
    );
  };
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center mt-[5rem]">
        <h1 className="font-plusSans text-[2rem] sm:text-[3.5rem] font-extrabold sm:leading-[60px] text-center">
          Create your products <br /> more effeciently
        </h1>
        <p className="font-plusSans text-[#a5a2de] text-[17px] text-center mt-[1rem] ">
          Revolutionizing software development with streamined <br /> issues,
          sprints and roadmaps.
        </p>

        <div className="mt-[1rem] space-x-3">
          <button className="landing-btn bg-[#7b5feb] text-white hover:bg-transparent border border-[#7b5feb] hover:text-[#7b5feb] ">
            Get Started
          </button>
          <button className="landing-btn border border-[#7b5feb] text-[#7b5feb] hover:bg-[#7b5feb] hover:text-white ">
            See how it works
          </button>
        </div>

        <div className="shadow-2xl w-full lg:max-w-[70%] mx-auto mt-[4rem]">
          <Image src={Dashboard} alt="homepage" className="w-full h-full border border-black/5 rounded-lg" />
        </div>
      </main>
    </div>
  );
}

export default page;
