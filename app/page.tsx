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
						<div className="flex flex-col h-screen justify-center gap-4 pb-10">
							<picture className=" flex relative bottom-20 "> 
							{/* ojo    */}
								<img className="logo-prime-grill " src={'/img/ojohorus.png'} alt='logo' />
							</picture>
							<h2 className="display text-gold-brand">
								Opti Lent&apos;s
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
								Integrantes: <br/> Jackelin Calderón  25.990.283<br/>Yesbeli Marcano 31.926.903<br/>Yolennys Nuñez 24.015.166<br/>Norvelys Arias 25.516.927<br/>Maria Vivas 16.564.313
									
								</p>

								<p className="flex text-left copy py-5">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam excepturi officiis veniam itaque deserunt explicabo libero fugiat? Quisquam sapiente deserunt error temporibus, magnam accusantium nulla hic amet dolorum iste at?

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
							<p className="title text-white">En Opti Lents, nuestra misión es proporcionar a nuestros clientes una experiencia integral en cuidado visual, ofreciendo una amplia gama de productos de calidad, desde lentes de contacto hasta gafas de sol, respaldados por un servicio excepcional y tecnología de vanguardia.<br/> Nos comprometemos a satisfacer las necesidades individuales de cada cliente, brindando exámenes visuales precisos, asesoramiento experto y soluciones personalizadas para mejorar su salud ocular y su calidad de vida.<br/>  Nos esforzamos por mantenernos a la vanguardia de la industria óptica, garantizando la excelencia en cada aspecto de nuestro negocio y promoviendo la importancia de la salud visual en nuestra comunidad.</p>
						</div>
					</Col>
				</Container>
			</section>
			<section id="mision-vision" className="mision-vision">
				<Container>
					<Col cols={{ lg: 6, md: 6, sm: 4 }} className="mision-vision-item-left only-lg" >
						<div className="py-6">
							<h2 className="headline text-white">Misión</h2>
							<p className="title text-white">En Opti Lents, nuestra misión es proporcionar a nuestros clientes una experiencia integral en cuidado visual, ofreciendo una amplia gama de productos de calidad, desde lentes de contacto hasta gafas de sol, respaldados por un servicio excepcional y tecnología de vanguardia.<br/> Nos comprometemos a satisfacer las necesidades individuales de cada cliente, brindando exámenes visuales precisos, asesoramiento experto y soluciones personalizadas para mejorar su salud ocular y su calidad de vida.<br/>  Nos esforzamos por mantenernos a la vanguardia de la industria óptica, garantizando la excelencia en cada aspecto de nuestro negocio y promoviendo la importancia de la salud visual en nuestra comunidad.</p>
						</div>
					</Col>
					<Col cols={{ lg: 6, md: 6, sm: 4 }}>
						<div className="py-6">
							<h2 className="headline text-gold-brand">Visión</h2>
							<p className="title">En Opti Lents, aspiramos a ser líderes reconocidos en el sector óptico, distinguidos por nuestra excelencia en productos, servicios y atención al cliente.<br/>  Nos esforzamos por expandir nuestra presencia en el mercado nacional e internacional, estableciendo alianzas estratégicas con proveedores de calidad y utilizando tecnologías innovadoras para ofrecer soluciones visuales de vanguardia.<br/>  Buscamos ser un referente en la promoción de la salud visual, educando a la comunidad sobre la importancia del cuidado de los ojos y contribuyendo al bienestar general de nuestros clientes.<br/>  Nuestra visión es ser la primera opción para quienes buscan soluciones ópticas confiables, personalizadas y de alta calidad.</p>
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
										000 000 000
									</span>
								</a>
								<a href="mailto:optilents.24@gmail.com" target="_blank">
									<span className="flex copy text-white gap-[16px] items-center">
										<picture>
											<img src={'/img/mail.svg'} alt="mail logo" />
										</picture>
										optilents.24@gmail.com
									</span>
								</a>
							</div>
						</div>
					</Col>
				</Container>
			</section>
			<section>
				<Container noPadding>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} className="bg-black-brand only-md">
						<div className="h-[219px] flex flex-col justify-center">
							<h2 className="headline ml-[30px] text-gold-brand">Contactanos</h2>
							<div className="flex gap-[32px] ml-[30px]  flex-row  flex-wrap ">
								<a href="tel:+51946351770">
									<span className="flex  text-white copy gap-[16px] items-center  ">
										<picture>
											<img src={'/img/call.svg'} alt="call logo" />
										</picture>
										000 000 000
									</span>
								</a>
								<a href="mailto:optilents.24@gmail.com" target="_blank">
									<span className="flex copy text-white gap-[16px] items-center">
										<picture>
											<img src={'/img/mail.svg'} alt="mail logo" />
										</picture>
										optilents.24@gmail.com
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
										000 000 000
									</span>
								</a>
								<a href="mailto:optilents.24@gmail.com" target="_blank">
									<span className="flex copy text-white gap-[16px] items-center">
										<picture>
											<img src={'/img/mail.svg'} alt="mail logo" />
										</picture>
										optilents.24@gmail.com
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
			<section id="sedes" className="boutiques ">
				<div className="backdrop-blur-md">

				<Container >
					<Col cols={{ lg: 12, md: 6, sm: 4 }} className="center ">
						<h2 className="headline  mt-28 text-gold-brand">SEDE</h2>
					</Col>
				</Container>
				<Container className="flex justify-between ">
					<Col cols={{ lg: 12, md: 6, sm: 4 }} className="center">
						<div className="pt-10">
							<a href="https://maps.app.goo.gl/cRJHczsoUHdU4rCo9" target="_blank"> 
							<picture className="hover:cursor-pointer">
								<img src="/img/icons/location_on.svg" alt="" />
							</picture>
							</a>
							<h2 className="title text-gold-brand">Caracas</h2>
							<p className="body text-black mt-10">Centro comercial Sambil Chacao, piso 1 local #12</p>
						</div>
					</Col>
					{/* <Col cols={{ lg: 4, md: 6, sm: 4 }} className="center">
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
					</Col> */}
				</Container>
				</div>
			</section>
		</>
	);
}
