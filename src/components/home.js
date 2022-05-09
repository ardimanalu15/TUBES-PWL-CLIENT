

import React, { Component } from "react";
import logo from '../../src/logo.svg'
import "./home.css";
import { Routes, Route, Link } from "react-router-dom";

function Dashboard() {
    return (
    <>
    
    <div>
        <section>
          <header>
          <a class="navbar-brand text-white" href="#">.</a>
            <div>
            <nav className="navbar navbar-expand-lg ">        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/suratuser">
              Layanan Pengajuan Surat
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/ktpuser">
                Layanan Pengajuan Pembuatan KTP
              </Link>
            </li>
          </ul>
        </div>        
      </nav>
             
            </div>
          </header>
        </section>

        <section id="main">
          <div className="main-text">
            <span>Sistem Pengajuan Pelayan online Desa Way huwi</span> 
          </div>

          <img src="./images/desa.jpeg" width="620" alt="leaf-main-image" />
        </section>
        
      </div>
      <div className="App" >
  <section>
     <div>
     <p className=""></p>     
     </div>
    
    </section>      
  <section className="bg-light text-dark page-section" >
    <div className="container">
      <div className="row">
        <div className="col-lg-16 text-center">
         
          <h3 className="section-subheading text-uppercase"></h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12  text-center">
          <p className="large "style={{ padding: "20px", fontSize:"24px"}} >Desa Way huwi merupakan desa yang akan diambil sebagai studi kasus dalam tugas ini. Desa ini terletak di kecamatan jati agung, kabupaten lampung selatan. desa way huwi dipimpin oleh kepada desa dan dibantu oleh perangkat desa. kepala desa dan jajarannya berwenang dalam membina dan memberikan pelayanan kepada masyarakat. pelayanan yang diberikan salah satunya berupa pengurusan surat-surat untuk keperluan masyarakat.</p>
        </div>
      </div>
      <div className="" style={{ padding: "10px"}}>
        <div className="col-sm-6">
          <div className="team-member">            
            <h3>Layanan Pengajuan Surat</h3>
            <p className="">Layanan Pengajuan Surat merupakan layanan yang diberikan oleh Balai Desa untuk membantu masyarakat dalam pembuatan Syarat Pembuatan Usaha,Syarat Pembuatan Domisili dan lain-lain  </p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">                
                <a class="btn btn-primary" href="/suratuser" role="button">Layanan Pengajuan Surat</a>
              </li>            
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
            <h3>Layanan Pengajuan Pembuatan KTP</h3>
            <p className="">Layanan Pengajuan Pengajuan Pembuatan KTP merupakan layanan yang diberikan oleh Balai Desa untuk membantu masyarakat dalam pembuatan KTP  </p>
            <ul className="list-inline social-buttons">
            <li className="list-inline-item">                
                <a class="btn btn-primary" href="/ktpuser" role="button">Layanan Pengajuan Pembuatan KTP</a>
              </li>      
            </ul>
          </div>
        </div>        
      </div>
      
    </div>
    <footer className="footer bg-secondary" >
    <div className="container">
      <div className="mx-auto text-center">
          <span className="copyright ">Copyright &copy; Sistem Pelayanan Desa Way huwi </span>    
      </div>
    </div>
  </footer>
  </section>

  </div>
      


      </>
    );


    }
export default Dashboard;
