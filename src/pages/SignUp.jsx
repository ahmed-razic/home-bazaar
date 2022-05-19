import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import OAuth from '../components/OAuth'

function SignUp() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData

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

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, { displayName: name })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      toast.success('Sign-up was successful')
      navigate('/')
    } catch {
      toast.error('Registration went wrong. Please try again.')
    }
  }

  return (
    <div className='pageContainer'>
      <p className='header'>Welcome Back</p>

      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          id='name'
          className='nameInput'
          placeholder='Name'
          value={name}
          onChange={onChange}
        />
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

        <div className='signUpBar'>
          <p className='signUpText'>Sign Up</p>
          <button className='signUpButton'>
            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
          </button>
        </div>
      </form>

      <OAuth />

      <Link to='/sign-in' className='registerLink'>
        Sign in Instead
      </Link>
    </div>
  )
}
export default SignUp
