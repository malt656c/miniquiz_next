import Image from "next/image";
const iconSize = 60;
export default function SwipeCard(props) {
  const question = props.content?.spørgsmål;
  const buttonContent = () => {
    if (props.content.svarListe[0].ikon === undefined || props.content.svarListe[1].ikon === undefined) {
      return (
        <>
          <span className="bg-green-beige p-4 rounded-lg drop-shadow-md">{props.leftAnswer}</span>
          <span className="bg-green-beige p-4 rounded-lg drop-shadow-md">{props.rightAnswer}</span>
        </>
      );
    } else {
      return (
        <>
          <Image src={`img/${props.content.svarListe[0]?.ikon}`} alt={props.leftAnswer} width={iconSize} height={iconSize} className="bg-green-beige p-1 rounded-lg drop-shadow-md"></Image>
          <Image src={`img/${props.content.svarListe[1]?.ikon}`} alt={props.rightAnswer} width={iconSize} height={iconSize} className="bg-green-beige p-1 rounded-lg drop-shadow-md"></Image>
        </>
      );
    }
  };
  return (
    <div
      className="p-8 flex h-full w-full max-h-[600px] max-w-[400px] m-auto"
      style={{
        transform: props.transferedStyle.rotation,
        opacity: props.transferedStyle.opacity,
        translate: props.transferedStyle.translate,
        transition: " translate 0.5s",
        transition: "opacity 0.5s",
        transformOrigin: "center bottom",
      }}
    >
      <div className="h-full w-full rounded-lg grid place-items-end p-4 text-center bg-cover bg-center shadow-sm drop-shadow-lg" style={{ backgroundImage: `url(${props.content?.baggrundsbillede})` }}>
        <div className="flex justify-between w-full">{buttonContent()}</div>
        <span className="font-headings mx-auto bg-green-beige p-4 rounded-lg text-xl drop-shadow-md">{question}</span>
        <img src="/img/striber_matas.png" alt="striber" className="absolute bottom-0 left-0 w-full h-auto top-auto" style={{ zIndex: 1 }} />
      </div>
    </div>
  );
}
