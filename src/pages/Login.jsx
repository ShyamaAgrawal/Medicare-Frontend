import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './PagesCSS.css'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../config'
import axios from 'axios'
import HashLoader from 'react-spinners/HashLoader'
import { authContext } from '../context/AuthContext.jsx'


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)


  const navigate = useNavigate();
  const {dispatch} = useContext(authContext)


  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData)
    setLoading(true);
    const payload = {
      email: `${formData.email}`,
      password: `${formData.password}`,
    }
    try {
      let res = await axios.post(`${BASE_URL}/login`, payload)
      // console.log(res.data.message)
      setFormData({
        email: '',
        password: '',
      })

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: res.data.data,
          token: res.data.token,
          role:res.data.role
        }
      })

      console.log(res,"login data")
      setLoading(false);
      toast.success(res.data.message)
      navigate('/home')
    }
    catch (error) {
      setLoading(false)
      // console.log(error.message)
      toast.error(error.message)
    }
  }


  return (
    <section>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-10">
        <h3 className="text-primaryColor font-bold text-[24px]
        leading-10 mb-4">Welcome Back 👋</h3>
        <form action="" className='py-4 md:py-0'
          onSubmit={(e) => { loginSubmitHandler(e) }}>
          <div className="mb-2">
            <input
              className="form-inp"
              type="email"
              placeholder='Enter your email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required />
          </div>
          <div className="mb-2">
            <input
              className="form-inp"
              type="password"
              placeholder='Enter your password'
              name='password'
              autoComplete='false'
              value={formData.password}
              onChange={handleInputChange}
              required />
          </div>

          <button
            disabled={loading}
            className="btn w-full"
            type='submit'>
            {loading ? <HashLoader size={35} color='#fff' /> : "Login"}
          </button>
          <p className="mt-5 text-center text-textColor">Don't have an account? <Link to='/register' className="text-primaryColor hover:underline font-medium">Sign up</Link></p>
        </form>
      </div>

    </section>
  )
}

export default Login