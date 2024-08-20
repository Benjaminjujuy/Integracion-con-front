import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormC = () => {
  const [formRegister, setFormRegister] = useEffect({})

  const handleChangeRegister = (ev) => {
    setFormRegister({...formRegister, [ev.target.name]: ev.target.value})
  }

  const handleClickRegister = (ev) => {
    const {usuario, contrasenia, reContrasenia} = formRegister

    if(!usuario || !contrasenia || !reContrasenia){
      alert(`Algun campo esta vacio`)
    }
  }



  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Usuario</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name='Usuario' onChange={handleChangeRegister} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name='Usuario' onChange={handleChangeRegister} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Contrasenia</Form.Label>
      <Form.Control type="password" placeholder="Password" name='Contrasenia'onChange={handleChangeRegister} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Repetir Contrasenia</Form.Label>
      <Form.Control type="password" placeholder="Password" name='reContrasenia'onChange={handleChangeRegister}/>
    </Form.Group>

    <Button variant="primary" type="submit">
      Enviar
    </Button>
  </Form>
  )
}

export default FormC