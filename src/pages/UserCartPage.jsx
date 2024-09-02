import { useEffect, useState } from "react"
import clienteAxios, { configHeaders } from "../helpers/axios"
import TableC from "../components/TableC"


const UserCartPage = () => {
    const [cart, setCart] = useState([])

    const getAllProductsCart = async() => {
        const result = await clienteAxios.get('/productos/obtenerProdCart', configHeaders)
        setCart(result.data.productos)
    }

    useEffect (() => {
        getAllProductsCart()
    }, [])
  return (
    <>
    <TableC array={cart} idPage={'userCart'}/>
    </>
  )
}

export default UserCartPage