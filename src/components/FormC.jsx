import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import clienteAxios from '../helpers/axios';
import { useNavigate } from 'react-router-dom';

const FormC = ({idPage}) => {
  const navigate = useNavigate()
  const [formRegister, setFormRegister] = useState({})
  const [formLogin, setFormLogin] = useState({})

  const handleChangeRegister = (ev) => {
    setFormRegister({...formRegister, [ev.target.name]: ev.target.value})
  }

  const handleChangeLogin = (ev) => {
    setFormLogin({...formLogin, [ev.target.name]: ev.target.value})
  }

  const handleClickRegister = async (ev) => {
    ev.preventDefault()
    const {usuario, email ,contrasenia, reContrasenia} = formRegister

    if(!usuario || !contrasenia || !reContrasenia){
      alert(`Algun campo esta vacio`)
    }

    if(contrasenia === reContrasenia){
      const result = await clienteAxios.post('/usuarios', {
        nombreUsuario: usuario,
        emailUsuario: email,
        contrasenia
      })
      if(result.status === 201){
        alert(`${result.data.msg}`)
        setTimeout(() => {
          navigate('/login')
        }, 1000);
      }
    }else{
      alert(`Las contraseñas no coinciden`)
    }
  }

  const handleClickLogin = async (ev) => {
    ev.preventDefault()
    const {usuario, contrasenia} = formLogin

    if(!usuario || !contrasenia){
      alert(`Algun campo esta vacio`)
    }

    const result = await clienteAxios.post('/usuarios/login', {
      nombreUsuario: usuario,
      contrasenia
    })

    if(result.status === 200){
      alert(`${result.data.msg}`)
      sessionStorage.setItem('token', JSON.stringify(result.data.token))
      sessionStorage.setItem('rol', JSON.stringify(result.data.rol))
      if(result.data.rol === 'usuario'){
        setTimeout(() => {
          navigate('/user')
        }, 1000);
      }else{
        setTimeout(() => {
          navigate('/admin')
        }, 1000);
      }
    }
  }


  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Usuario</Form.Label>
      <Form.Control type="text" placeholder="Usuario" name='Usuario' onChange={idPage === 'register' ?
       handleChangeRegister : handleChangeLogin} />
    </Form.Group>

    {
      idPage === '/register' &&
     <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email</Form.Label>
     <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChangeRegister} />
     </Form.Group>
    }


    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Contrasenia</Form.Label>
      <Form.Control type="password" placeholder="Password" name='Contrasenia' onChange={idPage === 'register' ?
       handleChangeRegister : handleChangeLogin} />
    </Form.Group>

    {
      idPage === '/register' &&
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Repetir Contrasenia</Form.Label>
      <Form.Control type="password" placeholder="Password" name='reContrasenia'onChange={handleChangeRegister}/>
    </Form.Group>
    }

    <Button variant="primary" type="submit" onClick={idPage === 'register' ? 
      handleClickRegister : handleClickLogin}>
      {
        idPage === 'register' ? 'Enviar datos' : 'Ingresar'
      }
    </Button>
  </Form>
  )
}

export default FormC