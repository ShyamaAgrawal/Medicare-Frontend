import DoctorCard from "../../Components/Doctors/DoctorCard";
import Testimonial from "../../Components/Testimonial/Testimonial.jsx";
import "../PagesCSS.css";
import { BASE_URL } from "../../../config.js";
import useFetchData from "../../hooks/useFetchData.jsx";
import Error from "../../Components/Error/Error.jsx";
import Loading from "../../Components/Loader/Loading.jsx";
import { useEffect, useState } from "react";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  
  const handleSearch = () => {
    setQuery(query.trim());
    console.log("handling query")
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    },500)
  
    return () => {
      clearTimeout(timeout)
    }
  }, [query])
  
  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors?query=${debouncedQuery}`);


  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="find-doc">
            <input type="search" className="inp" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search doctor by name or specification" />
            <button className="btn mt-0 rounded-[0px] rounded-r-[8px]" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container w-full lg:w-[85%] mx-auto">
          {loading && !error && <Loading />}
          {!loading && error && <Error />}
          {!loading && !error && (
            <div className="doctor-list" style={{ marginTop: 0 }}>
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="testimonial lg:w-[85%] lg:mx-auto">
            <div className="testimonial-top">
              <h2 className="heading text-center">Our great doctors</h2>
              <p className="text__para text-center" style={{ color: " gray" }}>
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
              </p>
            </div>

            <Testimonial />
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
