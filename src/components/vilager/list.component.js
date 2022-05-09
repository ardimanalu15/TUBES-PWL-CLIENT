import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'


export default function ListVilager() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetchProducts() 
    })

    const fetchProducts = async () => {
        await axios.get(`https://pure-chamber-42539.herokuapp.com/api/vilagers`).then(({data})=>{
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

          await axios.delete(`https://pure-chamber-42539.herokuapp.com/api/vilagers/${id}`).then(({data})=>{
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
                <Link className='btn btn-primary mb-2 float-end' to={"/vilager/create"}>
                    Tambah Penduduk
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama</th>
                                    <th>NIK</th>
                                    <th>KK</th>
                                    <th>Email</th>
                                    <th>No Hp</th>
                                    <th>Status Kependudukan</th>
                                    <th>Agaman</th>
                                    <th>Pendidikan</th>
                                    <th>Pekerjaan</th>
                                    <th>Jenis Kelamin</th>
                                    <th>RT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length > 0 && (
                                        products.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.id}</td>
                                                <td>{row.name}</td>
                                                <td>{row.nik}</td>
                                                <td>{row.kk}</td>
                                                <td>{row.email}</td>
                                                <td>{row.phone}</td>
                                                <td>{row.status}</td>
                                                <td>{row.religion}</td>
                                                <td>{row.education}</td>
                                                <td>{row.job}</td>
                                                <td>{row.gender}</td>
                                                <td>{row.rt}</td>
                                                <td>
                                                    <Link to={`/vilager/edit/${row.id}`} className='btn btn-success me-2'>
                                                        Ubah
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteProduct(row.id)}>
                                                        hapus
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