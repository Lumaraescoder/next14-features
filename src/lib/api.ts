export async function fetchCategories(): Promise<string[]> {
 const res = await fetch("https://fakestoreapi.com/products/categories");
 if (!res.ok) {
  throw new Error("Failed to fetch categories");
 }
 return res.json();
}

export async function fetchProductsByCategory(category: string) {
 const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
 return res.json();
}