// Server-side rendering - semilar with getServerSideProps
async function getNews() {
  const res = await fetch(
    "https://687076877ca4d06b34b6db1b.mockapi.io/api/v1/articles",
    {
      cache: "no-store", // no cache => SSR each request
    }
  );
  return res.json();
}

export default async function NewsPage() {
  const newsList = await getNews();

  return (
    <div>
      <h1>Latest News</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {newsList.slice(0, 5).map((news) => (
            <tr key={news.id}>
              <td>{news.id}</td>
              <td>{news.title}</td>
              <td>{news.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
