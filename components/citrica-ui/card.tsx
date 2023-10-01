'use client'
import Link from "next/link"
import ButtonCUI from "./button"
import { useState } from "react";
import Modal from "./modal";


type CardProps = {
  imageUrl?: string | null
  title?: string | null
  description?: string | null
  btnLabel?: string | null
  btnAction?: () => void | null
}
const Card = ({ imageUrl, title, description, btnLabel, btnAction }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <Link href={""} onClick={openModal} scroll={false} className="flex flex-col bg-[rgba(255,255,255,1)] p-10 mb-8 card-container">
      {imageUrl && (
        <picture  className="flex justify-center">
          <img  className="rounded-lg" src={imageUrl} alt="" />
        </picture>
      )}
      {title && (
        <h2 className=" mt-10 title-medium">{title}</h2>
      )}
      {description && (
        <p className="copy-medium mt-10">{description}</p>
      )}
      {/* {btnAction && btnLabel && (
        <div className="mt-8 flex justify-stard items-end flex-auto">
          <ButtonCUI label={btnLabel} onClick={btnAction} />
        </div>
      )} */}

      {isModalOpen && (
        <Modal
          imageUrl={imageUrl}
          title={title}
          description={description}
          onClose={closeModal}
        />
      )}


    </Link>
  )
}

export default Card