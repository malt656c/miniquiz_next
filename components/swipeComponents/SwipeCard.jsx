export default function SwipeCard(props) {
  const question = props.content?.spørgsmål;
  return (
    <div
      className="p-8 flex h-full w-full max-h-[600px] max-w-[400px] m-auto"
      style={{
        transform: props.transferedStyle.rotation,
        opacity: props.transferedStyle.opacity,
        translate: props.transferedStyle.translate,
        transition: " translate 0.5s",
        transition: "opacity 0.5s", 
        transformOrigin:"center bottom"
      }}
    >
      <div className="h-full w-full outline outline-1 rounded-lg grid place-items-end justify-center p-4 text-center">
        <div className="flex justify-between w-full">
          <span className="">{props.leftAnswer}</span>
          <span className="">{props.rightAnswer}</span>
        </div>
        <span className="font-headings">{question}</span>
      </div>
    </div>
  );
}
