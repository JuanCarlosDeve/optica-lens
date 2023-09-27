import { Container, Col } from "@citrica/objects";
import Link from "next/link"
const FooterCUI = () => {
  return (
    <>
      <footer className=" py-10 bg-black-brand">
        <Container className="flex justify-between">
          <Col cols={{ lg: 4, md: 6, sm: 4 }} className="flex justify-center  mb-3 only-lg">
            <div className="flex flex-col">
              <div className="flex gap-5 mb-1  copy text-gray-brand ">
                <picture className="">
                  <img src={'/img/icons/mail.svg'} alt="mail logo" />
                </picture>
                info@jordiprimegrill.com
              </div>
              <div className="flex gap-4 copy text-gray-brand ">
                <picture>
                  <img src={'/img/icons/call.svg'} alt="call logo" />
                </picture>
                <span>000 000 000</span>
              </div>
            </div>
          </Col>
          <Col cols={{ lg: 4, md: 6, sm: 4 }} className="center mb-10">
            <div className='flex justify-center items-center' >
              <picture>
                <img className='center w-[150px] h-[64px] ' src="img/jordi-prime-grill-logo.svg" alt="jordi logo" />
              </picture>
            </div>
          </Col>
          <Col cols={{ lg: 4, md: 6, sm: 4 }} className="flex justify-center mb-3 not-lg">
            <div className="flex items-center gap-1 mb-8 flex-col">
              <div className="flex gap-5   copy text-gray-brand ">
                <picture>
                  <img src={'/img/icons/mail.svg'} alt="mail logo" />
                </picture>
                info@corporacionjordi.com
              </div>
              <div className="flex gap-4 copy text-gray-brand ">
                <picture>
                  <img src={'/img/icons/call.svg'} alt="call logo" />
                </picture>
                <span>946 351 770</span>
              </div>
            </div>
          </Col>
          <Col cols={{ lg: 4, md: 6, sm: 4 }} className="flex justify-center mb-3 only-lg">
            <div className=" flex flex-col mt-[2px] ">
              <div className="flex gap-8 mb-[16px] justify-end">
                <Link href="#">
                  <picture>
                    <img className="h-8" src="img/icons/inde.svg" alt="inde icon" />
                  </picture>
                </Link>
                <Link href="#">
                  <picture>
                    <img className="h-8" src="img/icons/Instagram.svg" alt="inde icon" />
                  </picture>
                </Link>
                <Link href="#">
                  <picture>
                    <img className="h-8" src="img/icons/face.svg" alt="face icon" />
                  </picture>
                </Link>
              </div>
              <span className="flex flex-wrap-reverse justify-end copy  text-gray-brand">
              Jordi Prime Grill - 2023 © Copyrights.
              </span>
              <span className="flex justify-end items-center flex-wrap copy text-gray-brand ">
                All rights reserved.
              </span>
            </div>
          </Col>
          <Col cols={{ lg: 4, md: 6, sm: 4 }} className="justify-center copy mb-3 not-lg">
            <div className=" flex  items-center flex-col mt-[2px] ">
              <div className="flex gap-8 mb-[16px] ">
                <Link href="#">
                  <picture>
                    <img className="h-8" src="img/icons/inde.svg" alt="inde icon" />
                  </picture>
                </Link>
                <Link href="#">
                  <picture>
                    <img className="h-8" src="img/icons/Instagram.svg" alt="inde icon" />
                  </picture>
                </Link>
                <Link href="#">
                  <picture>
                    <img className="h-8" src="img/icons/face.svg" alt="face icon" />
                  </picture>
                </Link>
              </div>
              <span className="flex flex-wrap-reverse justify-end text-gray-brand">
                Jordi Prime Grill - 2023 © Copyrights.
              </span>
              <span className="flex justify-end items-center flex-wrap text-gray-brand ">
                All rights reserved.
              </span>
            </div>
          </Col>
        </Container>
      </footer>
    </>
  )
}

export default FooterCUI