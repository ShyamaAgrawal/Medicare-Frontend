/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../../config";
import { toast } from "react-toastify";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

const Profile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    gender: "",
    photo: "",
    about: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [
      { startingDate: "", endingDate: "", degree: "", university: "" },
    ],
    experiences: [
      { startingDate: "", endingDate: "", position: "", hospital: "" },
    ],
    timeSlots: [{ day: "", startingTime: "", endingTime: "" }],
  });
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      photo: doctorData?.photo,
      about: doctorData?.about,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
    });
  }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);

    // console.log(data)
    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.put(
        `${BASE_URL}/doctors/${doctorData._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );


      console.log(response);
      setLoading(false)
      
      toast.success(response.data.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  //reusable func for adding item
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  //reusable func for input change
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];
      updateItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  //reusable func for deleting item
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  //methods for qualifications

  const addQualification = (e) => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };
  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  // methods for experiences

  const addExperience = (e) => {
    e.preventDefault();
    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "",
      hospital: "",
    });
  };
  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };

  //methods for time slots

  const addTimeSlot = (e) => {
    e.preventDefault();
    addItem("timeSlots", {
      day: "",
      startingTime: "10:00",
      endingTime: "05:00",
    });
  };
  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-5 ">
        Profile Information
      </h2>
      <form>
        <div className="mb-5">
          <p className="form__label">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
            placeholder="Full Name"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
            className="form__input"
            readOnly
            aria-readonly
            disabled={true}
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Phone</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange(e)}
            placeholder="Phone number"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Bio</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={(e) => handleInputChange(e)}
            placeholder="Bio"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px] ">
            <div>
              <p className="form__label">Gender</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className=" form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <p className="form__label">Specialization</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className=" form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="dentist">Dentist</option>
              </select>
            </div>

            <div>
              <p className="form__label">Ticket Price</p>
              <input
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                min={0}
                className="form__input"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form__label mb-4">Qualifications</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div className=" grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Starting Date</p>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    className="form__input"
                    onChange={(e) => handleQualificationChange(e, index)}
                  />
                </div>

                <div>
                  <p className="form__label">Ending Date</p>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    className="form__input"
                    onChange={(e) => handleQualificationChange(e, index)}
                  />
                </div>
              </div>

              <div className=" grid grid-cols-2 gap-5 mt-5">
                <div>
                  <p className="form__label">Degree</p>
                  <input
                    type="text"
                    name="degree"
                    value={item.degree}
                    className="form__input"
                    onChange={(e) => handleQualificationChange(e, index)}
                  />
                </div>

                <div>
                  <p className="form__label">University</p>
                  <input
                    type="text"
                    name="university"
                    value={item.university}
                    className="form__input"
                    onChange={(e) => handleQualificationChange(e, index)}
                  />
                </div>
              </div>

              <button
                onClick={(e) => deleteQualification(e, index)}
                className=" bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}

          <button
            onClick={addQualification}
            className=" bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label mb-4">Experiences</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div className=" grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Starting Date</p>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    className="form__input"
                    onChange={(e) => handleExperienceChange(e, index)}
                  />
                </div>

                <div>
                  <p className="form__label">Ending Date</p>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    className="form__input"
                    onChange={(e) => handleExperienceChange(e, index)}
                  />
                </div>
              </div>

              <div className=" grid grid-cols-2 gap-5 mt-5">
                <div>
                  <p className="form__label">Position</p>
                  <input
                    type="text"
                    name="position"
                    value={item.position}
                    className="form__input"
                    onChange={(e) => handleExperienceChange(e, index)}
                  />
                </div>

                <div>
                  <p className="form__label">Hospital</p>
                  <input
                    type="text"
                    name="hospital"
                    value={item.hospital}
                    className="form__input"
                    onChange={(e) => handleExperienceChange(e, index)}
                  />
                </div>
              </div>

              <button
                onClick={(e) => {
                  deleteExperience(e, index);
                }}
                className=" bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}

          <button
            onClick={addExperience}
            className=" bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Experience
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label mb-4">Time Slots</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div className=" grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                <div>
                  <p className="form__label">Day</p>
                  <select
                    className="form__input py-3.5"
                    value={item.day}
                    onClick={(e) => handleTimeSlotChange(e, index)}
                  >
                    <option value="">Select</option>
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                  </select>
                </div>

                <div>
                  <p className="form__label">Starting Time</p>
                  <input
                    type="time"
                    name="startingTime"
                    value={item.startingTime}
                    className="form__input"
                    onClick={(e) => handleTimeSlotChange(e, index)}
                  />
                </div>

                <div>
                  <p className="form__label">Ending Time</p>
                  <input
                    type="time"
                    name="endingTime"
                    value={item.endingTime}
                    className="form__input"
                    onClick={(e) => handleTimeSlotChange(e, index)}
                  />
                </div>
                <div className="flex items-center">
                  <button
                    onClick={(e) => deleteTimeSlot(e, index)}
                    className=" bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addTimeSlot}
            className=" bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Time Slot
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">About</p>
          <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder="Write about you.."
            className="form__input"
            onChange={(e) => handleInputChange(e)}
          ></textarea>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                className="w-full rounded-full"
                src={formData.photo}
                alt=""
              />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInput}
              accept=".jpg,.png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden cursor-pointer bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate"
            >
              Upload photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            disabled={loading}
            type="submit"
            onClick={updateProfileHandler}
            className=" bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg "
          >
            {loading ? <HashLoader size={35} color='#fff' /> : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;