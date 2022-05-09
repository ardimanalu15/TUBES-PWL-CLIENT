import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditKtp() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("")
  const [imagertrw, setImagertrw] = useState(null)
  const [image, setImage] = useState(null)
  const [imagepbb, setImagepbb] = useState(null)
  const [imagekk, setImagekk] = useState(null)
  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchProduct()
  })

  const fetchProduct = async () => {
    await axios.get(`https://pure-chamber-42539.herokuapp.com/api/ktp/${id}`).then(({data})=>{
      const { title, description,status} = data.ktp
      setTitle(title)
      setDescription(description)
      setStatus(status)
      
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  const changeHandler = (event) => {
		setImagertrw(event.target.files[0]);
    setImage(event.target.files[0]);
    setImagepbb(event.target.files[0]);
    setImagekk(event.target.files[0]);
	};

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('_method', 'PATCH');
    formData.append('title', title)
    formData.append('description', description)
    formData.append('status', status)
    if(imagertrw!==null){
      formData.append('imagertrw', imagertrw)
    }
    if(image!==null){
      formData.append('image', image)
    }
    if(imagepbb!==null){
      formData.append('imagepbb', imagepbb)
    }
    if(imagekk!==null){
      formData.append('imagekk', imagekk)
    }

    await axios.post(`https://pure-chamber-42539.herokuapp.com/api/ktp/${id}`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/ktps")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Edit Data</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={updateProduct}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={(event)=>{
                              setTitle(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value={description} onChange={(event)=>{
                              setDescription(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row> 
                      <Col>
                      <Form.Group className="mb-3">
                      <Form.Label>Status </Form.Label>
                      <Form.Select type="text" value={status} onChange={(event)=>{ setStatus(event.target.value)
                            }}>
                      <option value='Belum'>Belum </option>
                      <option value='Sedang Dikerjakan' >Sedang Dikerjakan</option>
                      <option value='Sudah Selesai' >Sudah Selesai</option>                      
                            
                      
                      </Form.Select>
                      </Form.Group>
                      </Col>  
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Upload Surat pernyataan RT/RW</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Upload Foto Diri</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Upload Surat Pajak Bumi Dan Bangunan</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Upload Foto Kartu Keluaga</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}