import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";
import Tabs from "./Tabs";
import { useState } from "react";
import iota from "../../assets/images/iota.png";
import star from "../../assets/images/Star (1).png";
import DoctorAbout from "../../pages/Doctors/DoctorAbout";
import Profile from "./Profile";

const Dashboard = () => {
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/doctors/profile/me`
  );
  // console.log(data)

  const [tab, setTab] = useState("overview");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto ">
        {loading && !error && <Loading />}
        {!loading && error && <Error />}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px] ">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data.isApproved === "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg items-center">
                  <img src={iota} className=" w-5 h-5" />
                  <span className="sr-only">Info</span>
                  <div className=" ml-3 text-sm font-medium">
                    To get approval please complete your profile. We&apos;ll
                    review manually and approve within 3 days.
                  </div>
                </div>
              )}

              <div>
                {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[200px] max-h-[200px] border-2 border-[#01B5C5] rounded-md ">
                        <img
                          src={data.photo}
                          className="w-full max-h-[200px] "
                        />
                      </figure>
                      <div>
                        <span className=" bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold ">
                          {data.specialization}
                        </span>

                        <h3 className=" text-[22px] leading-9 font-bold text-headingColor mt-3 ">
                          {data.name}
                        </h3>

                        <div className="flex items-center gap-[6px]">
                          <span className=" flex items-center gap-[6px] text-headingColor leading-5 font-semibold ">
                            <img src={star} /> {data.averageRating}
                          </span>

                          <span className=" text-textColor leading-5 font-semibold ">
                            ({data.totalRating})
                          </span>
                        </div>
                        <p className=" text__para font-[15px] lg:max-w-[390px] leading-6">
                          {data.bio}
                        </p>
                      </div>
                    </div>

                    <DoctorAbout
                      name={data.name}
                      about={data.about}
                      qualifications={data.qualifications}
                      experiences={data.experiences}
                    />
                  </div>
                )}
                {tab === "appointments" && <div>Appointments</div>}
                {tab === "settings" && <Profile doctorData={data} />}
              </div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
