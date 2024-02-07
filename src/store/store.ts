import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "@/store/slice/blog.slice";
import userReducer from "@/store/slice/user.slice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
