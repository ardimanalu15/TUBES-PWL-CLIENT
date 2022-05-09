import ListServicesUser from './usersurat/list.component';
import { Routes, Route, Link } from "react-router-dom";

export default function SuratUser() {

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">        
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
      </nav>
        <div>
            <h1 className='mb-4 mt-4'>Layanan Balai Desa</h1>          
            {<ListServicesUser />}           

        </div>       
        </>
    )
}