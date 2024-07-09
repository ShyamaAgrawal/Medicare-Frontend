import { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  return (
    <div>
      <div className="mb-[30px]">
        <h4 className="font-bold text-[16px] lg:text-[18px] mb-4">All Reviews (272)</h4>
        <div className="flex justify-between">
          <div className="flex gap-[15px]">
            <figure className="h-10 w-10 rounded-full">
              <img className="w-full" src={avatar} alt="" />
            </figure>
            <div>
              <h5 className="text-primaryColor font-semibold leading-6">Hary Stele</h5>
              <p className=" text-[14px] leading-6 text-textColor">{formateDate("02-15-2023")}</p>
              <p className="text__para mt-3 text-[14px] font-medium">Good Services, highly recommended 👌</p>
            </div>
          </div>

          <div className="flex gap-1">
            { [...Array(5).keys()].map((star,index)=> <AiFillStar key={index} color='#EDC30B'/>)}
          </div>

        </div>
      </div>

      {!showFeedbackForm && <div className="text-center">
        <button onClick={()=>setShowFeedbackForm(true)} className="btn" style={{padding:'8px 16px',fontSize:'14px',borderRadius: '30px',}}>Give Review</button>
      </div>}

      {showFeedbackForm && <FeedbackForm/>}

    </div>
  )
}

export default Feedback