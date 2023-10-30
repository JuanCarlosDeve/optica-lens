"use client";

import { Container, Col } from "@citrica/objects";
import Card from "@/components/citrica-ui/card";
import { useEffect, useState } from "react";
import Modal from "./citrica-ui/modal";
import {Select, SelectItem} from "@nextui-org/react";


const allProducts = [
  {
    title: "Costilla st louis",
    url: "/img/cerdo-americano--costilla-st-louis-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--costillar-y-costilla-st-louis-800px.jpg",
    category_id: 1,
  },
  {
    title: "Costillar",
    url: "/img/cerdo-americano--costillar-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--costillar-y-costilla-st-louis-800px.jpg",
    category_id: 1,
  },
  {
    title: "Solomillo",
    url: "/img/cerdo-americano--solomillo-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--solomillo-800px.jpg",
    category_id: 1,
  },
  {
    title: "Asado de Tira 3h",
    url: "/img/cortes-americanos--asado-de-tira-3h-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--asado-de-tira-800px.jpg",
    category_id: 2,
  },
  {
    title: "Asado de Tira 4h",
    url: "/img/cortes-americanos--asado-de-tira-4h-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--asado-de-tira-800px.jpg",
    category_id: 2,
  },
  {
    title: "Asado de Tira sin h",
    url: "/img/cortes-americanos--asado-de-tira-sin-h-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--asado-de-tira-800px.jpg",
    category_id: 2,
  },
  {
    title: "Bife Ancho",
    url: "/img/cortes-americanos--bife-ancho-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--bife-ancho-800px.jpg",
    category_id: 2,
  },
  {
    title: "Bife-Angosto",
    url: "/img/cortes-americanos--bife-angosto-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--bife-angosto-lomo-fino-tbone-800px.jpg",
    category_id: 2,
  },
  {
    title: "Brisket",
    url: "/img/cortes-americanos--brisket-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--brisket-800px.jpg",
    category_id: 2,
  },
  {
    title: "Cocktail Ribs",
    url: "/img/cortes-americanos--cocktail-ribs-800px.jpg",
    description: "",
    url2: "",
    category_id: 2,
  },
  {
    title: "Colita de Cuadril",
    url: "/img/cortes-americanos--colita-de-cuadril-800px.jpg",
    description: "",
    url2: "",
    category_id: 2,
  },
  {
    title: "Cowboy",
    url: "/img/cortes-americanos--cowboy-800px.jpg",
    description: "",
    url2: "",
    category_id: 2,
  },
  {
    title: "Entraña Fina",
    url: "/img/cortes-americanos--entraña-fina-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--entrana-flank-steak-800px.jpg",
    category_id: 2,
  },
  {
    title: "Entraña Gruesa",
    url: "/img/cortes-americanos--entrana-gruesa-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--entrana-flank-steak-800px.jpg",
    category_id: 2,
  },
  {
    title: "Frank Steak",
    url: "/img/cortes-americanos--frank-steak-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--entrana-flank-steak-800px.jpg",
    category_id: 2,
  },
  {
    title: "Picanha",
    url: "/img/cortes-americanos--picanha-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--picanha-colita-de-cuadril-800px.jpg",
    category_id: 2,
  },
  {
    title: "Tbone",
    url: "/img/cortes-americanos--tbone-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--bife-angosto-lomo-fino-tbone-800px.jpg",
    category_id: 2,
  },
  {
    title: "Tomahawk",
    url: "/img/cortes-americanos--tomahawk-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--tomahawk-800px.jpg",
    category_id: 2,
  },
  {
    title: "Bife Ancho Sur Meat",
    url: "/img/cortes-sur-meat--bife-ancho-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--bife-ancho-800px.jpg",
    category_id: 4,
  },
  {
    title: "Bife Angosto Sur Meat",
    url: "/img/cortes-sur-meat--bife-angosto-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--bife-angosto-lomo-fino-tbone-800px.jpg",
    category_id: 4,
  },
  {
    title: "Colita de Cuadril Sur Meat",
    url: "/img/cortes-sur-meat--colita-de-cuadril-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--picanha-colita-de-cuadril-800px.jpg",
    category_id: 4,
  },
  {
    title: "Lomo Fino Sur Meat",
    url: "/img/cortes-sur-meat--lomo-fino-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--bife-angosto-lomo-fino-tbone-800px.jpg",
    category_id: 4,
  },
  {
    title: "Medallon de Lomo Sur Meat",
    url: "/img/cortes-sur-meat--medallon-de-lomo-800px.jpg",
    description: "",
    url2: "",
    category_id: 4,
  },
  {
    title: "Picanha Sur Meat",
    url: "/img/cortes-sur-meat--picanha-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--picanha-colita-de-cuadril-800px.jpg",
    category_id: 4,
  },
  {
    title: "Cerdo Chuleta Sur Meat",
    url: "/img/cortes-sur-meat-cerdo--chuleta-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--chuleta-800px.jpg",
    category_id: 4,
  },
  {
    title: "Cerdo Panceta con Piel Sur Meat",
    url: "/img/cortes-sur-meat-cerdo--panceta-con-piel-800px.jpg",
    description: "",
    url2: "/img/cortes-angus--panceta-800px.jpg",
    category_id: 4,
  },

  {
    title: "Carne Molida Angus",
    url: "/img/derivados-carnicos-otros--c-molida-angus.jpg",
    description: "",
    url2: "",
    category_id: 5,
  },
  {
    title: "Carne Molida Premium",
    url: "/img/derivados-carnicos-otros--c-molida-premium.jpg",
    description: "",
    url2: "",
    category_id: 5,
  },
  {
    title: "Chorizo",
    url: "/img/derivados-carnicos-otros--chorizo.jpg",
    description: "",
    url2: "",
    category_id: 5,
  },
  {
    title: "Molleja de Res",
    url: "/img/derivados-carnicos-otros--molleja-de-res.jpg",
    description: "",
    url2: "",
    category_id: 5,
  },
  {
    title: "Top Burguer Queso",
    url: "/img/derivados-carnicos-otros--top-burger-queso.jpg",
    description: "",
    url2: "",
    category_id: 5,
  },
  {
    title: "Top Burguer",
    url: "/img/derivados-carnicos-otros--top-burger.jpg",
    description: "",
    url2: "",
    category_id: 5,
  },
  {
    title: "Cortes de Cerdo",
    url: "/img/generales--cortes-de-cerdo.jpg",
    description: "",
    url2: "/img/cortes-angus--panceta-800px.jpg",
    category_id: 6,
  },
  {
    title: "Cortes de Res",
    url: "/img/generales--cortes-de-res.jpg",
    description: "",
    url2: "",
    category_id: 6,
  },
  {
    title: "Derivados Carnicos",
    url: "/img/generales--derivados-carnicos.jpg",
    description: "",
    url2: "",
    category_id: 6,
  },
  {
    title: "Marinados",
    url: "/img/generales--marinados.jpg",
    description: "",
    url2: "",
    category_id: 6,
  },



];

