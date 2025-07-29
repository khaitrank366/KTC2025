import { useGetArticlesByIdQuery } from "@/features/articles/articleApiSlice";

export default function ArticleDetail({ articleId }) {
  const {
    date: article,
    isLoading,
    isError,
  } = useGetArticlesByIdQuery(articleId);
  if (isLoading) return <p>Đang tải bài viết...</p>;
  if (isError || !article) return <p>Không tìm thấy bài viết.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Chi tiết bài viết</h1>
      <p>
        <strong>ID:</strong> {article.id}
      </p>
      <p>
        <strong>Tiêu đề:</strong> {article.title}
      </p>
      <p>
        <strong>User ID:</strong> {article.userId}
      </p>
    </div>
  );
}
