import HeroImage from "../Spense Starter Files/Assets/Hero Image (Mobile).png";
import HeroImageTablet from "../Spense Starter Files/Assets/Hero Image (Tablet).png";
import HeroImageDesktop from "../Spense Starter Files/Assets/Hero Image (Desktop).png";
import Checkmark from "../Spense Starter Files/Assets/Checkmark.svg";

function FirstSection() {
  return (
    <div className="py-0 px-5 bg-slate-200">
      <div className="pt-8">
        <div className="md:hidden lg:hidden">
          <img src={HeroImage} alt="Hero Image Mobile" />
        </div>
        <div className="hidden md:block lg:hidden">
          <img src={HeroImageTablet} alt="Hero Image Tablet" />
        </div>
        <div className="hidden md:hidden lg:block">
          <img src={HeroImageDesktop} alt="Hero Image Desktop" />
        </div>
      </div>
      <div className="pt-8">
        <h1 className="text-3xl font-bold md:w-[27rem]">
          Share your unfiltered thoughts. Get paid.
        </h1>
        <p className="pt-2">
          Spense is an open platform for individuals to share their unfiltered
          thoughts. Discuss the topics you love, and get paid for doing just
          that.
        </p>
        <div className="pt-2">
          <p className="flex gap-4">
            <img src={Checkmark} alt="" />
            Receive 99% off the earnings.
          </p>
          <p className="flex gap-4 pt-2">
            <img src={Checkmark} alt="" />
            Get paid via Debit Card, ACH, or Paypal.
          </p>
          <p className="flex gap-4 pt-2">
            <img src={Checkmark} alt="" />
            Withdraw your earnings anytime.
          </p>
        </div>
        <div className="pt-4 flex gap-4 pb-9">
          <input
            type="text"
            name="mail"
            placeholder="john@example.com"
            className="text-center rounded-md"
          />
          <button className="rounded-md bg-black text-white px-5 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
