import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/login";
import Register from "../components/register";
import SuratUser from "../components/suratuser";
import CreateServicesUser from "../components/usersurat/create.component";
import KtpUser from "../components/ktpuser";
import CreateKtpUser from "../components/ktpuser/create.component";

function Guest() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/suratuser">
              Layanan Pengajuan Surat
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/ktpuser">
                Layanan Pengajuan Pembuatan KTP
              </Link>
            </li>
          </ul>
        </div>        
      </nav> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suratuser" element={<SuratUser />} />
          <Route path="/usersurat/create" element={<CreateServicesUser />} />
          <Route path="/ktpuser" element={<KtpUser />} />
          <Route path="/ktpuser/create" element={<CreateKtpUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default Guest;
