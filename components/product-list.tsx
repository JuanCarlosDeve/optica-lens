import { Container, Col } from "@citrica/objects";
import Card from "@/components/citrica-ui/card";


export const productImg = [
  {
    title: "Costilla st louis",
    url: "/img/cerdo-americano--costilla-st-louis-800px.jpg",
    description:"",
  },
  {
    title: "Costillar",
    url: "/img/cerdo-americano--costillar-800px.jpg",
    description:"",
  },
  {
    title: "Solomillo",
    url: "/img/cerdo-americano--solomillo-800px.jpg",
    description:"",
  },
  {
    title: "Asado de Tira 3h",
    url: "/img/cortes-americanos--asado-de-tira-3h-800px.jpg",
    description:"",
  },
  {
    title: "Asado de Tira 4h",
    url: "/img/cortes-americanos--asado-de-tira-4h-800px.jpg",
    description:"",
  },
  {
    title: "Asado de Tira sin h",
    url: "/img/cortes-americanos--asado-de-tira-sin-h-800px.jpg",
    description:"",
  },
  {
    title: "Bife Ancho",
    url: "/img/cortes-americanos--bife-ancho-800px.jpg",
    description:"",
  },
  {
    title: "Bife-Angosto",
    url: "/img/cortes-americanos--bife-angosto-800px.jpg",
    description:"",
  },
  {
    title: "Brisket",
    url: "/img/cortes-americanos--brisket-800px.jpg",
    description:"",
  },
  {
    title: "Cocktail Ribs",
    url: "/img/cortes-americanos--cocktail-ribs-800px.jpg",
    description:"",
  },
  {
    title: "Colita de Cuadril",
    url: "/img/cortes-americanos--colita-de-cuadril-800px.jpg",
    description:"",
  },
  {
    title: "Cowboy",
    url: "/img/cortes-americanos--cowboy-800px.jpg",
    description:"",
  },
  {
    title: "Entraña Fina",
    url: "/img/cortes-americanos--entraña-fina-800px.jpg",
    description:"",
  },
  {
    title: "Entrana Gruesa",
    url: "/img/cortes-americanos--entrana-gruesa-800px.jpg",
    description:"",
  },
  {
    title: "Frank Steak",
    url: "/img/cortes-americanos--frank-steak-800px.jpg",
    description:"",
  },
  {
    title: "Picanha",
    url: "/img/cortes-americanos--picanha-800px.jpg",
    description:"",
  },
  {
    title: "Tbone",
    url: "/img/cortes-americanos--tbone-800px.jpg",
    description:"",
  },
  {
    title: "Tomahawk",
    url: "/img/cortes-americanos--tomahawk-800px.jpg",
    description:"",
  },
  {
    title: "Bife Ancho Sur Meat",
    url: "/img/cortes-sur-meat--bife-ancho-800px.jpg",
    description:"",
  },
  {
    title: "Bife Angosto Sur Meat",
    url: "/img/cortes-sur-meat--bife-angosto-800px.jpg",
    description:"",
  },
  {
    title: "Colita de Cuadril Sur Meat",
    url: "/img/cortes-sur-meat--colita-de-cuadril-800px.jpg",
    description:"",
  },
  {
    title: "Lomo Fino Sur Meat",
    url: "/img/cortes-sur-meat--lomo-fino-800px.jpg",
    description:"",
  },
  {
    title: "Medallon de Lomo Sur Meat",
    url: "/img/cortes-sur-meat--medallon-de-lomo-800px.jpg",
    description:"",
  },
  {
    title: "Picanha Sur Meat",
    url: "/img/cortes-sur-meat--picanha-800px.jpg",
    description:"",
  },
  {
    title: "Cerdo Chuleta Sur Meat",
    url: "/img/cortes-sur-meat-cerdo--chuleta-800px.jpg",
    description:"",
  },
  {
    title: "Cerdo Panceta con Piel Sur Meat",
    url: "/img/cortes-sur-meat-cerdo--panceta-con-piel-800px.jpg",
    description:"",
  },
  
];



const ProductsList = () => {
  return (
    <Container>
      <Col cols={{ lg: 12, md: 6, sm: 4 }}>
        <h2 className="headline text-gold-brand mb-12">Nuestros Productos</h2>
      </Col>
      <Col cols={{ lg: 6, md: 6, sm: 4 }} className="">
        <div className="py-6">
          <p className="text-[rgba(29,29,27,1)]">Lorem ipsum dolor sit amet consectetur. Hendrerit eget tempus arcu ultricies tellus dolor cras lorem non. Lectus aenean vitae integer vitae maecenas fames enim malesuada bibendum. Fringilla nulla tortor nunc sed aliquam turpis nisl felis. Hendrerit congue egestas lobortis leo eget vulputate. Diam a eu nec tempus. Magna lobortis est ante at maecenas quam in amet nisl. Consequat nec vulputate enim urna iaculis quisque malesuada nulla eu. Augue aliquet accumsan ac nunc venenatis pretium tortor pharetra.</p>
        </div>
      </Col>
      <Col cols={{ lg: 6, md: 6, sm: 4 }}>
        <div className="py-6 ">
          <p className="text-[rgba(29,29,27,1)]">Lorem ipsum dolor sit amet consectetur. Hendrerit eget tempus arcu ultricies tellus dolor cras lorem non. Lectus aenean vitae integer vitae maecenas fames enim malesuada bibendum. Fringilla nulla tortor nunc sed aliquam turpis nisl felis. Hendrerit congue egestas lobortis leo eget vulputate. Diam a eu nec tempus. Magna lobortis est ante at maecenas quam in amet nisl. Consequat nec vulputate enim urna iaculis quisque malesuada nulla eu. Augue aliquet accumsan ac nunc venenatis pretium tortor pharetra.</p>
        </div>
      </Col>
      {productImg.map((product) => (
  <Col key={product.title} className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
    <Card
      imageUrl={product.url}
      title={product.title}
      description={`Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.`}
    />
  </Col>
))}
    </Container>
  )
}

export default ProductsList