import { JSX } from "react";
import ProductCard from "../components/Products/ProductCard";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function Home(): Promise<JSX.Element> {
  const products = await getProducts();
  return (
    <div>
      <main className="grid grid-cols-2 gap-4 p-4">
        {products.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </main >
    </div>
  );
}
