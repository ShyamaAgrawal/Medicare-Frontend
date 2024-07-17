import { useNavigate } from "react-router-dom";
import check from "../assets/images/check.png";

const CheckoutSuccess = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-50 h-screen">
      <div className="flex items-center flex-col justify-center py-10 bg-white text-center mx-2">
        <figure className=" w-28 h-28 ">
          <img src={check} alt="" className="w-full h-full" />
        </figure>
        <h2 className="text-2xl font-semibold text-gray-800 my-4">
          Payment Successful
        </h2>
        <p className="text-gray-600 mb-4">
          Thank you for your payment! Your transaction was successful.
        </p>
        <p className="text-gray-400 mb-4">Have a great day!</p>
        <button onClick={()=>{navigate('/')}} className="bg-primaryColor text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
