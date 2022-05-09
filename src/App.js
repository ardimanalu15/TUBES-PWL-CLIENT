import * as React from "react";

import "bootstrap/dist/css/bootstrap.css";
import AuthUser from "./components/AuthUser";
import Guest from "./navbar/guest";
import Auth from "./navbar/auth";




function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return <Guest />
  }
  return (
      <Auth />
  );
}


 


export default App;
