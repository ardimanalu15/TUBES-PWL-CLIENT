import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function CreateVilager() {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [nik, setNik] = useState("")
  const [kk, setKk] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState("")
  const [religion, setReligion] = useState("")
  const [education, setEducation] = useState("")
  const [job, setJob] = useState("")
  const [gender, setGender] = useState("")
  const [rt, setRt] = useState("") 
  const [validationError,setValidationError] = useState({})

  const changeHandler = (event) => {
		
	};

  const createVilagers = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('name', name)
    formData.append('nik', nik)
    formData.append('kk', kk)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('status', status)
    formData.append('religion', religion)
    formData.append('education', education)
    formData.append('job', job)
    formData.append('gender', gender)
    formData.append('rt', rt)

    await axios.post(`https://pure-chamber-42539.herokuapp.com/api/vilagers`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/vilager")
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
              <h4 className="card-title">Tambah Data</h4>
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
                <Form onSubmit={createVilagers}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="text" value={name} onChange={(event)=>{
                              setName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
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
                        <Form.Group controlId="Name">
                            <Form.Label>KK</Form.Label>
                            <Form.Control type="text" value={kk} onChange={(event)=>{
                              setKk(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>                  
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(event)=>{
                              setEmail(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>No Hp</Form.Label>
                            <Form.Control type="text" value={phone} onChange={(event)=>{
                              setPhone(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Status Kependudukan</Form.Label>
                            <Form.Control type="text" value={status} onChange={(event)=>{
                              setStatus(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Agama</Form.Label>
                            <Form.Control type="text" value={religion} onChange={(event)=>{
                              setReligion(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Pendidikan</Form.Label>
                            <Form.Control type="text" value={education} onChange={(event)=>{
                              setEducation(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Pekerjaan</Form.Label>
                            <Form.Control type="text" value={job} onChange={(event)=>{
                              setJob(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Control type="text" value={gender} onChange={(event)=>{
                              setGender(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>RT</Form.Label>
                            <Form.Control type="text" value={rt} onChange={(event)=>{
                              setRt(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>                                   
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Save
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