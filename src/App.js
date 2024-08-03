import React from "react";
import {Routes, Route} from 'react-router-dom';
import Location from './components/js/Location';
import Login from "./components/js/Login";
import AllDevices from "./components/js/AllDevices";
import Db from "./components/js/Db";
import userLocation from "./components/js/userLocation";
import userHome from "./components/js/userHome";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route exact path='/admin' Component={Location} />
        <Route exact path='/admin/alldevices' Component={AllDevices} />
        <Route exact path='/admin/db' Component={Db} />
        <Route exact path='/user' Component={userLocation} />
        <Route exact path='/user/db' Component={userHome} />
      </Routes>
    </div>
  );
}

export default App;
