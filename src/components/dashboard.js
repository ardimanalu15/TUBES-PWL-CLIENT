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
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          PWL INI BRO
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>         
        </Col>
      </Row>
    </Container>
  
  </>
  );

}
export default Dashboard;


