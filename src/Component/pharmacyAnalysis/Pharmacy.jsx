
import React, { useState } from 'react';
import Styles from './Pharmacy.module.css';
import { useTranslation } from 'react-i18next';

const Pharmacy = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';




  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('pharmaceuticalAnalyses')}</h1>
      <div className={`${Styles.upload}`}>

        <p>{t('PharmaceuticalFirstPara')}</p>
        <p>{t('PharmaceuticalSecondPara')}</p>
        
        <p>{t('PharmaceuticalServices')}</p>
        <p>{t('PharmaceuticalServices1')}</p>
        <p>{t('PharmaceuticalServices2')}</p>

        <p className='mt-5'>{t('pharmacyCertificate')}</p>
        <p>{t('pharmacyCertificate1')}</p>
        <p>{t('pharmacyCertificate2')}</p>
        <p>{t('pharmacyCertificate3')}</p>



    
                   <div className='d-flex flex-column w-100 mt-5'>
                             <label htmlFor="namePharmacyAnalysis" className={Styles.labelOpt}>
                            {t('namePharmacy')}
                            </label>
                            <input type="text" id='namePharmacyAnalysis' className={Styles.inputField} />
                            
                            <label htmlFor="phonePharmacyAnalysis" className={Styles.labelOpt}>
                            {t('phonePharmacy')}
                            </label>
                            <input type="tel" id='phonePharmacyAnalysis' className={Styles.inputField} />

                            <label htmlFor="subjectPharmacyAnalysis" className={Styles.labelOpt}>
                            {t('subjectPharmacy')}
                            </label>
                            <input type="text" id='subjectPharmacyAnalysis' className={Styles.inputField} />

                            <label htmlFor="notesPharmacyAnalysis" className={Styles.labelOpt}>
                            {t('notesPharmacy')}
                            </label>
                            <input type="text" id='notesPharmacyAnalysis' className={Styles.inputField} />

                   </div>


     

        <button className={`${Styles.send} mb-5`}>{t('sendPharmacy')}</button>
      </div>
    </div>
  );
};

export default Pharmacy;
