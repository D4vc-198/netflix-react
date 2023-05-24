import './../../Styles/Page_login.css'
import netflix_Logo from './../../Assets/Icons/Netflix_logo.svg'
import netflix_background from './../../Assets/Images/netflix-login-background.jpg'
import CustomInput from '../../Components/CustomInput'

const Login = () => {
  return (
    <>
      <div className="page-login-container">
        <div className="page-login-container-background">
          <img src={netflix_background} alt='netflix background' />
          <div className='page-login-container-shadow'></div>
        </div>
        <div className="page-login-container-logo">
          <img src={netflix_Logo} alt='Logo de netflix' />
        </div>
        <div className="page-login-container-form">
          <h1>Inicia sesión</h1>
          <CustomInput />
          <p>¿Primera vez en Netflix?</p>
        </div>
      </div>
    </>
  )
}

export default Login