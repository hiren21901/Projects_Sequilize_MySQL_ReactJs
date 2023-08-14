import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Designation from './pages/DesignationDatatable';
import Userform from "./pages/Auth/Userform";
import UserDatatable from "./pages/UserDatatable";
import Loginform from "./pages/Auth/loginform";
import Forgotpass from "./pages/Auth/Forgotpass";
import Department from "./pages/DepartmentDatatable";
import Admindashboard from "./pages/parcelView/Admindashboard";
import Updatedepartment from "./pages/UpdateDepartment";
import Adddesignation from "./pages/AddDesignation";
import Adddepartment from "./pages/AddDepartment";
import Updatedesignation from "./pages/UpdateDesignation";
import Otpform from "./pages/Auth/Otpform";
import Newpass from "./pages/Auth/Newpass";
import AddState from "./pages/AddState";
import AddCountry from "./pages/AddCountry";
import AddCity from "./pages/AddCity";
import StateDatatable from "./pages/StateDatatable";
import CountryDatatable from "./pages/CountryDatatable";
import CityDatatable from "./pages/CityDatatable";
// const Notfound = lazy(() => import("./screen/NotFound"));


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/department" element={<Department />} />
        <Route path="/designation" element={<Designation />} />
        <Route path="/adddepartment" element={<Adddepartment />} />
        <Route path="/designation/add" element={<Adddesignation />} />
        <Route path="/department/update" element={<Updatedepartment />} />
        <Route path="/designation" element={<Updatedesignation />} />


        <Route path="/dashboard" element={<Admindashboard />} />


        <Route path="/userform/Add" element={<Userform />} />
        <Route path="/userform" element={<UserDatatable />} />
        <Route path="/forgotpassword" element={<Forgotpass />} />
        <Route path="/otpform" element={<Otpform />} />
        <Route path="/newpassword" element={<Newpass />} />


        <Route path="/state" element={<AddState />} />
        <Route path="/country" element={<AddCountry />} />
        <Route path="/city" element={<AddCity />} />
        <Route path="/state/Add" element={<StateDatatable />} />
        <Route path="/country/Add" element={<CountryDatatable />} />
        <Route path="/city/Add" element={<CityDatatable />} />

      </Routes>

    </>
  );
}

export default App;
