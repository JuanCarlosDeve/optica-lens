import { Container, Col } from "@citrica/objects";
import Card from "@/components/citrica-ui/card";

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
      <Col className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/cortes-americanos--bife-ancho-800px.jpg'}
          title={'Bife Ancho'}
          description={'Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.'}
        />
      </Col>
      <Col className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/image.jpg'}
          title={'Product name'}
          description={'Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.'}
        />
      </Col>
      <Col className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/image.jpg'}
          title={'Product name'}
          description={'Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.'}
        />
      </Col>
      <Col className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/image.jpg'}
          title={'Product name'}
          description={'Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.'}
        />
      </Col>
      <Col className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/image.jpg'}
          title={'Product name'}
          description={'Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.'}
        />
      </Col>
      <Col className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/image.jpg'}
          title={'Product name'}
          description={'Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.'}
        />
      </Col>
      <Col className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/image.jpg'}
          title={'Product name'}
          description={'Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.'}
        />
      </Col>
      <Col className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/image.jpg'}
          title={'Product name'}
          description={'Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.'}
        />
      </Col>
      <Col className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/image.jpg'}
          title={'Product name'}
          description={'Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.'}
        />
      </Col>
    </Container>
  )
}

export default ProductsList