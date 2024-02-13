"use client";

import { Container, Col } from "@citrica/objects";
import Card from "@/components/citrica-ui/card";
import { useEffect, useState } from "react";
import Modal from "./citrica-ui/modal";
import {Select, SelectItem} from "@nextui-org/react";


const allProducts = [
  {
    title: "Lentes de Sol",
    url: "/img/lentes-de-sol-polarizados.jpg",
    description: "",
    url2: "",
    category_id: 1,
  },
  {
    title: "Lentes de Lectura",
    url: "/img/lentes-lectura.jpg",
    description: "",
    url2: "",
    category_id: 1,
  },
  {
    title: "Lentes con UV",
    url: "/img/lente-uv.jpeg",
    description: "",
    url2: "",
    category_id: 1,
  },
  {
    title: "Lentes para niños",
    url: "/img/lentes-nino.jpg",
    description: "",
    url2: "",
    category_id: 1,
  },
  {
    title: "Lentes para Deporte",
    url: "/img/lentes-deporte.jpg",
    description: "",
    url2: "",
    category_id: 1,
  },
  {
    title: "Lentes para PC",
    url: "/img/lentes-pc.jpg",
    description: "",
    url2: "",
    category_id: 1,
  },
  {
    title: "Azul",
    url: "/img/contacto-azul.jpeg",
    description: "",
    url2: "",
    category_id: 2,
  },
  {
    title: "Examen de la Vista",
    url: "/img/examenes.jpg",
    description: "",
    url2: "",
    category_id: 3,
  },
  
  


];

const categories = [
  {
    value: 0,
    label: "Todos"
  },
  {
    value: 1,
    label: "Lentes"
  },
  {
    value: 2,
    label: "Lentes de Contacto"
  }, 
  {
    value: 3,
    label: "Servicios"
  },
  
]


const ProductsList = () => {
  const [ products, setProducts ] = useState(allProducts)
  const [currentCategory, setCurrentCategory] = useState('0') // set initial Cateory 0,1,2,3

  const handleChangeCategory = (id:string) => {
    if(currentCategory === '0'){
      setProducts(allProducts)
    } else {
      setProducts(allProducts.filter( item => item.category_id === parseInt(id) ))
    }
  }

  useEffect(()=>{
    handleChangeCategory(currentCategory)
  },[currentCategory])

  return (
    <Container>
      <Col cols={{ lg: 12, md: 6, sm: 4 }}>
        <h2 className="headline text-gold-brand mb-12">Nuestros Productos</h2>
      </Col>
      <Col cols={{ lg: 6, md: 6, sm: 4 }} className="">
        <div className="py-6">
          <p className="text-white">Lorem ipsum dolor sit amet consectetur. Hendrerit eget tempus arcu ultricies tellus dolor cras lorem non. Lectus aenean vitae integer vitae maecenas fames enim malesuada bibendum. Fringilla nulla tortor nunc sed aliquam turpis nisl felis. Hendrerit congue egestas lobortis leo eget vulputate. Diam a eu nec tempus. Magna lobortis est ante at maecenas quam in amet nisl. Consequat nec vulputate enim urna iaculis quisque malesuada nulla eu. Augue aliquet accumsan ac nunc venenatis pretium tortor pharetra.</p>
        </div>
      </Col>
      <Col cols={{ lg: 6, md: 6, sm: 4 }} className="mb-14">
        <div className="py-6 ">
          <p className="text-white">Lorem ipsum dolor sit amet consectetur. Hendrerit eget tempus arcu ultricies tellus dolor cras lorem non. Lectus aenean vitae integer vitae maecenas fames enim malesuada bibendum. Fringilla nulla tortor nunc sed aliquam turpis nisl felis. Hendrerit congue egestas lobortis leo eget vulputate. Diam a eu nec tempus. Magna lobortis est ante at maecenas quam in amet nisl. Consequat nec vulputate enim urna iaculis quisque malesuada nulla eu. Augue aliquet accumsan ac nunc venenatis pretium tortor pharetra.</p>
        </div>
      </Col>
      <Col cols={{ lg: 12, md: 6, sm: 4 }} className="category-selector">
        <Select
          label="Seleccione categoría"
          className="max-w-xs"
          onChange={e => setCurrentCategory(e.target.value) }
        >
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
        </Select>
        
      </Col>
      {products.map((product) => (
        <Col key={product.title} className="flex items-stretch" cols={{ lg: 4, md: 3, sm: 4 }}>
          <Card
            imageUrl={product.url}
            title={product.title}
            description={`Lorem ipsum dolor sit amet consectetur. Orci donec non rhoncus nulla volutpat. Vulputate dolor vestibulum arcu tincidunt sed.`}
            url2={product.url2}
          />
        </Col>
      ))}

    </Container>
  )
}

export default ProductsList