"use client";


import React, { useRef, useEffect } from "react";

type ModalProps = {
  imageUrl?: string | null;
  title?: string | null;
  description?: string | null;
  onClose: () => void;
};

const Modal = ({ imageUrl, title, description, onClose }: ModalProps) => {

  const modalContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalContentRef.current && !modalContentRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);


  return (
    <div className="modal-bg flex-col items-center" >
      <button className="fixed top-3 right-3  flex justify-end w-full " onClick={onClose} >
        <img className="w-[40px] h-[40px] z- " src="/img/icons/Menuclose.svg" alt="menuclose" />
      </button>

      <div className="modal-content p-16 gap-10" ref={modalContentRef}>
        {imageUrl && (
          <div className="flex flex-1 ">
            <img className=" w-full h-full rounded-2xl " src={imageUrl} alt="" />
          </div>
        )}



        <div className="flex-1 flex-col flex gap-3 " >
          <div className="modal-content-tex flex flex-col gap-3" >
            {title && (
              <h2 className="modal-title ">{title}</h2>
            )}
            {description && (
              <p className="modal-description ">{description}</p>
            )}
          </div>
          <div className="flex gap-1 items-center">
            <picture className="flex-col gap-6 flex flex-1 items-center ">
              <img className="flex h-[60px]" src="/img/icons/angus-golden-beef.svg" alt="" />
              <img  className=" flex h-[60px]" src="/img/icons/angus-golden-beef.svg" alt="" />
            </picture>
            <picture className="flex-[2] ">
              <img src="/img/cortes-angus---01-800px.jpg" alt="" />
            </picture>
          </div>
        </div>






      </div>
    </div>
  );
};

export default Modal;
