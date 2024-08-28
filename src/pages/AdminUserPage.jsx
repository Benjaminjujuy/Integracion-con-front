import { Container } from 'react-bootstrap'
import TableC from '../components/TableC'
import { useEffect, useState } from 'react'
import clienteAxios, { configHeaders } from '../helpers/axios'

const AdminUserPage = () => {
  const [users, setUsers] = useState([])

  const obtenerUsuarios = async() => {
    const result = await clienteAxios.get('/usuarios', configHeaders)
    setUsers(result.data.usuarios)
  }

  useEffect(() => {
    obtenerUsuarios()
  }, [])
  
  return (
    <>
    <Container className="my-5">
        <TableC array={users} idPage={'adminUsers'}/>
    </Container>
    </>
  )
}

export default AdminUserPage