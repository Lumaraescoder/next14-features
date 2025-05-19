'use server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handleCheckout(_: any, formData: FormData) {
 const name = formData.get("name")?.toString()

 await new Promise((res) => setTimeout(res, 1000))

 return {
  success: true,
  message: `Compra realizada com sucesso, ${name}!`,
 }
}
