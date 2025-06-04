export async function generateMetadata({ params }: { params: { name: string } }) {
 const name = params.name.charAt(0).toUpperCase() + params.name.slice(1);
 return {
  title: `${name} | FakeStore`,
  description: `Veja produtos da categoria ${name}.`,
 };
}
