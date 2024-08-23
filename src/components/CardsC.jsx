import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';

const CardsC = ({idProducto, titulo, descripcion, precio, imagen }) => {
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
      <Link to={`/product/${idProducto}`} className='btn btn-primary'>Ver mas</Link>
    </Card.Body>
  </Card>
  )
}

export default CardsC