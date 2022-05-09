import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditServices() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [nik, setNik] = useState("")
  const [topic, setTopic] = useState("")
  const [content, setContent] = useState("")
  const [status, setStatus] = useState("")
  const [contact, setContact] = useState("")

  const [validationError,setValidationError] = useState({})

  // useEffect(()=>{
  //   fetchProduct()
  // })

  const fetchProduct = async () => {
    await axios.get(`https://pure-chamber-42539.herokuapp.com/api/services/${id}`).then(({data})=>{
      const { nik, topic, content, status, contact } = data.services     
      setNik(nik)
      setTopic(topic)
      setContent(content)    
      setStatus(status)
      setContact(contact)      
     
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  const changeHandler = (event) => {		
	};

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('_method', 'PATCH');
    formData.append('nik', nik)
    formData.append('topic', topic)
    formData.append('content', content)
    formData.append('status', status)
    formData.append('contact', contact)
    

    await axios.post(`https://pure-chamber-42539.herokuapp.com/api/services/${id}`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/services")
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
                            <Form.Label>Nik</Form.Label>
                            <Form.Control type="text" value={nik} onChange={(event)=>{
                              setNik(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                      <Form.Group className="mb-3" >
                      <Form.Label>Pelayanan</Form.Label>
                      <Form.Select type="text" value={topic} onChange={(event)=>{ setTopic(event.target.value)
                            }}>
                      <option value='Syarat Pembuatan Domisili' >Syarat Pembuatan Domisili</option>
                      <option value='Syarat Pembuatan Surat Keterangan Domisili Usaha' >Syarat Pembuatan Surat Keterangan Domisili Usaha</option>
                      <option value='Syarat Pembuatan Surat Keterangan Tidak Mampu' >Surat Keterangan Tidak Mampu</option>
                      <option value='Syarat Pembuatan Surat Keterangan Usaha' >Syarat Pembuatan Surat Keterangan Usaha</option>
                            
                      
                      </Form.Select>
                      </Form.Group>
                        {/* <Form.Group controlId="Name">
                            <Form.Label>Topic</Form.Label>
                            <Form.Control type="text" value={topic} onChange={(event)=>{
                              setTopic(event.target.value)
                            }}/>
                        </Form.Group> */}
                      </Col>  
                  </Row>                  
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Content</Form.Label>
                            <Form.Control type="text" value={content} onChange={(event)=>{
                              setContent(event.target.value)
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
                        {/* <Form.Group controlId="Name">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" value={status} onChange={(event)=>{
                              setStatus(event.target.value)
                            }}/>
                        </Form.Group> */}
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" value={contact} onChange={(event)=>{
                              setContact(event.target.value)
                            }}/>
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