import { Container, Col } from "@citrica/objects";
import Navbar from "@/components/citrica-ui/navbar";
import ProductsList from "@/components/product-list";

export default function Home() {
	return (
		<>
			<Navbar />
			<section id="hero-section" className="hero-section">
				<Container>
					<Col cols={{ lg: 8, md: 6, sm: 4 }} className="">
						<div className="flex flex-col h-screen justify-end gap-14 sm:justify-center">
							<picture>
								<img className="w-[240px] h-[124px]" src={'/img/jordi-prime-grill-logo.svg'} alt='logo' />
							</picture>
							<h2 className="display text-gold-brand">
								Importación, distribución <br />y procesamiento de carnes angus americana y uruguaya.
							</h2>
						</div>
					</Col>
				</Container>
			</section>
			<section id="our-products" className="our-products">
				<ProductsList />
			</section>
			<section id="parrilla" className="parrilla">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} >
						<div className="h-44 flex flex-col-reverse justify-center items-center">
							<picture>
								<img src={'/img/mi-parrilla.svg'} alt="" />
							</picture>
						</div>
						<p className="copy py-5">Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed. Massa scelerisque sed dignissim in amet mi donec morbi nulla. Elementum lorem fermentum at nulla odio porttitor. Posuere suspendisse cras malesuada aenean. </p>
					</Col>
				</Container>
			</section>
			<section id="delivery" className="delivery">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} >
						<div className="h-44 flex flex-col-reverse justify-center items-center">
							<picture>
								<img src={'###'} alt="" />
							</picture>
						</div>
						<p className="copy py-5">Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed. Massa scelerisque sed dignissim in amet mi donec morbi nulla. Elementum lorem fermentum at nulla odio porttitor. Posuere suspendisse cras malesuada aenean. </p>
					</Col>
				</Container>
			</section>
			<section id="our-partners" className="mx-28 my-28">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} >
						<h2 className="headline mb-12 text-gold-brand">Nuestros socios estratégicos</h2>
					</Col>
				</Container>
				<Container className="flex items-center mx-28 my-28 justify-around">
					<Col cols={{ lg: 2, md: 3, sm: 4 }} className="center mb-14">
						<picture>
							<img width={194} height={165} src={'/img/Logoipsum.svg'} alt="" />
						</picture>
					</Col>
					<Col cols={{ lg: 2, md: 3, sm: 4 }} className="center mb-14">
						<picture>
							<img width={194} height={165} src={'/img/Logoipsum2.svg'} alt="" />
						</picture>
					</Col>
					<Col cols={{ lg: 2, md: 3, sm: 4 }} className="center mb-14">
						<picture>
							<img width={194} height={165} src={'/img/Logoipsum3.svg'} alt="" />
						</picture>
					</Col>
					<Col cols={{ lg: 2, md: 3, sm: 4 }} className="center mb-14">
						<picture>
							<img width={194} height={165} src={'/img/Logoipsum4.svg'} alt="" />
						</picture>
					</Col>
					<Col cols={{ lg: 2, md: 3, sm: 4 }} className="center mb-14">
						<picture>
							<img width={194} height={165} src={'/img/Logoipsum5.svg'} alt="" />
						</picture>
					</Col>
				</Container>
				<Container>
					<Col cols={{ lg: 6, md: 6, sm: 4 }} >
						<p className="body py-5">Lorem ipsum dolor sit amet consectetur. Semper mauris libero enim sed aenean a nunc sed in. Ac mattis venenatis id viverra feugiat. Nunc pellentesque malesuada ipsum lectus felis. Nulla leo auctor diam tristique adipiscing. Pharetra sed nibh viverra sed. Est nunc amet luctus tellus ut nulla eget iaculis enim. Sed aenean tincidunt rhoncus et turpis et ac. Id sed ut adipiscing odio risus nulla. Malesuada. </p>
					</Col>
					<Col cols={{ lg: 6, md: 6, sm: 4 }} >
						<p className="body py-5">Lorem ipsum dolor sit amet consectetur. Semper mauris libero enim sed aenean a nunc sed in. Ac mattis venenatis id viverra feugiat. Nunc pellentesque malesuada ipsum lectus felis. Nulla leo auctor diam tristique adipiscing. Pharetra sed nibh viverra sed. Est nunc amet luctus tellus ut nulla eget iaculis enim. Sed aenean tincidunt rhoncus et turpis et ac. Id sed ut adipiscing odio risus nulla. Malesuada. </p>
					</Col>
				</Container>

			</section>
			<section id="carrusel" className="carrusel">
				<Container>
					<Col cols={{ lg: 8, md: 6, sm: 4 }} className="animate-fade-right">
						<div className="flex flex-col h-screen justify-center gap-14">
							CARRUSEL
						</div>
					</Col>
				</Container>
			</section>
			<section id="boutiques" className="boutiques">
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
							<h2 className="title text-gold-brand">La Molina</h2>
							<p className="body text-white mt-10">Av. Circunvalación del Golf 428 Tda 19 - C.C La Fontana</p>
						</div>
					</Col>
					<Col cols={{ lg: 4, md: 6, sm: 4 }} className="center">
						<div className="pt-10">
							<picture>
								<img src="/img/icons/location_on.svg" alt="" />
							</picture>
							<h2 className="title text-gold-brand">Punta Hermosa</h2>
							<p className="body text-white mt-10">MZ C1 - LT 26 - Av. Gastón García Rada</p>
						</div>
					</Col>
					<Col cols={{ lg: 4, md: 6, sm: 4 }} className="center mb-36">
						<div className="pt-10">
							<picture>
								<img src="/img/icons/location_on.svg" alt="" />
							</picture>
							<h2 className="title text-gold-brand">Iquitos</h2>
							<p className="body text-white mt-10">Jr. Sargento Lores 889</p>
						</div>
					</Col>
				</Container>
			</section>
		</>
	);
}
