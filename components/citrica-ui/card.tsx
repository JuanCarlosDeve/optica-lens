'use client'
import Link from "next/link"
import ButtonCUI from "./button"

type CardProps = {
  imageUrl?: string | null
  title?: string | null
  description?: string | null
  btnLabel?: string | null
  btnAction?: () => void | null
}
const Card = ({ imageUrl, title, description, btnLabel, btnAction }: CardProps) => {
  return (
    <div className="flex flex-col bg-[rgba(255,255,255,1)] p-10 mb-8 card-container">
      {imageUrl && (
        <picture className="flex justify-center">
          <img className="rounded-lg" src={imageUrl} alt="" />
        </picture>
      )}
       {title && (
        <h2 className=" text-[#D5B16C] mt-10 text-3xl font-medium leading-6 tracking-wider">{title}</h2>
      )}
      {description && (
        <p className="copy text-[rgba(142,142,133,1)] mt-10 text-sm font-medium leading-6 tracking-wider">{description}</p>
      )}
      {btnAction && btnLabel && (
        <div className="mt-8 flex justify-stard items-end flex-auto">
          <ButtonCUI label={btnLabel} onClick={btnAction} />
        </div>
      )}

    </Link>
  )
}

export default Card