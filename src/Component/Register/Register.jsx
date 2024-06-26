import React from 'react';
import Styles from './Register.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Register = () => {
  const { t, i18n } = useTranslation();

  return (
    <div dir={i18n.dir(i18n.language)}>
      

      <div className="row">
        <div className="col-md-8">
        <div className={`${Styles.right} m-2 rounded rounded-2`}> 
            <div className={`d-flex container pt-4`}>

                <Link className={`${Styles.registerLink} px-2 text-decoration-none`} to={''}>{t('help')}</Link>
                <Link className={`${Styles.registerLink} px-2 text-decoration-none`}  to={'/contact'}>{t('Contact Us')}</Link>

             </div>
 
             <div className='d-flex flex-column h-75 justify-content-center mx-5 px-5'>

              <h1 className=''>{t('createNewAccount')}</h1>
              <p className=' fw-bold my-4' >{t('loginPara')}</p>

               <Link className={`${Styles.buttonRegister} `} to="/" >{t('tasaphah') }</Link>
              
             </div>


        </div>


        </div>

       

        <div className='col-md-4'>

            <div className='d-flex justify-content-end pt-3'>
              <img className={`${Styles.registerImage}`} src="https://s3-alpha-sig.figma.com/img/c9f2/1532/92806cf6a99896c4e83cd8212d1b5593?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g0yk1oq7zMqMGTSVRNMB4aHF0j3k9hPnoa-0M-zQDJaLiS4B93XtVsrWTbX6pOYQOapSUnMGHzIg-nADRYOW7lyQpb0Kc1vJDWz7gNJlQT9UfhusDCdnxc2Gf5nwAmfnQEDvUFhodiICtoJP4O8ydob-yscRJrnEX1UJy15xA0rzzF1Bj-9sPtCWZV24fkVPEBooonW89ICPiHRYbWw1zzwJQp5DpcwPFaDwgCRrFxU4H-BQGZAnvCnACy71eEEWOOmPZ563XMcONTAocId1hmBy4awl4-m00vumUU-2~4O4Sgdhk2TmJGODA5i00PSpG~YklqW2VaR3upLmeY0~hA" alt="LoginLogo" />
            </div>

           <div className=' h-75 d-flex flex-column py-2'>
            <h4 className='mb-3 mx-5' >{t('Create Account')}</h4>

                <div className='d-flex flex-column px-5 mb-2'>
                    <label htmlFor="name" className='mb-2'>{t('name')}</label>
                    <input type="text" to="name" className={`${Styles.inputRegister} form-control py-3`} />
                </div>

                <div className='d-flex flex-column px-5 mb-2'>
                    <label htmlFor="phone" className='mb-2'>{t('phone')}</label>
                    <input type="tel" to="phone" className={`${Styles.inputRegister} form-control py-3`} />
                </div>

                <div className='d-flex flex-column px-5 mb-2'>
                    <label htmlFor="Email" className='mb-2'>{t('Emailregister')}</label>
                    <input type="Email" to="Email" className={`${Styles.inputRegister} form-control py-3`} />
                </div>

                <div className='d-flex flex-column px-5 pb-4 mb-2'>
                    <label htmlFor="Email" className='mb-2'>{t('passwordRegister')}</label>
                    <input type="Email" to="Email" className={`${Styles.inputRegister} form-control py-3`} />
                </div>

                <p className={`${Styles.forget} mx-5`}>{t('forgetPassword')}</p>

               <div className='d-flex flex-column align-items-center py-3'>
                <Link className={` ${Styles.buttonLogin2} w-75 mb-3` } >{t('Login')}</Link>
               </div>


           </div>






        </div>

      </div>







    </div>
  );
};

export default Register;
