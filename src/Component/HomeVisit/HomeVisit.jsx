import React from 'react';
import Styles from './HomeVisit.module.css'
import { useTranslation } from 'react-i18next';



const HomeVisit = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir(i18n.language) === 'rtl';
  
    return (
      <div dir={i18n.dir(i18n.language)}>
        <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('homeVisit')}</h1>
  
        <div className={Styles.upload}>
          <input type="text" id="imageUpload" name="imageUpload"  
          placeholder={t('visitNumber')} 
          className={`${Styles.fileInput} mb-5 form-control`} />


          <h4 className={`${Styles.notFound} my-5`}>{t('notFoundVisit')}</h4>
  

          <button className={`${Styles.reserveBtn}`}>{t('reserverNow')}</button>
        </div>
      </div>
    );
  };
  
  export default HomeVisit;