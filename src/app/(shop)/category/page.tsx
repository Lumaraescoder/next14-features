import CategoryMenu from "@/components/CategoryMenu/CategoryMenu";
import { fetchCategories, fetchProductsByCategory } from "@/lib/api";

import Image from "next/image";


type Product = {
 id: string | number;
 image: string;
 title: string;
 description: string;
 price: number;
};

export default async function CategoryPage({ params }: { params: { name: string } }) {
 const products: Product[] = await fetchProductsByCategory(params.name);
 const categories = await fetchCategories();

 return (
  <div className="flex">
   <CategoryMenu categories={categories} />
   <main className="grid grid-cols-2 gap-4 p-4 flex-1">
    {products.map((product: Product) => (
     <div key={product.id} className="border p-4 rounded">
      <Image src={product.image} alt={product.title} width={150} height={150} />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-sm line-clamp-2">{product.description}</p>
      <strong>${product.price}</strong>
     </div>
    ))}
   </main>
  </div>
 )
}