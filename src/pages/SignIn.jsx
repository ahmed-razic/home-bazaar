import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import OAuth from '../components/OAuth'

function SignIn() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        toast.success('Sign-in was successful')
        navigate('/')
      }
    } catch {
      toast.error('Wrong User Credential')
    }
  }

  return (
    <div className='pageContainer'>
      <p className='header'>Welcome Back</p>

      <form onSubmit={onSubmit}>
        <input
          type='email'
          name='email'
          id='email'
          className='emailInput'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
        <div className='passwordInputDiv'>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            id='password'
            className='passwordInput'
            placeholder='Password'
            value={password}
            onChange={onChange}
          />
          <img
            src={visibilityIcon}
            alt='show password'
            className='showPassword'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>

        <Link to='/forgot-password' className='forgotPasswordLink'>
          Forgot Password
        </Link>

        <div className='signInBar'>
          <p className='signInText'>Sign In</p>
          <button className='signInButton'>
            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
          </button>
        </div>
      </form>

      <OAuth />
      <Link to='/sign-up' className='registerLink'>
        Sign up Instead
      </Link>
    </div>
  )
}
export default SignIn
