import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import DashboardAdmin from './DashboardAdmin';
import EditServices from './sevice/edit.component';
import CreateServices from './sevice/create.component';
import ListServices from './sevice/list.component';
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
export default function Services() {
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
                <h4>Name</h4>
                <p>{userdetail.name}</p>
                <h4>Email</h4>
                <p>{userdetail.email}</p>
            </div>
        }else{
            return <p>Loading.....</p>
        }

    }

    return(
        <>
        <div>
            <h1 className='mb-4 mt-4'>Data Pelayan</h1>
           
            {<ListServices />}

        </div>       
        </>
    )
}