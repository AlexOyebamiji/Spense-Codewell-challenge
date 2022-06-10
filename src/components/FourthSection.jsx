import texteditor from "../Spense Starter Files/Assets/Text Editor.png";

function FourthSection() {
  return (
    <div>
      <div className="py-0 px-5">
        <div className="pt-10">
          <h1 className="font-bold text-3xl pb-3">
            A text editor like no other.
          </h1>
          <p className="pb-3">
            Our text editor pulls you into focus mode with it's simplistic
            desgin and usability so you can put out your best writings.
          </p>
          <p className="underline pb-3">Text Editor Live Demo</p>
          <div>
            <img src={texteditor} alt="text editor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
