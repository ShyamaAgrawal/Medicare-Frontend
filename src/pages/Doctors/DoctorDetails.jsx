import { useState } from "react";
// import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star (1).png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../config";
import Error from "../../Components/Error/Error";
import Loading from "../../Components/Loader/Loading";
import useFetchData from "../../hooks/useFetchData";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);
  // console.log(doctor)

  const {
    name,
    about,
    photo,
    bio,
    specialization,
    ticketPrice,
    averageRating,
    totalRating,
    qualifications,
    experiences,
    timeSlots,
    reviews
  } = doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {!loading && error && <Error />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} alt="" />
                </figure>

                <div>
                  <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {name}
                  </h3>

                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] leading-5 lg:leading-7 font-semibold text-headingColor">
                      <img src={starIcon} alt="" /> {averageRating}
                    </span>
                    <span className="leading-5 lg:leading-7">({totalRating})</span>
                  </div>

                  <p className="text__para text-[14px] leading-6 lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className="py-2 px-5 mr-5 leading-7 text-headingColor font-semibold"
                  style={{
                    borderBottom: tab === "about" && "1px solid #0067FF",
                  }}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className="py-2 px-5 mr-5 leading-7 text-headingColor font-semibold"
                  style={{
                    borderBottom: tab === "feedback" && "1px solid #0067FF",
                  }}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && <DoctorAbout name={name} about={about} qualifications={qualifications} experiences={experiences} />}
                {tab === "feedback" && <Feedback totalRating={totalRating} reviews={reviews} />}
              </div>
            </div>
            <div>
              <SidePanel doctorId={doctor._id} timeSlots={timeSlots} ticketPrice={ticketPrice} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
