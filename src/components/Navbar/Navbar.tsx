'use client'

import Link from 'next/link'

export default function Navbar() {

 return (
  <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
   <Link href="/" className="font-bold text-lg">FakeStore</Link>
   <div className="space-x-4">
    <Link href="/">Produtos</Link>
    <Link href="/checkout">Checkout</Link>
   </div>
  </nav>
 )
}
