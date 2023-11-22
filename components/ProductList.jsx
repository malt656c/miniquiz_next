import ProductCard from "./ProductCard";
export default function ProductList(props){
const products = props.content
    return(
<section className="flex flex-wrap gap-4 p-4 justify-center w-full h-full max-w-[1500px]">
    {products.map((product) => {
      return <ProductCard key={product.id} name={product.name} price={product.price} image={product.image}></ProductCard>;
    })}
  </section>
    )
}