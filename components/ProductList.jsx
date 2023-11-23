import ProductCard from "./ProductCard";
export default function ProductList(props) {
  const products = props.content.filter((i) => !props.filters.flat().includes(i.categories[3] || i.categories[4]));
  return (
    <section className="flex flex-wrap gap-4 p-4 justify-center w-full h-full max-w-[1500px]">
      {products.map((product) => {
        return <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} brand={product.brand}></ProductCard>;
      })}
    </section>
  );
}
