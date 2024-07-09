import { useState } from "react"
import { AiFillStar } from "react-icons/ai"

const FeedbackForm = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [review, setReview] = useState("")

    const handleSubmitReview = (e) => {
        e.preventDefault();
    }

    return (
        <form action="" onSubmit={handleSubmitReview} >
            <div>
                <h3 className="text-headingColor leading-6 font-semibold mb-4">How would you rate the overall experience ?</h3>
                <div>
                    {[...Array(5).keys()].map((s, index) => {
                        index += 1;
                        return (
                            <button key={index}
                                type="button"
                                className={`${index <= ((rating && hover) || hover) ? 'text-yellowColor' : 'text-gray-400'} bg-transparent border-none outline-none cursor-pointer`}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                onDoubleClick={() => {
                                    setHover(0)
                                    setRating(0)
                                }}>
                                <span><AiFillStar /></span>
                            </button>
                        )
                    })}
                </div>
            </div>

            <div>
                <h3 className="text-headingColor leading-6 font-semibold mb-4">Share your feedback or suggestions
                </h3>

                <textarea name="review" id="" value={review} placeholder="Write your review" rows="5" className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md text-textColor"
                    onChange={(e) => setReview(e.target.value)}>
                </textarea>

                <button className="btn" type="submit">Submit Review</button>

            </div>

        </form>
    )
}

export default FeedbackForm