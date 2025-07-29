// Static rendering - semilar with getStaticProps
async function getPosts() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  const res = await fetch(
    "https://687076877ca4d06b34b6db1b.mockapi.io/api/v1/articles",
    {
      next: { revalidate: 20 }, // ISR: re-generate every 60s
      // revalidate semilar with Incremental Static Regeneration (ISR).
      // If remove next: { revalidate } default will be SSG static (build-time).
    }
  );
  return res.json();
}

export default async function page() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {posts.slice(0, 5).map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
