import React, { useContext, useEffect } from 'react';
import Styles from './Profile.module.css'
import { useTranslation } from 'react-i18next';
import { AppContext } from '../../Context/userContext'; // Adjust the path as per your context setup
import axios from 'axios';

const Profile = () => {
  const { t, i18n } = useTranslation();
  const {  userToken } = useContext(AppContext); // Assuming you have setUser and userToken in AppContext

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get('https://royal-lab.webbing-agency.com/api/user/get', {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        });
        if (res.data.status === true) {
          console.log(res.data.data.user); 
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    getUserData();
  }, [ userToken]);

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1>{t('Profile')}</h1>
    <div className={`${Styles.profile} my-5`}>

      <div className="container">
        <div className="row">
        <div className="col-md-4">
          <h3 className='text-center d-flex flex-column'>{t('personalInfo')}</h3>
          
          <div className="d-flex align-items-center justify-content-center">
            <img className={`${Styles.img} me-3`} src="https://s3-alpha-sig.figma.com/img/64a9/5e8e/2ee1032d7bce0a70110220749b65f0f7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cf~Zzab9YDViW2oQfjrUq9I2Y3-hh5QNs7WZFiph3WodJbGsj10p08p~uw~esH8xiE~aJq4pei0~mHqxNFmeks-shJy47uq8hs2Pbt9DSrOHmXuanNiRXiM7MMozIi84yUjYAQHZ78OBIvULUhcMEmptaB62XohvdZl7kN1F9SSkouAVsgQLT6DaUs7NgjirLNe~26LROAU~YForMz27seHPBQcVR9n1Fsdc~zgujFFfngN1IV9CQlIACcYuN5E74abAQhVP0Q77YH8VmCCfBwy0POrXfE1VfhIYDwpAO5LofjKb72Ws-Fp7e9lsWIjaTXxCgW4T1fiRMPH6TWieTg__" alt="" />
            <p>{t('profile.name')} : {user.name}</p>
            <p>{t('profile.phone')} : {user.phone}</p>
            </div>
        </div>


          <div className="col-md-4">

          <h3 className='text-center'>{t('Address')}</h3>

            
          </div>

          <div className="col-md-4">

          <h3 className='text-center'>{t('file')}</h3>

            
          </div>
        </div>
      </div>



      </div>

    </div>
  );
};

export default Profile;
