"use client";
import { useAppDispatch, useTypedSelector } from "@/hooks/store";
import { Input } from "../elements/Input";
import MarkdownEditor from "@uiw/react-md-editor";
import { setCreateBlog } from "@/store/slice/blog.slice";
import { getUser } from "@/action/getUser";
import { setUser } from "@/store/slice/user.slice";
import { useCallback, useEffect } from "react";
import { log } from "console";
import { useRouter } from "next/navigation";
import { Button } from "../elements/Button";

type Props = {
  isAdmin: boolean;
};

export const AddBlogForm = () => {
  const { createBlog } = useTypedSelector((state) => state.blog);
  const { isAdmin } = useTypedSelector((state) => state.user);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const getUserInfo = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    const user = await getUser(token);

    console.log(user, "user");
    if (!user) return;
    dispatch(
      setUser({
        ...user.user,
        token: user.token,
      }),
    );
    console.log(user.user.isAdmin);
  }, [dispatch, router]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <div className=" w-3/6">
      <div className="mx-auto flex flex-col gap-10">
        <Input placeholder="title" labelName="title" />
        <Input placeholder="meta_title" labelName="meta_title" />
        <Input placeholder="image" labelName="image url" />
        <Input placeholder="categories" labelName="categories" />
        <Input placeholder="author" labelName="author" />
        <Input placeholder="tags" labelName="tags" />
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
            console.log(createBlog);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
