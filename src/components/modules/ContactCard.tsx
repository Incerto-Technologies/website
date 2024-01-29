"use client";

import { Input } from "../elements/Input";
import { AppTextArea } from "../elements/AppTextArea";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Button } from "../elements/Button";
import { Send } from "../elements/icons/Send";
import { useModalContext } from "../elements/ModalProvider";
import { classNameMerge } from "@/utils/classNameMerge";
import { Loader } from "../elements/Loader";

type FormData = {
  email: string;
  message: string;
};

type ModalProps = {
  message: string;
  status: number;
  setModal: Dispatch<
    SetStateAction<{
      toggle: boolean;
      children: ReactNode;
    }>
  >;
};
const Modal = ({ message, status, setModal }: ModalProps) => {
  {
    return (
      <div className="rounded-[20px] bg-[#121815] p-8">
        <div className="flex w-full items-center justify-between">
          <h3 className="font-gotham text-[24px] font-medium">
            Message from Incerto
          </h3>
          <button
            onClick={() => {
              setModal({
                toggle: false,
                children: null,
              });
            }}
            className="rounded-full p-2 opacity-65 transition-colors hover:opacity-100 focus:outline-none"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.06659 20.4163L0.083252 18.433L8.01659 10.4997L0.083252 2.56634L2.06659 0.583008L9.99992 8.51634L17.9333 0.583008L19.9166 2.56634L11.9833 10.4997L19.9166 18.433L17.9333 20.4163L9.99992 12.483L2.06659 20.4163Z"
                fill="#EDEDED"
              />
            </svg>
          </button>
        </div>

        <div className="my-6 h-[1px] w-full bg-secondary bg-opacity-30"></div>
        <p
          className={classNameMerge(
            "text-center text-lg font-bold ",
            status == 200 ? "text-accent" : "text-red-500",
          )}
        >
          {message}
        </p>
      </div>
    );
  }
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

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { modal, setModal } = useModalContext();

  const validateForm = () => {
    let isValid = true;
    let emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let errorFormData = {
      email: "",
      message: "",
    };

    // Validate email
    if (formData.email.trim().length < 1) {
      errorFormData = {
        ...errorFormData,
        email: "Email is required",
      };
      isValid = false;
    }

    // Validate email format
    if (formData.email.trim().length > 0 && !emailRegex.test(formData.email)) {
      errorFormData = {
        ...errorFormData,
        email: "Email is not valid",
      };
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      errorFormData = {
        ...errorFormData,
        message: "Message is required",
      };
      isValid = false;
    }

    setErrorFormData(errorFormData);
    return isValid;
  };

  const submitForm = async () => {
    // Validate form data
    if (!validateForm()) {
      return;
    }

    // Submit form data
    // setIsLoading(true);

    // Send data to server
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    // });

    // Get response
    // const data = await res.json();
    // const status = res.status;

    // Loading done
    // setIsLoading(false);

    // Toggle Modal and show message
    setModal({
      toggle: true,
      children: (
        // <Modal message={data.message} status={status} setModal={setModal} />
        <Modal
          message={ 
            "Thanks for showing interest. Our engineers will reach back soon."

          }
          status={200}
          setModal={setModal}
        />
      ),
    });

    setFormData({ email: "", message: "" });
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
          className={classNameMerge(
            "rounded-2xl bg-[#0F937C] px-5 py-3 disabled:opacity-50",
            isLoading ? " cursor-not-allowed" : "cursor-pointer",
          )}
          onClick={() => {
            submitForm();
          }}
          aria-label="Send Enquiry"
          role="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-between gap-2">
              <Loader />
              <p>loading</p>
            </div>
          ) : (
            <div className="flex gap-3">
              <p className="font-bold">Send Enquiry</p>
              <Send />
            </div>
          )}
        </Button>
      </div>
    </section>
  );
};