const categories = [
  {
    value: 0,
    label: "Todos"
  },
  {
    value: 1,
    label: "Cerdo americano"
  },
  {
    value: 2,
    label: "Cortes americanos"
  }, 
  {
    value: 3,
    label: "Cortes angus"
  },
  {
    value: 4,
    label: "Cortes sur meat"
  },
  {
    value: 5,
    label: "Derivados carnicos, otros"
  }, 
  {
    value: 6,
    label: "Generales"
  }
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
          <p className="text-[rgba(29,29,27,1)]">Lorem ipsum dolor sit amet consectetur. Hendrerit eget tempus arcu ultricies tellus dolor cras lorem non. Lectus aenean vitae integer vitae maecenas fames enim malesuada bibendum. Fringilla nulla tortor nunc sed aliquam turpis nisl felis. Hendrerit congue egestas lobortis leo eget vulputate. Diam a eu nec tempus. Magna lobortis est ante at maecenas quam in amet nisl. Consequat nec vulputate enim urna iaculis quisque malesuada nulla eu. Augue aliquet accumsan ac nunc venenatis pretium tortor pharetra.</p>
        </div>
      </Col>
      <Col cols={{ lg: 6, md: 6, sm: 4 }} className="mb-14">
        <div className="py-6 ">
          <p className="text-[rgba(29,29,27,1)]">Lorem ipsum dolor sit amet consectetur. Hendrerit eget tempus arcu ultricies tellus dolor cras lorem non. Lectus aenean vitae integer vitae maecenas fames enim malesuada bibendum. Fringilla nulla tortor nunc sed aliquam turpis nisl felis. Hendrerit congue egestas lobortis leo eget vulputate. Diam a eu nec tempus. Magna lobortis est ante at maecenas quam in amet nisl. Consequat nec vulputate enim urna iaculis quisque malesuada nulla eu. Augue aliquet accumsan ac nunc venenatis pretium tortor pharetra.</p>
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