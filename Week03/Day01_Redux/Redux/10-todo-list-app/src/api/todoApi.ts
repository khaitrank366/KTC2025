import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://687076877ca4d06b34b6db1b.mockapi.io",
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "todos",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation<Todo, Todo>({
      query: ({ id, ...patch }) => ({
        url: `todo/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todoApi;