import { toast } from "react-toastify";
import { BASE_URL, token } from "../../../config";
import convertTime from "../../utils/convertTime";
import axios from 'axios'


/* eslint-disable react/prop-types */

const SidePanel = ({ doctorId, timeSlots, ticketPrice }) => {

  const bookingHandler = async () => {
    try {
      const payload = {

      }
      const response = await axios.post(
        `${BASE_URL}/checkout-session/${doctorId}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data.session.url)
      if (response.data.session.url) {
        window.location.href = response.data.session.url;
      }
    } catch (error) {
      // console.log(error)
      toast.error(error.message);
    }
  }

  return (
    <div
      style={{ boxShadow: "10px 10px 100px lightgray" }}
      className="p-5 rounded"
    >
      <div className="flex justify-between items-center mb-2">
        <p>Booking Fees</p>
        <h3 className="font-semibold">Rs. {ticketPrice}</h3>
      </div>
      <hr />
      <div className="my-3">
        <h3 className="font-semibold">Available Time Slots:</h3>
        <ul>
          {timeSlots?.map((timeSlot, index) => (
            <li
              key={index}
              className="flex justify-between items-center leading-9"
            >
                  <p className="text-textColor">{ timeSlot?.day.charAt(0).toUpperCase() + timeSlot?.day.slice(1)}</p>
                  <p className="text-textColor">{convertTime(timeSlot.startingTime)}- {convertTime(timeSlot.endingTime)}</p>
            </li>
          ))}
        </ul>
        <button onClick={bookingHandler} className="btn w-full">Book Appointment</button>
      </div>
    </div>
  );
};

export default SidePanel;
