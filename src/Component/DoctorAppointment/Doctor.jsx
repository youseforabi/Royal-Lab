
import React, { useState } from 'react';
import Styles from './Doctor.module.css';
import { useTranslation } from 'react-i18next';

const Doctor = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';

  const [personalInfo, setPersonalInfo] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setPersonalInfo(e.target.value);
  };

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Logic to save personal information
    console.log('Updated Personal Info:', personalInfo);
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('doctorConsultation')}</h1>

      <div className={`${Styles.upload} my-5`}>
      
      <div className={Styles.inputgroup}>
          <label htmlFor="inputGroupSelect01" className={Styles.lableOpt}>
            {t('doctorName')}
          </label>
          <select className="form-select" id="inputGroupSelect01">
            <option className={Styles.opt} value="1">{t('nameDoctor1')}</option>
            <option className={Styles.opt} value="2">{t('nameDoctor2')}</option>
            <option className={Styles.opt} value="3">{t('nameDoctor3')}</option>
          </select>
        </div>
       

        <div className={Styles.inputgroup}>
          <label htmlFor="inputGroupSelect02" className={Styles.lableOpt}>
            {t('specialization')}
          </label>
          <select className="form-select" id="inputGroupSelect02">
            <option className={Styles.opt} value="1">{t('opt1specialization')}</option>
            <option className={Styles.opt} value="2">{t('opt2specialization')}</option>
            <option className={Styles.opt} value="3">{t('opt3specialization')}</option>
          </select>
        </div>

        <div className={Styles.inputgroup}>
          <label htmlFor="date" className={Styles.lableOpt}>
            {t('Date')}
          </label>
          <input
            type="date"
            id="date"
            className={`form-control ${isRTL ? Styles.alignRight : Styles.alignLeft}`}
          />
        </div>

        <div className={Styles.inputgroup}>
          <label htmlFor="inputGroupSelect04" className={Styles.lableOpt}>
            {t('specialization')}
          </label>
          <input className="form-control" placeholder={t('kind')} id="inputGroupSelect04" />
      
         
        </div>

     

        <button className={`${Styles.requestBtnNow}`}>{t('requestBtnNow')}</button>
      </div>
    </div>
  );
};

export default Doctor;
