'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { categories: string[] };

export default function CategoryMenu({ categories }: Props) {
 const pathname = usePathname();

 return (
  <aside className="w-48 p-4 border-r">
   <h2 className="font-bold mb-4">Categorias</h2>
   <ul className="space-y-2">
    {categories.map((cat) => (
     <li key={cat}>
      <Link
       href={`/category/${cat}`}
       className={`block hover:underline ${pathname.includes(cat) ? 'text-blue-600 font-semibold' : ''}`}
      >
       {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </Link>
     </li>
    ))}
   </ul>
  </aside>
 );
}
