import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

//import "./App.css";

 import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

// import EditProduct from "./components/product/edit.component";
// import ProductList from "./components/product/list.component";
// import CreateProduct from "./components/product/create.component";
// import EditVilager from "./components/vilager/edit.component";
// import CreateVilager from "./components/vilager/create.component";
// import ListVilager from "./components/vilager/list.component";
import EditServices from './sevice/edit.component';
import CreateServices from './sevice/create.component';
import ListServices from './sevice/list.component';


function Dashboard() {
    return (
  <>     
  
  <div className="App" >
  <section>
     <div>
     <p className=""></p>     
     </div>
    
    </section>      
  <section className="bg-secondary text-white page-section" >
    <div className="container">
      <div className="row">
        <div className="col-lg-16 text-center">
          <h2 className="section-heading text-uppercase" style={{ padding: "20px", fontSize:"34px"}}>Sistem Pengajuan Pelayan online Desa Way huwi </h2>
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
            <h3>Data Penduduk</h3>            
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">                
                <a class="btn btn-primary" href="/vilager" role="button">Data Penduduk</a>
              </li>            
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="team-member">            
            <h3>Data Pelayanan</h3>           
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">                
                <a class="btn btn-primary" href="/services" role="button">Layanan Pengajuan Surat</a>
              </li>            
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
            <h3>Data Pengajuan Pembuatan KTP</h3>            
            <ul className="list-inline social-buttons">
            <li className="list-inline-item">                
                <a class="btn btn-primary" href="/ktps" role="button">Data Layanan Pengajuan Pembuatan KTP</a>
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


