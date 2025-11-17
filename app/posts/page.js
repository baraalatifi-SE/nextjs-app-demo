import Link from "next/link";

export default async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: {
      revalidate: 120,
    },
  });

  const todo = await response.json();

  const postJSX = todo.map((p) => {
    return (
      <Link key={p.id} href={`/posts/${p.id}`}>
        <div
          style={{
            width: "70%",
            backgroundColor: "#fff",
            color: "black",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <h1>{p.title}</h1>
        </div>{" "}
      </Link>
    );
  });

  console.log(todo);
  return (
    <div>
      <h1> post page </h1>

      {/* ======================== POST API REQUEST ======================== */}
      <div>{postJSX}</div>
      {/* ======================== POST API REQUEST ======================== */}
    </div>
  );
}
