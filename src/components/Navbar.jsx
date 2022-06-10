import HarmburgerMenu from "../Spense Starter Files/Assets/Hamburger Menu.svg";

function Navbar() {
  return (
    <div>
      <div className="flex py-0 px-5 mx-auto pt-10 justify-between bg-slate-200">
        <h1 className="font-bold">spense.</h1>
        <div>
          <img src={HarmburgerMenu} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
