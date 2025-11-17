export default async function PostDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );

  const todo = await response.json();

  console.log(`======= ${postId}`);
  return (
    <div>
      {" "}
      <div>
        <h3
          style={{
            width: "70%",
            backgroundColor: "#fff",
            color: "black",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          {todo.title}
        </h3>
      </div>
    </div>
  );
}
