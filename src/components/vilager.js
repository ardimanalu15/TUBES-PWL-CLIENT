import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import DashboardAdmin from './DashboardAdmin';

import EditVilager from "./vilager/edit.component";
import CreateVilager from "./vilager/create.component";
import ListVilager from "./vilager/list.component";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
export default function Villager() {
    const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    useEffect(()=>{
        fetchUserDetail();
    },[]);

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
        });
    }

    function renderElement(){
        if(userdetail){
            return <div>
                <h4>Nama Admin</h4>
                <p>{userdetail.name}</p>
                <h4>Email Admin</h4>
                <p>{userdetail.email}</p>               
            </div>
        }else{
            return <p>Loading.....</p>
        }

    }

    return(
        <>
        <div>
            <h1 className='mb-4 mt-4'>Data Penduduk</h1>
           
            {<ListVilager />}

        </div>       
        </>
    )
}