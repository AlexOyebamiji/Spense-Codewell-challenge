import phoneMockupMobile from "../Spense Starter Files/Assets/Phone Mockup (Mobile).png";
import phoneMockupTablet from "../Spense Starter Files/Assets/Phone Mockup (Tablet).png";
import phoneMockupDesktop from "../Spense Starter Files/Assets/Phone Mockup (Desktop).png";

function ThirdSection() {
  return (
    <div className="py-0 px-5">
      <div className="bg-slate-200 rounded-md ">
        <div className="pt-10 py-0 px-10 ">
          <h1 className="pb-3 text-3xl font-bold w-[12rem]">
            Secure your money with Escrow.
          </h1>
          <p className="pb-2">
            Spense uses Escrow to secure all payments. We believe Escrow offers
            the highest level of security for your payments, so you never need
            to worry about scams.
          </p>
          <p className="underline font-semibold">Learn more about Escrow</p>
        </div>
        <div>
          <div className="md:hidden lg:hidden">
            <img src={phoneMockupMobile} alt="phone mockup" id="i" />
          </div>
          <div className="hidden md:block lg:hidden">
            <img src={phoneMockupTablet} alt="phone mockup Tablet" />
          </div>
          <div className="hidden md:hidden lg:block">
            <img src={phoneMockupDesktop} alt="phone mockup Desktop" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
