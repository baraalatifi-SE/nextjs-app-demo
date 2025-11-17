export default async function Page({ params }) {
  const { dynamic } = await params;

  return (
    <div>
      <h1>Dynamic Page</h1>
      <h1>Dynamic Page is {dynamic}</h1>
    </div>
  );
}
