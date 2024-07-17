import  { useContext, useState } from 'react'
// import userImg from '../../assets/images/doctor-img01.png';
import { authContext } from '../../context/AuthContext';
import MyBookings from './MyBookings';
import ProfileSettings from './ProfileSettings';
import useFetchData from "../../hooks/useFetchData";

import { BASE_URL } from '../../../config';
import Loading from '../../Components/Loader/Loading';
import Error from '../../Components/Error/Error';

const MyAccount = () => {
  const { dispatch } = useContext(authContext)
  const [tab, setTab] = useState('bookings')

  const {data:userData,loading,error}= useFetchData(`${BASE_URL}/users/profile/me`)
  // console.log(userData,'userData')

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }


  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loading/>}

        {error && !loading && <Error errorMsg={error}/>}

        {!loading && !error && <div className='grid md:grid-cols-3 gap-10'>

          {/* div 1   */}
          <div className='pb-[50px] px-[30px] rounded-md'>

            <div className='flex items-center justify-center'>
              <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor '>
                <img src={userData.photo} alt="" className='w-full h-full rounded-full ' />
              </figure>
            </div>

            <div className='text-center mt-4'>
              <h3 className='text-[18px] leading-[30px] text-headingColor font-bold '>{userData.name}</h3>
              <p className='text-textColor text-[15px] leading-6 font-medium '>{userData.email}</p>
              <p className='text-textColor text-[15px] leading-6 font-medium '>Blood Type:
                <span className='ml-2 text-headingColor text-[22px] leading-8 '>{userData.bloodType}</span>
              </p>
            </div>

            <div className='mt-[50px] md:mt-[100px] '>
              <button onClick={handleLogout} className='w-full bg-[#181A1E] p-3 leading-7 rounded-md text-white '>Logout</button>
              <button className='w-full bg-red-600 p-3 leading-7 mt-4 rounded-md text-white '>Delete Account</button>
            </div>

          </div>

          {/* div 2  */}
          <div className='md:col-span-2 md:px-[30px]  '>
            <div>
              <button onClick={() => { setTab('bookings') }} className={` ${tab === 'bookings' && "bg-primaryColor text-white font-normal"} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold leading-7 border border-solid border-primaryColor`}>My Bookings</button>

              <button onClick={() => { setTab('settings') }}
                className={`${tab === 'settings' && "bg-primaryColor text-white font-normal"} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold leading-7 border border-solid border-primaryColor`}>Profile Settings
              </button>
            </div>

            {
              tab === 'bookings' ? <MyBookings /> : <ProfileSettings user={userData} />
            }

          </div>
        </div>}
      </div>
    </section>
  )
}

export default MyAccount