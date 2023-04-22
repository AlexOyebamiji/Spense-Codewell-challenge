import HarmburgerMenu from "../Spense Starter Files/Assets/Hamburger Menu.svg";

function Navbar() {
  return (
    <nav
      className="flex py-10 px-5 mx-auto justify-between items-center bg-slate-200 lg:px-24"
      data-scroll-section
    >
      <h1 className="font-bold cursor-pointer">spense.</h1>
      <section>
        <figure className="md:hidden lg:hidden">
          <img src={HarmburgerMenu} alt="" />
        </figure>
        <section className="hidden md:block lg:block">
          <ul className="flex gap-5 font-semibold items-center">
            <li>
              <a href="#business">Business</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li className="lg:pl-[20rem]">
              <a href="#">Login</a>
            </li>
            <button className="rounded-md bg-black text-white px-5 py-3">
              Get Started
            </button>
          </ul>
        </section>
      </section>
    </nav>
  );
}

export default Navbar;
