import HarmburgerMenu from "../Spense Starter Files/Assets/Hamburger Menu.svg";

function Navbar() {
  return (
    <div>
      <div className="flex py-0 px-5 mx-auto h-20 justify-between items-center bg-slate-200 lg:px-24">
        <h1 className="font-bold">spense.</h1>
        <div>
          <div className="md:hidden lg:hidden">
            <img src={HarmburgerMenu} alt="" />
          </div>
          <div className="hidden md:block lg:block">
            <ul className="flex gap-5 font-semibold items-center">
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li className="lg:pl-[20rem]">
                <a href="#">Login</a>
              </li>
              <button className="rounded-md bg-black text-white px-5 py-3">
                Get Started
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
