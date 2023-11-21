export default function SwipeCard(props) {
  const question = props.content?.spørgsmål;
  const answers = props.content?.svarListe;
  return (
    <div className="p-8 flex h-full w-full max-h-[600px] max-w-[400px] m-auto" style={{ transform: props.transferedStyle.rotation, opacity: props.transferedStyle.opacity,
      translate: props.transferedStyle.translate,
    transition:" translate 0.5s",
    transition: "opacity 0.5s" }}>
      <div className="h-full w-full outline outline-1 rounded-lg grid place-items-end justify-center p-4 text-center">
        <div className="flex justify-between w-full">
          <span className="">{answers[1]?.svar}</span>
          <span className="">{answers[0]?.svar}</span>
        </div>
        <span>{question}</span>
      </div>
    </div>
  );
}
