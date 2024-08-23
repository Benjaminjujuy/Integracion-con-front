import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import clienteAxios from "../helpers/axios"
import { Button } from "react-bootstrap"


const ProductPage = () => {
    const params = useParams()
    const [product, setProducts] = useState({})
    const obtenerProducto = async() => {
    const result = await clienteAxios.get(`/productos/${params.idProducto}`)
    setProducts(result.data.producto)
    }

    useEffect(() => {
    obtenerProducto()
    }, [])


  return (
   <>
   <img src={`${product?.data?.producto}`} alt="" />
   <p></p>
   <p></p>
   <Button variant="primary" onClick={handleAddProdFav}>Añadir a favorito</Button>
   <Button variant="secondary" onClick={handleAddProdCart}>Añadir a carrito</Button>
   </>
  )
}

export default ProductPage