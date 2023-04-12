import facebook from "../Spense Starter Files/Assets/Facebook Logo.png";
import dribbble from "../Spense Starter Files/Assets/Dribbble Logo.png";
import youtube from "../Spense Starter Files/Assets/Youtube Logo.png";
import pintrest from "../Spense Starter Files/Assets/Pinterest Logo.png";
import twitter from "../Spense Starter Files/Assets/Twitter Logo.png";
import reddit from "../Spense Starter Files/Assets/Reddit Logo.png";
import google from "../Spense Starter Files/Assets/Google Logo.png";
import slack from "../Spense Starter Files/Assets/Slack Logo.png";

function SecondSection() {
  return (
    <section
      className="my-10 px-5 flex gap-4 items-center lg:px-24"
      data-scroll-section
    >
      <section className="flex gap-4 items-center">
        <figure>
          <img src={facebook} alt="Facebook logo" />
        </figure>
        <figure>
          <img src={dribbble} alt="dribbble logo" />
        </figure>
        <figure>
          <img src={youtube} alt="Youtube logo" />
        </figure>
      </section>

      <section className="hidden md:flex gap-4">
        <figure>
          <img src={pintrest} alt="Pinterest logo" />
        </figure>
        <figure>
          <img src={twitter} alt="Twitter logo" />
        </figure>
      </section>

      <section className="hidden md:hidden lg:flex gap-4">
        <figure>
          <img src={reddit} alt="Reddit Logo" />
        </figure>
        <figure>
          <img src={google} alt="Google Logo" />
        </figure>
        <figure>
          <img src={slack} alt="Slack Logo" />
        </figure>
      </section>
    </section>
  );
}

export default SecondSection;
