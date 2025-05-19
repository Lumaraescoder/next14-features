'use client'

import { useFormState } from 'react-dom'
import { handleCheckout } from './actions'

const initialState = {
 success: false,
 message: '',
}

export default function CheckoutPage() {
 const [state, formAction] = useFormState(handleCheckout, initialState)

 return (
  <form action={formAction} className="p-4 space-y-4">
   <input
    name="name"
    placeholder="Seu nome"
    className="border p-2 rounded w-full"
    required
   />
   <button className="bg-blue-500 text-white px-4 py-2 rounded">
    Finalizar
   </button>
   {state.success && (
    <p className="text-green-600">{state.message}</p>
   )}
  </form>
 )
}
