import { Blog, Blogs, SearchTag } from "./../../data/Blogs";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type BlogState = {
  Blogs: Blog[];
  search: string;
  searchTag: SearchTag;
  currentBlog: Blog | null;
};

const slice = createSlice({
  name: "blog",
  initialState: {
    Blogs: Blogs,
    search: "",
    searchTag: null,
    currentBlog: null,
  } as BlogState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      if (state.search === "") {
        state.Blogs = Blogs;
        return;
      }
      state.Blogs = state.Blogs.filter((blog) => {
        // blog.title.includes(state.search),
        const regex = new RegExp(state.search, "i"); // 'i' for case-insensitive search
        return regex.test(blog.title);
      });
    },

    setSearchTag: (state, action: PayloadAction<SearchTag>) => {
      state.searchTag = action.payload;
      state.Blogs = state.Blogs.filter((blog) =>
        //   @ts-ignore
        blog.tags.includes(state.searchTag),
      );
    },

    setCurrentBlog: (state, action: PayloadAction<Blog>) => {
      state.currentBlog = action.payload;
    },
  },
});

export const { setSearch, setSearchTag, setCurrentBlog } = slice.actions;

export default slice.reducer;
