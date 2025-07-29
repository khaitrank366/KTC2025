import { API_PREFIX } from "@/constants/appConstant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_PREFIX }),
  tagTypes: ["Articles"],
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => "articles",
      providesTags: ["Articles"],
    }),
    getArticleById: builder.query({
      query: (id) => `articles/${id}`,
      providesTags: (result, error, id) => [{ type: "Articles", id }],
    }),

    createArticle: builder.mutation({
      query: (data) => ({ url: "articles", method: "POST", body: data }),
      invalidatesTags: ["Articles"],
    }),

    updateArticle: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `articles/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Articles"],
    }),

    deleteArticle: builder.mutation({
      query: (id) => ({ url: `articles/${id}`, method: "DELETE" }),
      invalidatesTags: ["Articles"],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleByIdQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articleApi;
