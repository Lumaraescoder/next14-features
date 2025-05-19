'use client'
import Link from "next/link"
import Image from "next/image"

export interface ProductCardProps {
 product: {
  id: number,
  title: string
  image: string,
  price: number,
  description: string
 }
}
export default function ProductCard({ product }: ProductCardProps) {
 const description = product.description.length > 50
  ? product.description.slice(0, 100) + "... sorted just for vizualization"
  : product.description

 return (
  <Link href={`/product/${product.id}`} className="border p-4 rounded flex flex-col items-center text-center">
   <Image src={product.image} height={300} width={300} alt={product.title} className="h-32 mx-auto mb-2 object-contain" />
   <h2 className="font-bold">{product.title}</h2>
   <p className="text-gray-500">{description}</p>
   <p>${product.price}</p>
  </Link>
 )
}
