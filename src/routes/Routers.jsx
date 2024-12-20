import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Doctors from "../pages/Doctors/Doctors";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import CheckoutSuccess from "../pages/CheckoutSuccess";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
    </Routes>
  );
};

export default Routers;
