"use client";
import { useAppDispatch, useTypedSelector } from "@/hooks/store";
import { Input } from "../elements/Input";
import MarkdownEditor from "@uiw/react-md-editor";
import { setCreateBlog } from "@/store/slice/blog.slice";
import { Button } from "../elements/Button";
import { Blog } from "@/types/Blogs";
import { createBlogAction } from "@/action/createBlogAction";
import { AppTextArea } from "../elements/AppTextArea";
import { useEffect, useState } from "react";

export const AddBlogForm = () => {
  const { createBlog } = useTypedSelector((state) => state.blog);

  const [token, setToken] = useState("");

  const dispatch = useAppDispatch();
  // get the token from localstorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);
    if (!token) window.location.href = "/login";
  }, [token]);

  // if no token is found, redirect to login page

  const handleSubmit = async () => {
    console.log(createBlog, "createBlog before validation");

    // validate the createblog object
    if (!createBlog) return;

    Object.keys(createBlog).forEach((key) => {
      if (!createBlog[key as keyof typeof createBlog]) {
        alert("All fields are required");
        return;
      }
    });

    // dispatch the createBlog action
    const newBlog = await createBlogAction({
      ...(createBlog as Blog),
      token,
    });

    alert(newBlog.message);
    console.log(newBlog);
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
        <AppTextArea
          labelName="Description"
          onChange={(e) => {
            dispatch(
              setCreateBlog({
                ...createBlog,
                description: e.target.value,
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
          placeholder="categories (comma separated)"
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
          placeholder="tags (comma separated)"
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
