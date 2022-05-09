import { Routes, Route, Link } from "react-router-dom";

import AuthUser from "../components/AuthUser";
import CreateVilager from "../components/vilager/create.component";
import EditVilager from "../components/vilager/edit.component";
import CreateServices from "../components/sevice/create.component";
import EditServices from "../components/sevice/edit.component";
import CreateKtp from "../components/ktp/create.component";
import EditKtp from "../components/ktp/edit.component";

import Ktps from "../components/ktps";
import Villager from "../components/vilager";
import Services from "../components/services";
import DashboardAdmin from "../components/DashboardAdmin";

function Auth() {
  const { token, logout } = AuthUser();
  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vilager">
                Data Penduduk{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Data Pelayanan{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ktps">
                Data Pengajuan KTP{" "}
              </Link>
            </li>
            <li className="nav-item">
              <p role="button" className="nav-link" onClick={logoutUser}>
                Logout
              </p>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/dashboard" element={<DashboardAdmin />} />
          <Route path="/vilager" element={<Villager />} />
          <Route path="/vilager/create" element={<CreateVilager />} />
          <Route path="/vilager/edit/:id" element={<EditVilager />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sevice/create" element={<CreateServices />} />
          <Route path="/sevice/edit/:id" element={<EditServices />} />
          <Route path="/ktps" element={<Ktps />} />
          <Route path="/ktp/create" element={<CreateKtp />} />
          <Route path="/ktp/edit/:id" element={<EditKtp />} />
        </Routes>
      </div>
    </>
  );
}

export default Auth;
