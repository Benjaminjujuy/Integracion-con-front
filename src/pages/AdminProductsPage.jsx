import { Container } from "react-bootstrap"
import TableC from "../components/TableC"
import { useEffect, useState } from "react"
import clienteAxios from "../helpers/axios"


const AdminProductsPage = () => {
    const [products, setProducts] = useState([])

    const obtenerProductosApi = async() => {
      const result = await clienteAxios.get('/productos')
      setProducts(result.data.productos)
    }

    useEffect(() => {
     obtenerProductosApi()
    }, [])

  return (
    <>
    <Container className="my-5">
        <TableC array={products} idPage={'adminProducts'}/>
    </Container>
    </>
  )
}

export default AdminProductsPage