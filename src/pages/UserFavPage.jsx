import { useEffect, useState } from "react"
import clienteAxios, { configHeaders } from "../helpers/axios"
import { Col, Container, Row } from "react-bootstrap"
import CardsC from "../components/CardsC"


const UserFavPage = () => {
    const [favs, setFavs] = useState([])

    const getAllProductsFavs = async() => {
        const result = await clienteAxios.get('/productos/obtenerProdFav', configHeaders)
        setFavs(result.data.productos)
    }

    useEffect (() => {
      getAllProductsFavs()
    }, [])

  return (
    <Container>
        <Row>
           {
            favs.map((product) => 
            <Col>
             <CardsC idProducto={product._id} titulo={product.nombre} descripcion={product.descripcion} 
             precio={product.precio} imagen={product.imagen} idPage={'favs'}/>
            </Col>
            )
           }
        </Row>
    </Container>
  )
}

export default UserFavPage