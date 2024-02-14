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
import { editBlogAction } from "@/action/editBlogAction";
import { useRouter } from "next/navigation";
import { getUser } from "@/action/getUser";

type Props = {
  isEdit?: boolean;
  blog?: Blog;
};

export const AddBlogForm = ({ isEdit = false, blog }: Props) => {
  const { createBlog } = useTypedSelector((state) => state.blog);

  const [token, setToken] = useState("");

  const router = useRouter();

  const dispatch = useAppDispatch();
  // get the token from localstorage
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }
    setToken(token);
    getUser(token).then((res) => {
      if (!res?.user.verified) router.push("/login/verify");
      if (!res?.user.isAdmin) router.push("/login");
    });

    if (isEdit && blog) dispatch(setCreateBlog(blog));
  }, [token, router, isEdit, blog, dispatch]);

  // if no token is found, redirect to login page

  const handleSubmit = async () => {
    console.log(createBlog, "createBlog before validation");

    // validate the createblog object
    if (!createBlog) return;

    Object.keys(createBlog).forEach((key) => {
      if (key == "draft" || key == "__v" || key == "_id") return;
      if (!createBlog[key as keyof typeof createBlog]) {
        alert("All fields are required");
        console.log("this fields is required", key);
        return;
      }
      console.log(key);
    });

    let newBlog;
    // dispatch the createBlog action
    if (!isEdit) {
      newBlog = await createBlogAction({
        ...(createBlog as any),
        token,
      });
    } else {
      newBlog = await editBlogAction({
        ...(createBlog as any),
        token,
      });
    }

    alert(newBlog.message);
    if (newBlog.success) {
      router.back();
    }
  };

  return (
    <div className=" w-3/6">
      <div className="mx-auto flex flex-col gap-10">
        <Input
          placeholder="title"
          labelName="title"
          value={createBlog?.title}
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
          value={createBlog?.meta_title}
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
          value={createBlog?.description}
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
          value={createBlog?.image}
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
          value={createBlog?.categories?.join(", ")}
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
          value={createBlog?.author}
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
          value={createBlog?.tags?.join(", ")}
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
