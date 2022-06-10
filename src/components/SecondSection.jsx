import facebook from "../Spense Starter Files/Assets/Facebook Logo.png";
import dribbble from "../Spense Starter Files/Assets/Dribbble Logo.png";
import youtube from "../Spense Starter Files/Assets/Youtube Logo.png";

function SecondSection() {
  return (
    <div>
      <div className="py-0 px-5 flex gap-4 h-24 items-center">
        <div>
          <img src={facebook} alt="Facebook logo" />
        </div>
        <div>
          <img src={dribbble} alt="dribbble logo" />
        </div>
        <div>
          <img src={youtube} alt="Youtube logo" />
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
