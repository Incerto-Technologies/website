import { Blog, SearchTag } from "../../types/Blogs";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type BlogState = {
  Blogs: Blog[];
  ConstBlogs: Blog[];
  search: string;
  searchTag: SearchTag;
  currentBlog: Blog | null;
  createBlog: Partial<Blog> | null;
};

const slice = createSlice({
  name: "blog",
  initialState: {
    Blogs: [],
    ConstBlogs: [],
    search: "",
    searchTag: null,
    currentBlog: null,
    createBlog: null,
  } as BlogState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      if (state.search === "") {
        state.Blogs = state.ConstBlogs;
        return;
      }

      state.Blogs = state.ConstBlogs.filter((blog) => {
        const regex = new RegExp(state.search, "i");
        return regex.test(blog.title);
      });
    },

    setSearchTag: (state, action: PayloadAction<SearchTag>) => {
      state.searchTag = action.payload;
      state.Blogs = state.ConstBlogs.filter((blog) =>
        //   @ts-ignore
        blog.tags.includes(state.searchTag),
      );
    },

    setCurrentBlog: (state, action: PayloadAction<Blog>) => {
      state.currentBlog = action.payload;
    },

    setConstBlog: (state, action: PayloadAction<Blog[]>) => {
      state.Blogs = action.payload;
      state.ConstBlogs = action.payload;
    },

    setCreateBlog: (state, action: PayloadAction<Partial<Blog>>) => {
      state.createBlog = action.payload;
    },
  },
});

export const {
  setConstBlog,
  setSearch,
  setSearchTag,
  setCurrentBlog,
  setCreateBlog,
} = slice.actions;

export default slice.reducer;
