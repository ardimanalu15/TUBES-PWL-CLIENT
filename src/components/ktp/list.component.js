import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'


export default function ListKtp() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetchProducts() 
    })

    const fetchProducts = async () => {
        await axios.get(`https://pure-chamber-42539.herokuapp.com/api/ktp`).then(({data})=>{
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

          await axios.delete(`https://pure-chamber-42539.herokuapp.com/api/ktp/${id}`).then(({data})=>{
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
                <Link className='btn btn-primary mb-2 float-end' to={"/ktp/create"}>
                    Create Product
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                <th>#</th>
                                    <th>Title</th>
                                    <th>Deskripsi</th>
                                    <th>Status</th>
                                    <th>Upload Surat pernyataan RT/RW</th>
                                    <th>Upload Foto Diri</th>
                                    <th>Upload Surat Pajak Bumi Dan Bangunan</th>
                                    <th>Upload Foto Kartu Keluaga</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   
                                    products.length > 0 && (
                                        products.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.id}</td>
                                                <td>{row.title}</td>
                                                <td>{row.description}</td>
                                                <td>{row.status}</td>
                                                <td>
                                                    <img width="100px" height="100px" alt='' src={`https://pure-chamber-42539.herokuapp.com/storage/ktp/imagertrw/${row.imagertrw}`} />
                                                </td>
                                                <td>
                                                    <img width="100px" height="100px" alt='' src={`https://pure-chamber-42539.herokuapp.com/storage/ktp/image/${row.image}`} />
                                                </td>
                                                <td>
                                                    <img width="100px" height="100px" alt='' src={`https://pure-chamber-42539.herokuapp.com/storage/ktp/imagepbb/${row.imagepbb}`} />
                                                </td>
                                                <td>
                                                    <img width="100px" height="100px" alt='' src={`https://pure-chamber-42539.herokuapp.com/storage/ktp/imagekk/${row.imagekk}`} />
                                                </td>
                                                <td>
                                                    <Link to={`/ktp/edit/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteProduct(row.id)}>
                                                        Delete
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