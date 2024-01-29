"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useModalContext } from "./ModalProvider";

export const Modal = () => {
  const { modal, setModal } = useModalContext();
  useEffect(() => {
    if (modal.toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal.toggle]);

  return (
    <AnimatePresence>
      {modal.toggle && (
        <>
          <div
            className="modal fixed left-0 top-0 z-50 min-h-screen min-w-full bg-black bg-opacity-40"
            onClick={() => {
              setModal({
                toggle: false,
                children: null,
              });
            }}
          ></div>
          <motion.div className="fixed left-1/2 top-1/2 z-[200] h-80 w-5/6 max-w-[600px] -translate-x-1/2 -translate-y-1/2">
            {modal.children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
