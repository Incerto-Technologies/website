"use client";
import { validateEmail } from "@/utils/validateEmail";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/action/login";
import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import { createUser } from "@/action/createUser";

type LoginForm = {
  email: string;
  password: string;
  profile?: string;
  userName?: string;
  description?: string;
};
export const LoginForm = () => {
  const [userLoginCredentials, setUserLoginCredentials] = useState<LoginForm>({
    email: "",
    password: "",
    profile: "",
    userName: "",
    description: "",
  });

  const router = useRouter();
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = async () => {
    const isValidEmail = validateEmail(userLoginCredentials.email);

    if (!isValidEmail || userLoginCredentials.password === "") {
      alert("all fields are required");
      return;
    }

    let userData;
    if (isSignIn) {
      userData = await login(userLoginCredentials);
    } else {
      if (!userLoginCredentials.profile) {
        alert("Profile url is required");
        return;
      }

      if (!userLoginCredentials.userName) {
        alert("User Name is required");
        return;
      }

      if (!userLoginCredentials.description) {
        alert("Description is required");
        return;
      }

      // @ts-ignore
      userData = await createUser(userLoginCredentials);
    }
    if (userData.success && userData.user && userData.token) {
      router.push("/blog/add");
      console.log(userData.token);

      localStorage.setItem("token", userData.token);
    } else {
      alert(userData.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLoginCredentials({
      ...userLoginCredentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h2 className="text-3xl font-bold">
        {isSignIn ? "Welcome back!, login" : "Create a new account"}
      </h2>

      <div className="mt-6 flex flex-col gap-5">
        <Input
          name="email"
          labelName="Email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          labelName="Password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />{" "}
        {!isSignIn && (
          <>
            <Input
              labelName="user name"
              name="userName"
              type="text"
              placeholder="user name"
              onChange={handleChange}
            />
            <Input
              labelName="Description"
              name="description"
              type="text"
              placeholder="Description"
              onChange={handleChange}
            />
            <Input
              labelName="Profile"
              name="profile"
              type="text"
              placeholder="Profile (Use cloudinary to get url)"
              onChange={handleChange}
            />{" "}
          </>
        )}
        <Button className="rounded-md" role="submit" onClick={handleSubmit}>
          {isSignIn ? "Sign in" : "Sign up"}
        </Button>
        {isSignIn ? (
          <div className="flex gap-1">
            <p>Create a new account</p>
            <button
              className="font-medium text-accent"
              onClick={() => {
                setIsSignIn(false);
              }}
            >
              Sign up
            </button>
          </div>
        ) : (
          <div className="flex gap-1">
            <p>Already have an account</p>
            <button
              onClick={() => {
                setIsSignIn(true);
              }}
              className="font-medium text-accent"
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </>
  );
};
