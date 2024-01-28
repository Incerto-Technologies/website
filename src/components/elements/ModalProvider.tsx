"use client";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
  toggle: boolean;
  children: React.ReactNode;
};

type ModalContextWithSetModalType = {
  modal: {
    toggle: boolean;
    children: React.ReactNode;
  };
  setModal: React.Dispatch<
    React.SetStateAction<{
      toggle: boolean;
      children: React.ReactNode;
    }>
  >;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext<ModalContextWithSetModalType>({
  modal: {
    toggle: false,
    children: null,
  },
  setModal: () => {},
});

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState<ModalContextType>({
    toggle: false,
    children: null,
  });

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
