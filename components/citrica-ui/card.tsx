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
  url2?: string | null
}
const Card = ({ imageUrl, title, description, btnLabel, btnAction, url2 }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
    <Link href={""} onClick={openModal} scroll={false} className="flex flex-col bg-[rgba(255,255,255,1)] p-6 mb-8 card-container">
      {imageUrl && (
        <picture  className="flex justify-center">
          <img  className="rounded-lg h-[200px] " src={imageUrl} alt="" />
        </picture>
      )}
      {title && (
        <h2 className=" mt-5 title text-gold-brand">{title}</h2>
      )}
      {description && (
        <p className="copy-medium mt-3">{description}</p>
      )}
      {/* {btnAction && btnLabel && (
        <div className="mt-8 flex justify-stard items-end flex-auto">
          <ButtonCUI label={btnLabel} onClick={btnAction} />
        </div>
      )} */}

    </Link>
      {isModalOpen && (
        <Modal
          imageUrl={imageUrl}
          title={title}
          description={description}
          url2={url2}
          onClose={closeModal}
        />
      )}
</>
  )
}

export default Card