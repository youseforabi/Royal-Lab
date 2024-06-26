
import React, { useState } from 'react';
import Styles from './Water.module.css';
import { useTranslation } from 'react-i18next';

const Water = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';




  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('waterAnalysis')}</h1>
      <div className={`${Styles.upload}`}>

        <p>{t('waterFirstPara')}</p>
        <p>{t('waterSecondPara')}</p>
        <p>{t('waterThirdPara')}</p>
        <p>{t('waterForthPara')}</p>
        <ul className='px-1 mx-3'>
            <li>{t('waterForthParaFirstLi')}</li>
            <li>{t('waterForthParaSecondLi')}</li>
        </ul>
        <p>{t('waterSixPara')}</p>
        <p>{t('waterSevenPara')}</p>

        
        <p className='mt-5'>{t('waterCertificate')}</p>
        <p>{t('waterfirstCertificate')}</p>
        <p>{t('watersecondCertificate')}</p>



    
                   <div className='d-flex flex-column w-100 mt-5'>
                             <label htmlFor="nameWaterAnalysis" className={Styles.labelOpt}>
                            {t('nameWater')}
                            </label>
                            <input type="text" id='nameFoodAnalysis' className={Styles.inputField} />
                            
                            <label htmlFor="phoneWaterAnalysis" className={Styles.labelOpt}>
                            {t('phoneWater')}
                            </label>
                            <input type="tel" id='phoneWaterAnalysis' className={Styles.inputField} />

                            <label htmlFor="subjectWaterAnalysis" className={Styles.labelOpt}>
                            {t('subjectWater')}
                            </label>
                            <input type="text" id='subjectWaterAnalysis' className={Styles.inputField} />

                            <label htmlFor="notesWaterAnalysis" className={Styles.labelOpt}>
                            {t('notesWater')}
                            </label>
                            <input type="text" id='notesWaterAnalysis' className={Styles.inputField} />

                   </div>


     

        <button className={`${Styles.send} mb-5`}>{t('send')}</button>
      </div>
    </div>
  );
};

export default Water;
