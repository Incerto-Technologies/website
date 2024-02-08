"use client";
import { useAppDispatch, useTypedSelector } from "@/hooks/store";
import { Input } from "../elements/Input";
import MarkdownEditor from "@uiw/react-md-editor";
import { setCreateBlog } from "@/store/slice/blog.slice";
import { useRouter } from "next/navigation";
import { Button } from "../elements/Button";
import { Blog } from "@/types/Blogs";
import { createBlogAction } from "@/action/createBlogAction";

export const AddBlogForm = () => {
  const { createBlog } = useTypedSelector((state) => state.blog);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    // validate the createblog object
    if (!createBlog) return;

    Object.keys(createBlog).forEach((key) => {
      if (!createBlog[key as keyof typeof createBlog]) {
        alert("All fields are required");
        return;
      }
    });

    // get the token from localstorage
    const token = localStorage.getItem("token");

    // if no token is found, redirect to login page
    if (!token) {
      router.push("/login");
      return;
    }

    // dispatch the createBlog action
    createBlogAction({
      ...(createBlog as Blog),
      token,
    });
  };

  return (
    <div className=" w-3/6">
      <div className="mx-auto flex flex-col gap-10">
        <Input
          placeholder="title"
          labelName="title"
          onChange={(e) => {
            dispatch(
              setCreateBlog({
                ...createBlog,
                title: e.target.value,
              }),
            );
          }}
        />
        <Input
          placeholder="meta_title"
          labelName="meta_title"
          onChange={(e) => {
            dispatch(
              setCreateBlog({
                ...createBlog,
                meta_title: e.target.value,
              }),
            );
          }}
        />
        <Input
          placeholder="image"
          labelName="image url"
          onChange={(e) => {
            dispatch(
              setCreateBlog({
                ...createBlog,
                image: e.target.value,
              }),
            );
          }}
        />
        <Input
          placeholder="categories"
          labelName="categories"
          onChange={(e) => {
            dispatch(
              setCreateBlog({
                ...createBlog,
                categories: e.target.value
                  .split(",")
                  .map((item) => item.trim()),
              }),
            );
          }}
        />
        <Input
          placeholder="author"
          labelName="author"
          onChange={(e) => {
            dispatch(
              setCreateBlog({
                ...createBlog,
                author: e.target.value,
              }),
            );
          }}
        />
        <Input
          placeholder="tags"
          labelName="tags"
          onChange={(e) => {
            dispatch(
              setCreateBlog({
                ...createBlog,
                tags: e.target.value.split(",").map((item) => item.trim()),
              }),
            );
          }}
        />
      </div>
      <div className="mt-10 w-full" data-color-mode="dark">
        <MarkdownEditor
          height={600}
          className="w-full"
          value={createBlog?.markdown}
          onChange={(value) => {
            dispatch(
              setCreateBlog({
                ...createBlog,
                markdown: value,
              }),
            );
          }}
        />
      </div>
      <div className="mx-auto flex flex-col gap-10">
        <Button
          className="mt-10 rounded-md"
          onClick={() => {
            handleSubmit();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
