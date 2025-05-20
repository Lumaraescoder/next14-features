import { Metadata } from "next";
import Image from "next/image";

type Product = {
 id: number
 title: string
 price: number
 image: string
 description: string
}

type PageProps = {
 params: {
  id: string
 }
}
//could be separated into a different file but I leave here for visualization
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
 const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
 const product: Product = await res.json();

 return {
  title: `${product.title} | FakeStore`,
  description: product.description,
  openGraph: {
   title: product.title,
   description: product.description,
   images: [product.image],
  },
 };
}
export default async function ProductPage({ params }: PageProps) {
 const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
  cache: "no-store"
 });
 const product: Product = await res.json();

 return (
  <div className="p-4">
   <Image
    src={product.image}
    alt={product.title}
    width={300}
    height={300}
    className="h-48 mx-auto object-contain"
   />
   <h1 className="text-xl font-bold">{product.title}</h1>
   <p>{product.description}</p>
   <strong className="block mt-2">${product.price}</strong>
  </div>
 );
}