import { Container, Col } from "@citrica/objects";
import Navbar from "@/components/citrica-ui/navbar";
import ProductsList from "@/components/product-list";
import Link from "next/link";
import Carousel from "@/components/citrica-ui/carrusel";

export default function Home() {
	return (
		<>
			<Navbar />
			<section id="hero-section" className="hero-section">
				<Container>
					<Col cols={{ lg: 8, md: 6, sm: 4 }} className="">
						<div className="flex flex-col h-screen justify-center gap-14 sm:justify-center pb-20">
							<picture>
								<img className="logo-prime-grill" src={'/img/ojohorus.png'} alt='logo' />
							</picture>
							<h2 className="display text-gold-brand">
								Optica Lets
							</h2>
						</div>
					</Col>
				</Container>
			</section>
			<section id="historia" className=" ">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} className="center mb-14 ">
						<div className=" flex mt-16 mb-14 headline justify-start items-center">
							<h2 className="flex items-center justify-start headline text-gold-brand">Nuestra Historia</h2>
						</div>
						<Container>
							<Col cols={{ lg: 12, md: 6, sm: 4 }} className="mb-[32px]" >
								
								<p className="flex text-left copy py-5">
									Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed. Massa scelerisque sed dignissim in amet mi donec morbi nulla. Elementum lorem fermentum at nulla odio porttitor. Posuere suspendisse cras malesuada aenean.
								</p>
							</Col>
							{/* <Col cols={{ lg: 12, md: 6, sm: 4 }} className="flex  justify-end" >
								<Link className=" flex justify-center bg-black-brand text-gold-lightest label items-center  border-2 rounded-md w-[179px] h-[40px]" href='Ver-todos'>
									Visitar
								</Link>
							</Col> */}
						</Container>
					</Col>
				</Container>
			</section>
			<section className="sections-paddings not-lg bg-red-brand" >
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }}>
						<div className="py-6">
							<h2 className="headline text-white">Misión</h2>
							<p className="title text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime suscipit sunt exercitationem facere eveniet dolorum enim, dolorem temporibus iure saepe nobis dolor expedita cupiditate ipsa accusamus debitis necessitatibus quis reiciendis.</p>
						</div>
					</Col>
				</Container>
			</section>
			<section id="mision-vision" className="mision-vision">
				<Container>
					<Col cols={{ lg: 6, md: 6, sm: 4 }} className="mision-vision-item-left only-lg" >
						<div className="py-6">
							<h2 className="headline text-white">Misión</h2>
							<p className="title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi dolorem pariatur eos voluptatibus a quia veritatis laudantium ipsam aspernatur temporibus error sed porro ipsum, minima, expedita doloremque, repellat quo!</p>
						</div>
					</Col>
					<Col cols={{ lg: 6, md: 6, sm: 4 }}>
						<div className="py-6">
							<h2 className="headline text-gold-brand">Visión</h2>
							<p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque nihil obcaecati quod, deserunt adipisci quasi perferendis ad maiores sunt? Fugiat unde dolorem dolore ipsam, perspiciatis voluptas iure aliquid autem?</p>
						</div>
					</Col>
				</Container>
			</section>
			<section id="our-products" className="our-products pb-32">
				<ProductsList />
			</section>
			<section id="contact-section" className="contact-section h-96">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} className=" only-lg">
						<div className="h-72 flex flex-col justify-center">
							<h2 className="headline text-gold-brand">Contactanos</h2>
							<div className="flex gap-[32px] flex-row  flex-wrap ">
								<a href="tel:+51946351770">
									<span className="flex  text-white copy gap-[16px] items-center  ">
										<picture>
											<img src={'/img/call.svg'} alt="call logo" />
										</picture>
										946 351 770
									</span>
								</a>
								<a href="mailto:info@corporacionjordi.com" target="_blank">
									<span className="flex copy text-white gap-[16px] items-center">
										<picture>
											<img src={'/img/mail.svg'} alt="mail logo" />
										</picture>
										info@corporacionjordi.com
									</span>
								</a>
							</div>
						</div>
					</Col>
				</Container>
			</section>
			<section>
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} className="bg-black-brand only-md">
						<div className="h-[219px] flex flex-col justify-center">
							<h2 className="headline ml-[30px] text-gold-brand">Contactanos</h2>
							<div className="flex gap-[32px] ml-[30px]  flex-row  flex-wrap ">
								<a href="tel:+51946351770">
									<span className="flex  text-white copy gap-[16px] items-center  ">
										<picture>
											<img src={'/img/call.svg'} alt="call logo" />
										</picture>
										946 351 770
									</span>
								</a>
								<a href="mailto:info@corporacionjordi.com" target="_blank">
									<span className="flex copy text-white gap-[16px] items-center">
										<picture>
											<img src={'/img/mail.svg'} alt="mail logo" />
										</picture>
										info@corporacionjordi.com
									</span>
								</a>
							</div>
						</div>
					</Col>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} className="bg-black-brand only-sm">
						<div className="py-10 flex flex-col justify-center">
							<h2 className="headline ml-[30px] text-gold-brand mb-[32px]">Contactanos</h2>
							<div className="flex gap-[32px] ml-[30px] flex-col flex-wrap ">
								<a href="tel:+51946351770">
									<span className="flex  text-white copy gap-[16px] items-center  ">
										<picture>
											<img src={'/img/call.svg'} alt="call logo" />
										</picture>
										946 351 770
									</span>
								</a>
								<a href="mailto:info@corporacionjordi.com" target="_blank">
									<span className="flex copy text-white gap-[16px] items-center">
										<picture>
											<img src={'/img/mail.svg'} alt="mail logo" />
										</picture>
										info@corporacionjordi.com
									</span>
								</a>
							</div>
						</div>
					</Col>
				</Container>
			</section>
			<section id="carrusel" className=" bg-black-brand carrusel flex justify-center items-center w-full">
				<Container className="flex justify-center">
					<Col cols={{ lg: 12, md: 6, sm: 4 }} noPadding>
						<div className=" flex flex-col h-full">
						<Carousel/>
						</div>
					</Col>
				</Container>
			</section>
			<section id="sedes" className="boutiques">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} className="center ">
						<h2 className="headline  mt-28 text-gold-brand">BOUTIQUES</h2>
					</Col>
				</Container>
				<Container className="flex justify-between ">
					<Col cols={{ lg: 4, md: 6, sm: 4 }} className="center">
						<div className="pt-10">
							<picture>
								<img src="/img/icons/location_on.svg" alt="" />
							</picture>
							<h2 className="title text-gold-brand">Caracas</h2>
							<p className="body text-white mt-10">Av. Circunvalación del Golf 428 Tda 19 - C.C La Fontana</p>
						</div>
					</Col>
					<Col cols={{ lg: 4, md: 6, sm: 4 }} className="center">
						<div className="pt-10">
							<picture>
								<img src="/img/icons/location_on.svg" alt="" />
							</picture>
							<h2 className="title text-gold-brand">Valencia</h2>
							<p className="body text-white mt-10">MZ C1 - LT 26 - Av. Gastón García Rada</p>
						</div>
					</Col>
					<Col cols={{ lg: 4, md: 6, sm: 4 }} className="center mb-36">
						<div className="pt-10">
							<picture>
								<img src="/img/icons/location_on.svg" alt="" />
							</picture>
							<h2 className="title text-gold-brand">Barquisimeto</h2>
							<p className="body text-white mt-10">Jr. Sargento Lores 889</p>
						</div>
					</Col>
				</Container>
			</section>
		</>
	);
}
