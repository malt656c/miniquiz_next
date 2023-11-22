import Image from "next/image";
export default function ProductCard(props) {
  return (
    <div className="outline outline-1 p-4 flex-grow max-w-[150px] grid gap-4 place-items-center">
      <Image src={props.image} width={100} height={100} alt={props.name}></Image>
      <span className="font-bold">{props.name}</span>
      <span>{props.price}</span>
    </div>
  );
}
