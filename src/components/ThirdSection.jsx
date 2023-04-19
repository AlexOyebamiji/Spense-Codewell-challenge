import phoneMockupMobile from "../Spense Starter Files/Assets/Phone Mockup (Mobile).png";
import phoneMockupTablet from "../Spense Starter Files/Assets/Phone Mockup (Tablet).png";
import phoneMockupDesktop from "../Spense Starter Files/Assets/Phone Mockup (Desktop).png";

function ThirdSection() {
  return (
    <section className="py-0 px-5 lg:flex justify-center items-center">
      <div className="bg-slate-100 w-auto md:w-[45rem] rounded-md lg:h-80 lg:w-[71rem]">
        <div className="lg:flex">
          <section className="pt-10 px-10 md:px-20">
            <h1
              className="pb-3 text-3xl font-bold w-[12rem] md:w-[20rem]"
              data-animation="header"
            >
              Secure your money with Escrow.
            </h1>
            <p className="pb-2 md:w-[27rem]" data-animation="paragraph">
              Spense uses Escrow to secure all payments. We believe Escrow
              offers the highest level of security for your payments, so you
              never need to worry about scams.
            </p>
            <p className="underline font-semibold">Learn more about Escrow</p>
          </section>
          <section>
            <figure className="md:hidden lg:hidden">
              <img src={phoneMockupMobile} alt="phone mockup" id="i" />
            </figure>
            <figure className="hidden md:block lg:hidden">
              <img src={phoneMockupTablet} alt="phone mockup Tablet" />
            </figure>
            <figure className="hidden md:hidden lg:block">
              <img
                src={phoneMockupMobile}
                alt="phone mockup Desktop"
                className="lg:h-[20rem] w-[24rem]"
              />
            </figure>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
