import { useEffect, useState } from "react"
import clienteAxios, { configHeaders } from "../helpers/axios"
import TableC from "../components/TableC"
import { Button, Container } from "react-bootstrap"


const UserCartPage = () => {
    const [cart, setCart] = useState([])

    const getAllProductsCart = async() => {
        const result = await clienteAxios.get('/productos/obtenerProdCart', configHeaders)
        setCart(result.data.productos)
    }

    const handlePayMP = () => {

    }

    useEffect (() => {
        getAllProductsCart()
    }, [])
  return (
    <>
    <Container className="my-5">
    <TableC array={cart} idPage={'userCart'}/>
    </Container>
    <Button className="mx-5 my-5" onClick={handlePayMP}>Pagar</Button>
    </>
  )
}

export default UserCartPage

