import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  };

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com/',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => ({
                url: 'contacts'
            }),
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: value => ({
                url: 'contacts',
                method: "POST",
                data: value,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
           query: id => ({
                url: `contacts/${id}`,
                method: 'DELETE',
           }),
           invalidatesTags: ['Contacts'],
        }),
        editContact: builder.mutation({
            query: (args) => ({
               url: `contacts/${args[0]}`,
               method: 'PATCH',
               data: args[1],
          }),
          invalidatesTags: ['Contacts'],
       }),
    }),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation, useEditContactMutation } = contactsApi;