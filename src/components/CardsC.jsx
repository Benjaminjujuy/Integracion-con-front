import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardsC = ({titulo, descripcion, precio, imagen }) => {
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
      <Button variant="primary">Ver mas</Button>
    </Card.Body>
  </Card>
  )
}

export default CardsC