import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UUID } from "crypto";
import { useAppSelector } from "../app/redux";
import { RootState } from "../app/store";
import axiosApi from "../services/AxiosApi";
import { Movie } from "../type";
type movieState = {
  list: Movie[];
  loading: boolean;
  item: Movie | null;
  search: Movie[];
};
const initialState: movieState = {
  list: [],
  loading: false,
  item: null,
  search: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovies.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getMovies.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getMovieItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovieItem.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.loading = false;
      })
      .addCase(getMovieItem.rejected, (state) => {
        state.loading = false;
      })
      .addCase(setSearchMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(setSearchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.search = action.payload;
      })
      .addCase(setSearchMovie.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const getMovies = createAsyncThunk("/getMovie", async () => {
  try {
    const { data } = await axiosApi.get("/movie/");
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const setSearchMovie = createAsyncThunk(
  "search/setSearch",
  async (search: string) => {
    const { data } = await axiosApi.get(`/search/?key=${search}`);
    console.log(search);

    return <Movie[]>data;
  }
);

export const getMovieItem = createAsyncThunk<Movie, UUID>(
  "/getMovieItem",
  async (uu_id) => {
    try {
      const { data } = await axiosApi.get(`/movie/${uu_id}/`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const useMovie = () => useAppSelector((state: RootState) => state.movie);

export default movieSlice.reducer;
