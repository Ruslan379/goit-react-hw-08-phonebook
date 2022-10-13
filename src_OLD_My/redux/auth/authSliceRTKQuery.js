import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const authAPIbyRTKQuery = createApi({
  reducerPath: 'herokuapp ',
  tagTypes: ["Herokuapp"],

  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }), //? +++++++++++ 
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com/users/signup' }), //? +++++++++++ 

  endpoints: (builder) => ({
    //! Получить информацию о текущем пользователе
    fetchCurrentUser: builder.query({
      // query: (name) => `/contacts/${name}`, 
      query: () => `/users/current`, //! +-+-+-
      // providesTags: ["Herokuapp"],
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Herokuapp', id })),
            { type: 'Herokuapp', id: 'LIST' },
          ]
          : [{ type: 'Herokuapp', id: 'LIST' }],
    }),

    //! Создать нового пользователя
    register: builder.mutation({
      query: (user) => ({
        url: "/users/signup",
        method: "POST",
        body: user,
      }),
      // invalidatesTags: ["Herokuapp"],
      invalidatesTags: [{ type: 'Herokuapp', id: 'LIST' }],
    }),

    //! Залогинить пользователя
    logIn: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
      }),
      // invalidatesTags: ["Herokuapp"],
      invalidatesTags: [{ type: 'Herokuapp', id: 'LIST' }],
    }),

    //! Разлогинить пользователя
    logOut: builder.mutation({
      query: (token) => ({
        url: "/users/logout",
        method: "POST",
        body: token,
      }),
      // invalidatesTags: ["Herokuapp"],
      invalidatesTags: [{ type: 'Herokuapp', id: 'LIST' }],
    }),
  }),
})

export const { useFetchCurrentUserQuery, useRegisterMutation, useLogInMutation, useLogOutMutation } = authAPIbyRTKQuery;





