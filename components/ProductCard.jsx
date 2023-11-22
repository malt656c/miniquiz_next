"use client";
import Image from "next/image";
export default function ProductCard(props) {
  return (
    <div className="outline outline-1 p-4 flex-grow min-w-[200px] w-[min-content] max-w-[300px] grid gap-2 place-items-center rounded-lg">
      <Image src={props.image} width={100} height={100} alt={props.name}></Image>
      <span className="font-bold">{props.name}</span>
      <span>{props.price}</span>
    </div>
  );
}
