import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import clienteAxios, { configHeaders, configHeadersImagen } from '../helpers/axios';
import { useState } from 'react';


const TableC = ({array, idPage}) => {
  const [show, setShow] = useState(false);
  const [productInfo, setProductInfo] = useState(null)
  const [imagen, setImagen] = useState(null)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const idUsuario = JSON.parse(sessionStorage.getItem('idUsuario'))

    const deleteProduct = async(idProduct) => {
      const confirmDeleteProduct = confirm('Estas seguro que deseas eliminar este producto?')
      if(confirmDeleteProduct){
        const result = await clienteAxios.delete(`/productos/${idProduct}`, configHeaders)
      }
    }

    const enableProduct = async(idProduct) => {
        const confirmEnableProduct = confirm('Estas seguro que deseas habilitar este producto?')

        if(confirmEnableProduct){
            const result = await clienteAxios.put(`/productos/habilitar/${idProduct}`, {},configHeaders)
        }    
    }

    const disabledProduct = async(idProduct) => {
        const confirmDisabledProduct = confirm('Estas seguro que deseas deshabilitar este producto?')

        if(confirmDisabledProduct){
            const result = await clienteAxios.put(`/productos/deshabilitar/${idProduct}`, {},configHeaders)
        }    
    }

    const handleInfoProduct = (product) => {
      handleShow()
      setProductInfo(product)
    }

    const handleInfoUser = (user) => {
      handleShow()
      setUserInfo(user)
    }

    const handleChangeProductInfo = (ev) => {
      setProductInfo({...productInfo, [ev.target.name]: ev.target.value})
    }

    const handleChangeUserInfo = (ev) => {
      setUsernfo({...userInfo, [ev.target.name]: ev.target.value})
    }

    const handleClickProductInfo = async(ev) => {
      ev.preventDefault()
      const result = await clienteAxios.put(`/productos/${productInfo._id}`, productInfo, configHeaders)

      if(result.status === 200){
        if(imagen){
          const formData = new formData()
          formData.append('imagen', imagen)
          const result = await clienteAxios.post(`/productos/agregarImagen/${productInfo._id}`, formData, configHeadersImagen)
          if(result.status === 200){
            alert(`${result.data.msg}`)
            handleClose()
          }
        }else{
          alert(`${result.data.msg}`)
          handleClose()
        }
      }

    }

    const deleteUser = async(idUser) => {
      const confirmDeleteUser = confirm('Estas seguro que deseas eliminar este usuario?')
      if(confirmDeleteUser){
        const result = await clienteAxios.delete(`/usuarios/${idUser}`, configHeaders)
      }
    }

    
    const enableUser = async(idUser) => {
      const confirmEnableUser = confirm('Estas seguro que deseas habilitar este usuario?')

      if(confirmEnableUser){
          const result = await clienteAxios.put(`/usuarios/habilitar/${idUser}`, {}, configHeaders)
      }    
  }

  const disabledUser = async(idUser) => {
      const confirmDisabledUser = confirm('Estas seguro que deseas deshabilitar este usuario?')

      if(confirmDisabledUser){
          const result = await clienteAxios.put(`/usuarios/deshabilitar/${idUser}`, {}, configHeaders)
      }    
  }

  const handleClickUserInfo =async(ev) => {
    ev.preventDefault()

    if(userInfo.rol !== 'admin' && userInfo.rol !== 'usuario'){
      return alert('ERROR. Rol permitido: USUARIO o ADMIN')
    }

      const result = await clienteAxios.put(`/usuarios/${userInfo._id}`, userInfo, configHeaders)

      if(result.status === 200){
        alert(`${result.data.msg}`)
        handleClose()
      }
  }

  return (
    <Table striped bordered hover>
      <thead>
         {
            idPage === 'adminProducts'
            ?
            <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Opciones</th>
           </tr>
           :
           <tr>
           <th>ID</th>
           <th>Usuario</th>
           <th>Rol</th>
           <th>Opciones</th>
        </tr>
         }
      </thead>
       {
         idPage === 'adminProducts'
         ?
      <tbody>
         {
          array.map((product) => 
           <tr key={product._id}>
             <td>{product._id}</td>
             <td>{product.nombre}</td>
             <td>{product.precio}</td>
             <td className='text-center'>
             <img src={product.imagen} alt="" width={'50'}/>
             </td>
             <td className='d-flex justify-content-evenly'>
          <>
            <Button variant="warning" onClick={() => handleInfoProduct(product)}>
              Editar
            </Button>
        
             <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
             <Modal.Title>Modal heading</Modal.Title>
             </Modal.Header>
             <Modal.Body>
              <Form>
             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Nombre</Form.Label>
             <Form.Control type="text" name='nombreUsuario' value={productInfo?.nombre}
               onChange={(ev) => handleChangeProductInfo(ev)}/>
             </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Precio</Form.Label>
              <Form.Control type="number" name='precio' value={productInfo?.precio}
                 onChange={(ev) => handleChangeProductInfo(ev)}/>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Imagen</Form.Label>
               <Form.Control type="file"  onChange={(ev) => setImagen(ev.target.files[0])}/>
               </Form.Group>
                       
               <Button variant="primary" type="submit" onClick={handleClickProductInfo}>
                  Guardar cambios
               </Button>
               </Form>
        
        
               </Modal.Body>
               </Modal>
             </>
               <Button variant='danger' onClick={() => deleteProduct(product._id)}>Eliminar</Button>
               <Button variant={product.bloqueado ? 'succes' : 'info'} onClick={() => product.bloqueado ? 
                enableProduct(product._id) : disabledProduct(product._id)}>{
                 product.bloqueado ? 'Habilitar' : 'Bloquear'}</Button>
                </td>
             </tr>
              )
            }
              </tbody>
              :
              <tbody>
               {
                array.map((user) => 
                  user.id !== idUsuario &&
                   <tr key={user._id}>
                   <td>{user._id}</td>
                   <td>{user.nombreUsuario}</td>
                   <td>{user.role}</td>
                   <td className='d-flex justify-content-evenly'>
                 <>
                   <Button variant="warning" onClick={() => handleInfoUser(user)}>
                      Editar
                   </Button>
        
                   <Modal show={show} onHide={handleClose}>
                   <Modal.Header closeButton>
                   <Modal.Title>Modal heading</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                   <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name='nombre' value={userInfo?.nombreUsuario}
                       onChange={(ev) => handleChangeUserInfo(ev)}/>
                   </Form.Group>
        
                   <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Rol</Form.Label>
                    <Form.Control type="text" name='rol' value={userInfo?.rol}
                      onChange={(ev) => handleChangeUserInfo(ev)}/>
                    </Form.Group>
                       
                   <Button variant="primary" type="submit" onClick={handleClickUserInfo}>
                        Guardar cambios
                   </Button>
                    </Form>
        
        
                   </Modal.Body>
                     </Modal>
                 </>
                    <Button variant='danger' onClick={() => deleteUser(user._id)}>Eliminar</Button>
                     <Button variant={user.bloqueado ? 'succes' : 'info'} onClick={() => user.bloqueado ? 
                     enableUser(user._id) : disabledUser(user._id)}>{
                     product.bloqueado ? 'Habilitar' : 'Bloquear'}</Button>
                  </td>
              </tr>
              )
             }
        </tbody>
       }
    </Table>
  )
}

export default TableC