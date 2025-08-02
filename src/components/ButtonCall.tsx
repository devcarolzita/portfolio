import BorderButton from "./BorderButton";

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
