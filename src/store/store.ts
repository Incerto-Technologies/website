import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "@/store/slice/blog.slice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
