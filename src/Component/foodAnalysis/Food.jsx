
import React, { useState } from 'react';
import Styles from './Food.module.css';
import { useTranslation } from 'react-i18next';

const Food = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';




  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('foodAnalysis')}</h1>

      <div className={`${Styles.upload}`}>

        <p>{t('foodFisrtPara')}</p>
        <p>{t('foodSecondPara')}</p>
        <p>{t('foodThirdPara')}</p>
        <ul className='px-1 mx-3'>
            <li>{t('foodThirdParaLione')}</li>
            <li>{t('foodThirdParaLiTwo')}</li>
            <li>{t('foodThirdParaLiThree')}</li>
            <li>{t('foodThirdParaLiFour')}</li>
        </ul>
        
        <p className='mt-5'>{t('Certificates')}</p>
        <p>{t('firstCertificate')}</p>
        <p>{t('secondCertificate')}</p>

        <p className='mt-2'>{t('foodForthPara')}</p>


        

                   <div className='d-flex flex-column w-100 mt-5'>
                   <label htmlFor="nameFoodAnalysis" className={Styles.labelOpt}>
                    {t('name')}
                    </label>
                    <input type="text" id='nameFoodAnalysis'  className={Styles.inputField} />
                    
                    <label htmlFor="emailFoodAnalysis" className={Styles.labelOpt}>
                    {t('email')}
                    </label>
                    <input type="text" id='emailFoodAnalysis'  className={Styles.inputField} />

                    <label htmlFor="subjectFoodAnalysis" className={Styles.labelOpt}>
                    {t('subject')}
                    </label>
                    <input type="text" id='subjectFoodAnalysis' className={Styles.inputField} />

                    <label htmlFor="notesFoodAnalysis" className={Styles.labelOpt}>
                    {t('notes')}
                    </label>
                    <input type="text" id='notesFoodAnalysis'  className={Styles.inputField} />

                   </div>


     

        <button className={`${Styles.send} mb-5`}>{t('send')}</button>
      </div>
    </div>
  );
};

export default Food;
