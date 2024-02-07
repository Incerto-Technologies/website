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
};
export const LoginForm = () => {
  const [userLoginCredentials, setUserLoginCredentials] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async () => {
    const isValidEmail = validateEmail(userLoginCredentials.email);

    if (!isValidEmail || userLoginCredentials.password === "") {
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
    <div className="mt-6 flex flex-col gap-5">
      <Input
        name="email"
        labelName="Email"
        type="email"
        onChange={handleChange}
      />
      <Input
        labelName="password"
        name="password"
        type="password"
        onChange={handleChange}
      />
      <Button className="rounded-md" role="submit" onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
};
