"use client";

import { Input } from "../elements/Input";
import { AppTextArea } from "../elements/AppTextArea";
import { useState } from "react";
import { Button } from "../elements/Button";
import { Send } from "../elements/icons/Send";

type FormData = {
  email: string;
  message: string;
};

export const ContactCard = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });

  const [errorFormData, setErrorFormData] = useState<FormData>({
    email: "",
    message: "",
  });

  const submitForm = () => {
    console.log(formData.email.trim().length, "length");

    let emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let errorFormData = {
      email: "",
      message: "",
    };

    if (formData.email.trim().length < 1) {
      errorFormData = {
        ...errorFormData,
        email: "Email is required",
      };
    }

    if (formData.email.trim().length > 0 && !emailRegex.test(formData.email)) {
      errorFormData = {
        ...errorFormData,
        email: "Email is not valid",
      };
    }

    if (!formData.message.trim()) {
      errorFormData = {
        ...errorFormData,
        message: "Message is required",
      };
    }

    setErrorFormData(errorFormData);

    if (formData.email && formData.message) {
      console.log(formData, "result");
    }
  };

  return (
    <section className="rounded-[20px] bg-[#121815] px-[18px] py-[38px] md:p-9">
      <div>
        <Input
          labelName="Email"
          id="email"
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
          value={formData.email}
          name="email"
          type="email"
        />
        {errorFormData.email && (
          <p className="mt-1 text-xs text-[#FF0000] md:mt-2 md:text-sm">
            {errorFormData.email}
          </p>
        )}
      </div>
      <div className="mt-8">
        <AppTextArea
          onChange={(e) => {
            setFormData({
              ...formData,
              message: e.target.value,
            });
          }}
          labelName="Message"
          id="message"
          name="message"
          value={formData.message}
        />
        {errorFormData.message && (
          <p className="mt-1 text-xs text-[#FF0000] md:mt-1 md:text-sm">
            {errorFormData.message}
          </p>
        )}
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Button
          className="rounded-2xl    bg-[#0F937C] px-5 py-3"
          onClick={() => {
            submitForm();
          }}
          role="button"
        >
          <div className="flex gap-3">
            <p className="font-bold">Send Enquiry</p>
            <Send />
          </div>
        </Button>
      </div>
    </section>
  );
};
