import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'


export default function ListServices() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetchProducts() 
    })

    const fetchProducts = async () => {
        await axios.get(`https://pure-chamber-42539.herokuapp.com/api/services`).then(({data})=>{
            setProducts(data)
        })
    }

    const deleteProduct = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`https://pure-chamber-42539.herokuapp.com/api/services/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchProducts()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }

    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/sevice/create"}>
                    Tambah Surat
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>#</th>                                   
                                    <th>Topic</th>
                                    <th>Deskripsi</th>
                                    <th>Status</th>
                                    <th>Contact</th>                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length > 0 && (
                                        products.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.id}</td> 
                                                <td>{row.topic}</td>
                                                <td>{row.content}</td>
                                                <td>{row.status}</td>
                                                <td>{row.contact}</td>
                                                <td>
                                                    <Link to={`/sevice/edit/${row.id}`} className='btn btn-success me-2'>
                                                        Ubah
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteProduct(row.id)}>
                                                        Hapus
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}