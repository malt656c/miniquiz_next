"use client";
import Image from "next/image";
export default function ProductCard(props) {
  return (
    <div className="outline outline-1 p-4 min-w-[200px] w-[min-content] max-w-[300px] grid gap-2 place-items-center rounded-lg">
      <Image src={props.image} width={100} height={100} alt={props.name}></Image>
      <span className="font-bold">{props.name}</span>
      <span className="">{props.price}</span>
      <div className="flex space-x-4  ">
        <span className="bg-matas-blue text-matas-white rounded-lg p-2">Læg i kurv</span>
        <div className="bg-matas-grey m-auto rounded-lg ">
          <img className="m-auto p-2" src="/img/heart.svg" alt="hjerte" />
        </div>
      </div>
    </div>
  );
}
