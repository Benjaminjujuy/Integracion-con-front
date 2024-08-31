import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


const CardsC = ({idProducto, titulo, descripcion, precio, imagen, idPage }) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Title>{titulo}</Card.Title>
      <Card.Text>
        {descripcion}
      </Card.Text>
      <Card.Text>
        {precio}
      </Card.Text>
        <div className='d-flex justify-content-between'>
        <Link to={`/product/${idProducto}`} className='btn btn-primary'>Ver mas</Link>
        {
          idPage === 'favs' &&
          <Link to={`#`} className='btn btn-danger'>Eliminar</Link>
        }
        </div>
    </Card.Body>
  </Card>
  )
}

export default CardsC