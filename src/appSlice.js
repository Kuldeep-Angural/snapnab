import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createObject } from './api';

const initialState = {
  loading: false,
  data: [],
  options:{}
};

export const getAllImages = createAsyncThunk('app/unSplash/', async (payload) => {
  const response = await createObject(payload);
  return response;
});

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllImages.fulfilled, (state, action) => {
        state.loading = false;
        const data = action?.payload.length > 0 ? action?.payload : action?.payload?.results.length > 0 ? action?.payload?.results : [];
        if (data?.length > 0) {
          const mappedResults = {
            data: data?.map(item => ({
              id: item.id,
              url: item.urls.thumb,
              link: item.urls.full,
              name: item.user?.name || item.alt_description || item.description,
              username: item.user?.username,
              createdAt: item.created_at,
            })),
            totalPages: data.total_pages || 0,
            totalItems: data.total || data.length || 0,
            console.log(totalPages , totalItems);
          };
          state.options={totalPages:data.total_pages  , totalItems:data.total||data.length}

          state.data = mappedResults;
        }
      });
  },
});

export const selectData = (state) => state.app.data;
export const selectOptions = (state) => state.app.options;


export default appSlice.reducer;
