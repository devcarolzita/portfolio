import BorderButton from "./BorderButton";
// import ScrollReveal from "./ScrollReveal/ScrollReveal";
// import DecryptedText from "./DecryptedText/DecryptedText";
import Me from "../assets/image.png";
import Title from "./Title";
import ScrollVelocity from "./ScrollVelocity";
import ShinyText from "./ShinyText/ShinyText";
type PropsButtonCall = {
link: string,
text: string
}
const ButtonCall = ({link, text} : PropsButtonCall) => {
  return (
    <div>
      <a href={link}>
        <BorderButton text={text} />
      </a >
      

    </div>
  );
};

export default ButtonCall;
