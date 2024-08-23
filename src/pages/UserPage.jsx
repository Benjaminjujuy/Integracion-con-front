import { useEffect, useState } from 'react'
import clienteAxios from '../helpers/axios'
import CarrouselC from '../components/CarrouselC'
import { Col, Container, Row } from 'react-bootstrap'
import CardsC from '../components/CardsC'

const UserPage = () => {
    const [productos, setProductos] = useState([])

    const obtenerProducto = async() => {
        const productosApi = await clienteAxios.get('/productos')
        setProductos(productosApi.data.productos)
    }
  
    useEffect(() => {
      obtenerProducto()
    }, [])


  return (
    <>
     <CarrouselC />
        <Container className="my-5">
          <Row>
             {
               productos.map((producto) => 
               <Col key={producto._id} sm='12' md='6' lg='4'>
               <CardsC idProducto={producto._id} titulo={producto.nombre} descripcion={producto.descripcion} precio={producto.precio}
               imagen={producto.imagen}/>
               </Col>
               )
             }
          </Row>
        </Container>
    </>
  )
}

export default UserPage