/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/PagesCSS.css";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../../config.js";
import axios from "axios";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const ProfileSettings = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    role: "patient",
    gender: "",
    bloodType:""
  });

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
    });
  }, [user]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    // console.log(data)
    setSelectedFile(data.url);
    setSelectedFileName(data.display_name);
    setFormData({ ...formData, photo: data.url });
  };
  const signupSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData)
    setLoading(true);
    const payload = {
      name: `${formData.name}`,
      email: `${formData.email}`,
      password: `${formData.password}`,
      gender: `${formData.gender}`,
      photo: `${formData.photo}`,
      bloodType:`${formData.bloodType}`
    };
    try {
      // console.log(user._id)
      let res = await axios.put(`${BASE_URL}/users/${user._id}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res.data.message)
      setSelectedFile(null);
      setFormData({
        name: "",
        email: "",
        password: "",
        photo: selectedFile,
        gender: "",
        bloodType: "",
      });
      setLoading(false);
      toast.success(res.data.message);
      navigate("/users/profile/me");
    } catch (error) {
      setLoading(false);
      // console.log(error.message)
      toast.error(error.message);
    }
  };

  return (
    <div className="mt-10">
      <form
        onSubmit={(e) => signupSubmitHandler(e)}
        action=""
        method=""
        className="py-4 md:py-0"
      >
        <div className="mb-2">
          <input
            className="form-inp"
            type="name"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            className="form-inp"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
            aria-readonly
            readOnly
          />
        </div>
        <div className="mb-2">
          <input
            className="form-inp"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            autoComplete="false"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="mb-2">
          <input
            className="form-inp"
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            autoComplete="false"
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>

        <div className="flex mb-2 lg:items-center justify-between flex-col lg:flex-row">
          <div>
            <label
              htmlFor="gender"
              className="text-headingColor font-bold leading-7"
            >
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex mb-2 gap-5 items-center">
          {formData.photo && (
            <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                className="w-full h-full rounded-full"
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
              {selectedFile ? selectedFileName : "Upload photo"}
            </label>
          </div>
        </div>

        <button disabled={loading} className="btn w-full mt-6" type="submit">
          {loading ? <HashLoader size={25} color="#fff" /> : "Update"}
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
