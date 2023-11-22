"use client";
import QuizBackButton from "./QuizBackButton";
import ProductCard from "./ProductCard";
export default function QuizEndpage(props) {
  let products = props.products;
  console.log(products)
  let productPage;
  const SeeResults=(e)=>{
    e.target.parentElement.style = {display: "none"}
    let productCards = products.map((product)=>{return<ProductCard key={product.id} name={product.name} price={product.price} image={product.image}></ProductCard>})
    console.log(productCards)
 productPage = <section className="flex flex-wrap gap-4 p-4 justify-center max-w-[1500px]">
  {productCards}
</section>
  }

  return (
    <>
    {productPage}
        <div className="grid place-items-center bg-no-repeat bg-center bg-cover absolute inset-0 z-20 p-4 gap-4" style={{ backgroundImage: 'url("./img/slut1.jpg")' }}>
      <p className="p-4 bg-green-beige rounded-xl font-headings text-2xl text-center">Tillykke du har gennemført Quizzen</p>
      <button onClick={(e)=>{SeeResults(e)}} type="button" className="bg-green-beige font-centuryGothic rounded-lg px-6 py-3 text-center text-xl transition-all hover:drop-shadow-md hover:scale-105" style={{ zIndex: 1 }}>
        Se dit resultat
      </button>
      <div>
        <p className="p-4 bg-green-beige rounded-xl font-headings text-2xl text-center">Vi har fundet en række produkter som kan dække dine behov.</p>
      </div>
      <QuizBackButton></QuizBackButton>
      <img src="/img/striber_matas.png" alt="striber" className="absolute bottom-0 left-0 w-full h-auto top-auto" style={{ zIndex: 1 }} />
    </div>
    </>

  );
}
