import { Container } from 'react-bootstrap'
import TableC from '../components/TableC'

const AdminUserPage = () => {
  return (
    <>
    <Container className="my-5">
        <TableC array={products} idPage={'adminProducts'}/>
    </Container>
    </>
  )
}

export default AdminUserPage