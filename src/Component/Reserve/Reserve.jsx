import React, { useState } from 'react';
import Styles from './Reserve.module.css';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Reserve = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';

  const [personalInfo, setPersonalInfo] = useState('');
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date/time

  const handleInputChange = (e) => {
    setPersonalInfo(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('bookAppointment')}</h1>

      <div className={`${Styles.upload} my-5`}>
        <div className={Styles.inputgroup}>
          <label className={Styles.lableOpt}>
            {t('personalInfo')}
          </label>
          <div className={Styles.personalInfoWrapper}>
            <textarea
              value={personalInfo}
              onChange={handleInputChange}
              className={`form-control ${isRTL ? Styles.alignRight : Styles.alignLeft}`}
              rows="3"
              placeholder={`${t('namePlaceholder')}\n${t('agePlaceholder')}\n${t('phonePlaceholder')}`}
            />
          </div>
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
          <label htmlFor="inputGroupSelect02" className={Styles.lableOpt}>
            {t('lableOptPlace')}
          </label>
          <div className={Styles.selectWrapper}>
            <select className={Styles.select} id="inputGroupSelect02">
              <option className={Styles.opt} value="1">{t('opt1')}</option>
              <option className={Styles.opt} value="2">{t('opt2')}</option>
              <option className={Styles.opt} value="3">{t('opt3')}</option>
            </select>
          </div>
        </div>

        <div className={Styles.inputgroup}>
          <label htmlFor="inputGroupSelect03" className={Styles.theServe}>
            {t('lableOptServe')}
          </label>
          <div className={Styles.selectWrapper}>
            <select className={Styles.select} id="inputGroupSelect03">
              <option className={Styles.opt} value="1">{t('opt4')}</option>
              <option className={Styles.opt} value="2">{t('opt5')}</option>
              <option className={Styles.opt} value="3">{t('opt6')}</option>
            </select>
          </div>
        </div>

        <button className={`${Styles.serveBtnNow}`}>{t('serveBtnNow')}</button>
      </div>
    </div>
  );
};

export default Reserve;
