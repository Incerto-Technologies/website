"use client";
import { useAppDispatch, useTypedSelector } from "@/hooks/store";
import { setUser } from "@/store/slice/user.slice";
import { validateEmail } from "@/utils/validateEmail";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/action/login";
import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";

type LoginForm = {
  email: string;
  password: string;
  profile?: string;
};
export const LoginForm = () => {
  const [userLoginCredentials, setUserLoginCredentials] = useState<LoginForm>({
    email: "",
    password: "",
    profile: "",
  });

  const router = useRouter();
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = async () => {
    const isValidEmail = validateEmail(userLoginCredentials.email);

    if (!isValidEmail || userLoginCredentials.password === "") {
      alert("all fields are required");
      return;
    }

    if (!isSignIn && !userLoginCredentials.profile) {
      alert("Profile url is required");
      return;
    }

    const userData = await login(userLoginCredentials);
    if (userData.success && userData.user) {
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
          <Input
            labelName="Profile"
            name="profile"
            type="profile"
            placeholder="Profile (Use cloudinary to get url)"
            onChange={handleChange}
          />
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
