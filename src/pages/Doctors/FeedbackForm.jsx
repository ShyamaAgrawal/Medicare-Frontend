import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BASE_URL, token } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!rating || !review) {
        setLoading(false);
        toast.error("Fields are empty");
        return;
      }
      const payload = {
        rating: rating,
        reviewText: review,
      };
      const response = await axios.post(
        `${BASE_URL}/doctors/${id}/addReview`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //   console.log(response);
      setLoading(false);
      setRating(0);
      setReview("");
      toast.success(response.data.message);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form action="" onSubmit={handleSubmitReview}>
      <div>
        <h3 className="text-headingColor leading-6 font-semibold mb-4">
          How would you rate the overall experience ?
        </h3>
        <div>
          {[...Array(5).keys()].map((s, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-headingColor leading-6 font-semibold mb-4">
          Share your feedback or suggestions
        </h3>

        <textarea
          name="review"
          id=""
          value={review}
          placeholder="Write your review"
          rows="5"
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md text-textColor"
          onChange={(e) => setReview(e.target.value)}
        ></textarea>

        <button className="btn" type="submit" disabled={loading}>
          {loading ? <HashLoader size={35} color="#fff" /> : "Submit Review"}
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
