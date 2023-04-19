import texteditor from "../Spense Starter Files/Assets/Text Editor.png";

function FourthSection() {
  return (
    <section className="py-0 px-5 h-[30rem] md:h-[40rem] lg:flex lg:px-10 lg:h-96 justify-center items-center">
      <header className="pt-10 w-auto lg:order-last lg:w-[29rem]">
        <h1 className="font-bold text-3xl pb-3" data-animation="header">
          A text editor like no other.
        </h1>
        <p className="pb-3" data-animation="paragraph">
          Our text editor pulls you into focus mode with it's simplistic desgin
          and usability so you can put out your best writings.
        </p>
        <p className="underline pb-3 font-semibold">Text Editor Live Demo</p>
      </header>
      <figure className="lg:w-[29rem] h-[15rem]">
        <img src={texteditor} alt="text editor" />
      </figure>
    </section>
  );
}

export default FourthSection;
