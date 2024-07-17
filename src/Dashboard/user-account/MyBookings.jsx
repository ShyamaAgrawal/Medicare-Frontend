import { BASE_URL } from "../../../config";
import Error from "../../Components/Error/Error";
import Loading from "../../Components/Loader/Loading";
import useFetchData from "../../hooks/useFetchData";
import DoctorCard from "../../Components/Doctors/DoctorCard";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  // console.log(appointments, "appointments");

  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error errorMsg={error} />}

      {!loading && !error && <div>
        {appointments.map((doctor) => {
          return <DoctorCard doctor={doctor} key={doctor._id} />;
        })}
      </div>
      }

      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-5 text-center text-primaryColor leading-7 font-semibold ">
          You have not booked any appointment yet!
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
 