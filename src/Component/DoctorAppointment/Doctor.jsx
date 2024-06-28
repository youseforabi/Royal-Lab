
import React, { useState } from 'react';
import Styles from './Doctor.module.css';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Doctor = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date/time

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('doctorConsultation')}</h1>

      <div className={`${Styles.upload} my-5`}>
      
      <div className={Styles.inputgroup}>
          <label htmlFor="inputGroupSelect01" className={Styles.lableOpt}>
            {t('doctorName')}
          </label>
          <select className={Styles.select} id="inputGroupSelect01">
            <option className={Styles.opt} value="1">{t('nameDoctor1')}</option>
            <option className={Styles.opt} value="2">{t('nameDoctor2')}</option>
            <option className={Styles.opt} value="3">{t('nameDoctor3')}</option>
          </select>
        </div>
       

        <div className={Styles.inputgroup}>
          <label htmlFor="inputGroupSelect02" className={Styles.lableOpt}>
            {t('specialization')}
          </label>
          <select className={Styles.select} id="inputGroupSelect02">
            <option className={Styles.opt} value="1">{t('opt1specialization')}</option>
            <option className={Styles.opt} value="2">{t('opt2specialization')}</option>
            <option className={Styles.opt} value="3">{t('opt3specialization')}</option>
          </select>
        </div>


        <div className={Styles.inputgroup}>
          <label className={Styles.lableOpt}>
            {t('Date')}
          </label>
          <div className={Styles.datePickerWrapper}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              showTimeSelect
              timeIntervals={15}
              timeFormat="HH:mm"
              dateFormat="MMMM d, yyyy h:mm aa"
              className={`form-control ${isRTL ? Styles.alignRight : Styles.alignLeft}`}
              placeholderText={t('Date')}
            />
          </div>
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
