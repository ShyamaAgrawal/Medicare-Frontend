import DoctorCard from "./DoctorCard";
import "../CSS/Doctors.css";
import { BASE_URL } from "../../../config.js";
import useFetchData from "../../hooks/useFetchData.jsx";
import Error from "../Error/Error.jsx";
import Loading from "../Loader/Loading.jsx";

const DoctorList = () => {
    const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);
    // console.log(doctors)

  return (
    <>
      {loading && !error && <Loading />}
      {!loading && error && <Error />}
      {!loading && !error && (
        <div className="doctor-list">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;
