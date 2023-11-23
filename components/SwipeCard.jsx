import Image from "next/image";
import QuizBackButton from "./QuizBackButton";
const iconSize = 60;
export default function SwipeCard(props) {
  const buttonContent = () => {
    if (props.content.svarListe[0].ikon === undefined || props.content.svarListe[1].ikon === undefined) {
      return (
        <>
          <button className="bg-green-beige p-4 rounded-lg drop-shadow-md" onClick={()=>{props.leftPress()}}>{props.content.svarListe[0].svar}</button>
          <button className="bg-green-beige p-4 rounded-lg drop-shadow-md"onClick={()=>{props.rightPress()}}>{props.content.svarListe[1].svar}</button>
        </>
      );
    } else {
      return (
        <><button onClick={()=>{props.leftPress()}}><Image src={`img/${props.content.svarListe[0]?.ikon}`} alt={props.content.svarListe[0].svar} width={iconSize} height={iconSize} className="bg-green-beige p-1 rounded-lg drop-shadow-md desktop:w-24" /></button>

          <button onClick={()=>{props.rightPress()}}><Image src={`img/${props.content.svarListe[1]?.ikon}`} alt={props.content.svarListe[1].svar} width={iconSize} height={iconSize} className="bg-green-beige p-1 rounded-lg drop-shadow-md desktop:w-24" /></button>
          
        </>
      );
    }
  };
  const Tip = () => {
    if (props.content?.tip !== undefined) {
      return <span className="font-centuryGothic mx-auto bg-green-beige p-4 rounded-lg text-l drop-shadow-md desktop:w-[400px] dektop:text-xl">{props.content?.tip}</span>;
    } else {
      return <span className="font-centuryGothic mx-auto bg-transparent p-4 rounded-lg text-l drop-shadow-md">{props.content?.tip}</span>;
    }
  };
  return (
    <div
      className="p-8 flex h-full w-full max-w-[400px] m-auto desktop:max-w-[800px]"
      style={{
        transform: props.transferedStyle.rotation,
        opacity: props.transferedStyle.opacity,
        translate: props.transferedStyle.translate,
        transition: " translate 0.5s",
        transition: "opacity 0.5s",
        transformOrigin: "center bottom",
        userSelect: "none",
      }}
    >
      <div className="h-full w-full rounded-lg grid place-items-end p-4 text-center bg-cover bg-center shadow-sm drop-shadow-lg" style={{ backgroundImage: `url(${props.content?.baggrundsbillede})` }}>
        <span className="font-headings mx-auto mb-auto bg-green-beige p-4 rounded-lg text-xl drop-shadow-md ">{props.content?.spørgsmål}</span>
        <div className="flex justify-between w-full desktop:justify-center desktop:gap-5">{buttonContent()}</div>

        {Tip()}
        <div className="m-auto">
          <QuizBackButton clickEvent={props.onGoBack}></QuizBackButton>
        </div>
        <Image src="/img/striber_matas.png" alt="striber" className="absolute bottom-0 left-0 right-0 top-auto z-10" width={664} height={32} />
      </div>
    </div>
  );
}
