  import React, { useContext, useState } from 'react';
  import Styles from './Login.module.css'
  import { useTranslation } from 'react-i18next';
  import { Link , useLocation, useNavigate} from 'react-router-dom';
  import { useFormik } from 'formik/dist';

import axios from 'axios';
import { AppContext } from '../../Context/userContext';
const Login = () => {

  let { userToken, setUserToken} = useContext(AppContext)

  let navigate = useNavigate();

  let location = useLocation();

  const [errorMsgLogin , setErrorMsg] = useState('')
  const [loading , setLoading] = useState(true)

  async function sendDataToApi (values){
    setLoading(false) 
   axios.post('https://royal-lab.webbing-agency.com/api/user/login',values) 
   .then(  (res) =>{
    console.log(res);
    if (res.data.status == true) {

      console.log(res.data.data.token);

      localStorage.setItem('userToken' , res.data.data.token)
      setUserToken(res.data.data.token)
      
      navigate('/'); // Navigate to login page upon successful registration
    }
    setErrorMsg(res.data.message); // Set the error message state based on API response

   }).catch( (err)=> {

    setErrorMsg(err.data)
    setLoading(true)
    
   } )

    
  }

  function validate(values) {
    let errors = {};

    if (!values.password) {
      errors.password = t('errorPasswordRequired');
    } 
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}/.test(values.password)) {
      errors.password = t('errorPasswordComplexity');
    }  
   

    return errors;
  }


  const formik = useFormik({
    initialValues: {
      email: '',
      joined_with: '1',
      password: '',
    },
    validate,
    onSubmit: (values) =>{
      sendDataToApi(values)
    }
    }
  )



  const { t, i18n } = useTranslation();

  return (
    <div dir={i18n.dir(i18n.language)}>


      <div className="row">
        <div className="col-md-8">
        <div className={`${Styles.right} m-2 rounded rounded-2`}> 
            <div className={`d-flex container pt-4`}>

                <Link className={`${Styles.loginLink} px-2 text-decoration-none text-black`} to={''}>{t('help')}</Link>
                <Link className={`${Styles.loginLink} px-2 text-decoration-none text-black`}  to={'/contact'}>{t('Contact Us')}</Link>

             </div>
 
             <div className='d-flex flex-column h-75 justify-content-center mx-5 px-5'>

              <h1 className=''>{t('Login')}</h1>
              <p className=' fw-bold  my-4' >{t('loginPara')}</p>
              
               <Link className={`${Styles.buttonlogin} `} to="/" >{t('tasaphah') }</Link>
              
             </div>


        </div>


        </div>

       

        <div className='col-md-4'>

            <div className='d-flex justify-content-end p-3'>
              <img className={`${Styles.loginImage}`} src="https://s3-alpha-sig.figma.com/img/c9f2/1532/92806cf6a99896c4e83cd8212d1b5593?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g0yk1oq7zMqMGTSVRNMB4aHF0j3k9hPnoa-0M-zQDJaLiS4B93XtVsrWTbX6pOYQOapSUnMGHzIg-nADRYOW7lyQpb0Kc1vJDWz7gNJlQT9UfhusDCdnxc2Gf5nwAmfnQEDvUFhodiICtoJP4O8ydob-yscRJrnEX1UJy15xA0rzzF1Bj-9sPtCWZV24fkVPEBooonW89ICPiHRYbWw1zzwJQp5DpcwPFaDwgCRrFxU4H-BQGZAnvCnACy71eEEWOOmPZ563XMcONTAocId1hmBy4awl4-m00vumUU-2~4O4Sgdhk2TmJGODA5i00PSpG~YklqW2VaR3upLmeY0~hA" alt="LoginLogo" />
            </div>

           <div className=' h-75 d-flex flex-column py-5'>
            <h4 className='mb-5 text-center' >{t('hello')}</h4>

           <form onSubmit={formik.handleSubmit}>
           {errorMsgLogin ? <div className="alert alert-danger w-75 m-auto my-3">{t('errorMsgLogin')}</div>:''}


           <div className='d-flex flex-column px-5'>
                    <label htmlFor="Email" className='mb-3'>{t('EmailLogin')}</label>
                    <input  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="email"
                  value={formik.values.email} type="Email" to="Email" className={`${Styles.emailLogin} form-control py-3`} />
                </div>

                <div className='d-flex flex-column px-5 py-4'>
                    <label htmlFor="Email" className='mb-3'>{t('password')}</label>
                    <input  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="password"
                  value={formik.values.password}
                  type="password"  to="password" className={`${Styles.emailLogin} form-control py-3 ${
                    formik.touched.password && formik.errors.password ? 'is-invalid' : ''
                  }`}
                />

                {formik.touched.password && formik.errors.password? (
                  <div className="alert mt-2 p-2 alert-danger">{formik.errors.password}</div>
                ):''}
                </div>

                <p className={`${Styles.forget} mx-5`}>{t('forgetPassword')}</p>

               <div className='d-flex flex-column align-items-center py-3'>
                <button type='submit' className={` ${Styles.buttonLogin2} w-75 mb-3` } >
                  { loading ? t('Login') : t('loading') }
                </button>
                <Link className={`${Styles.newAccount} mx-5`} to="/register">{t('createNewAccount')}</Link>
               </div>

           </form>

           </div>






        </div>

      </div>

    </div>
  );
};

export default Login;
