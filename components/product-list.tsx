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
    description: "Protege tus ojos del sol con estilo con nuestros lentes de sol. Diseñados para brindar una visión clara y cómoda mientras te destacas con elegancia.",
    url2: "",
    category_id: 1,
  },
  {
    title: "Lentes de Lectura",
    url: "/img/lentes-lectura.jpg",
    description: "Disfruta de la lectura con claridad y comodidad con nuestros lentes especializados. Diseñados para adaptarse a tu estilo de vida y necesidades visuales.",
    url2: "",
    category_id: 1,
  },
  {
    title: "Lentes con UV",
    url: "/img/lente-uv.jpeg",
    description: "Protege tus ojos de los dañinos rayos UV con nuestros lentes especiales. Mantén tu visión saludable y protegida mientras disfrutas del aire libre.",
    url2: "",
    category_id: 1,
  },
  {
    title: "Lentes para niños",
    url: "/img/lentes-nino.jpg",
    description: "Cuida los ojos de tus pequeños con nuestros lentes diseñados especialmente para ellos. Ofreciendo protección y estilo para los más jóvenes.",
    url2: "",
    category_id: 1,
  },
  {
    title: "Lentes para Deporte",
    url: "/img/lentes-deporte.jpg",
    description: "Optimiza tu rendimiento deportivo con nuestros lentes especializados. Diseñados para brindar comodidad y protección mientras te concentras en tus actividades favoritas.",
    url2: "",
    category_id: 1,
  },
  {
    title: "Lentes para PC",
    url: "/img/lentes-pc.jpg",
    description: "Protege tus ojos del cansancio digital con nuestros lentes para PC. Reduciendo la fatiga ocular y mejorando tu confort durante largas sesiones frente a la pantalla.",
    url2: "",
    category_id: 1,
  },
  {
    title: "Azul",
    url: "/img/contacto-azul.jpeg",
    description: "Experimenta la libertad visual con nuestros lentes de contacto azules. Brindando comodidad y estilo mientras disfrutas de una visión clara y sin obstáculos.",
    url2: "",
    category_id: 2,
  },
  {
    title: "Examen de la Vista",
    url: "/img/examenes.jpg",
    description: "Obtén una evaluación visual precisa con nuestro examen de la vista. Nuestros profesionales te ayudarán a mantener una visión saludable y nítida.",
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
          <p className="text-white">Descubre nuestra amplia selección de productos ópticos diseñados para proteger y mejorar tu visión. Desde elegantes lentes de sol hasta prácticos lentes para PC, tenemos todo lo que necesitas para cuidar tus ojos con estilo. Explora nuestras opciones y encuentra el complemento perfecto para tu estilo de vida.</p>
        </div>
      </Col>
      <Col cols={{ lg: 6, md: 6, sm: 4 }} className="mb-14">
        <div className="py-6 ">
          <p className="text-white">En Opti Lents, nos comprometemos a ofrecerte soluciones visuales de calidad que se adapten a tus necesidades únicas. Nuestros productos están diseñados con los más altos estándares de confort, estilo y funcionalidad, para que puedas disfrutar de una visión clara y sin esfuerzo en cualquier momento y lugar. ¡Descubre lo que tenemos para ofrecerte y cuida tus ojos con Opti Lents!</p>
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
            description={product.description}
            url2={product.url2}
          />
        </Col>
      ))}

    </Container>
  )
}

export default ProductsList