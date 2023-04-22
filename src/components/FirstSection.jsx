import HeroImage from "../Spense Starter Files/Assets/Hero Image (Mobile).png";
import HeroImageTablet from "../Spense Starter Files/Assets/Hero Image (Tablet).png";
import HeroImageDesktop from "../Spense Starter Files/Assets/Hero Image (Desktop).png";
import Checkmark from "../Spense Starter Files/Assets/Checkmark.svg";

function FirstSection() {
  return (
    <section className="py-0 px-5 bg-slate-200 lg:flex justify-between items-center lg:px-24">
      <div className="py-10 w-auto lg:pt-0 order-last lg:w-[25rem]">
        <figure className="md:hidden lg:hidden">
          <img src={HeroImage} alt="Hero Image Mobile" />
        </figure>
        <figure className="hidden md:block lg:hidden">
          <img src={HeroImageTablet} alt="Hero Image Tablet" />
        </figure>
        <figure className="hidden md:hidden lg:block">
          <img src={HeroImageDesktop} alt="Hero Image Desktop" />
        </figure>
      </div>
      <div className="mt-8">
        <h1
          className="text-3xl font-bold md:w-[27rem]"
          data-animation="paragraph"
        >
          Share your unfiltered thoughts. Get paid.
        </h1>
        <p className="pt-6 lg:w-[35rem]" data-animation="paragraph">
          Spense is an open platform for individuals to share their unfiltered
          thoughts. Discuss the topics you love, and get paid for doing just
          that.
        </p>
        <div className="pt-6">
          <p className="flex gap-4">
            <img src={Checkmark} alt="" />
            <span data-animation="paragraph">
              {" "}
              Receive 99% off the earnings.
            </span>
          </p>
          <p className="flex gap-4 pt-2">
            <img src={Checkmark} alt="" />
            <span data-animation="paragraph">
              Get paid via Debit Card, ACH, or Paypal.
            </span>
          </p>
          <p className="flex gap-4 pt-2">
            <img src={Checkmark} alt="" />
            <span data-animation="paragraph">
              Withdraw your earnings anytime.
            </span>
          </p>
        </div>
        <div className="pt-4 flex flex-col md:flex-row items-start gap-4 pb-9">
          <input
            type="text"
            name="mail"
            placeholder="john@example.com"
            className="text-center rounded-md py-3"
          />
          <button className="rounded-md bg-black text-white px-5 py-3">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
