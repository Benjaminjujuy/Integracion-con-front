import { useEffect, useState } from "react"
import clienteAxios, { configHeaders } from "../helpers/axios"
import { Container, Row } from "react-bootstrap"


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
   <>
    <Container>
        <Row>
           {
            
           }
        </Row>
    </Container>
   </>
  )
}

export default UserFavPage