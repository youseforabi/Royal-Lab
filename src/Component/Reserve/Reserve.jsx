import React, { useState } from 'react';
import Styles from './Reserve.module.css';
import { useTranslation } from 'react-i18next';

const Reserve = () => {
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
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('bookAppointment')}</h1>

      <div className={`${Styles.upload} my-5`}>
        <div className={Styles.inputgroup}>
          <label className={Styles.lableOpt}>
            {t('personalInfo')}
          </label>
          <div className={Styles.personalInfoWrapper}>
            {isEditing ? (
              <textarea
                value={personalInfo}
                onChange={handleInputChange}
                className={`form-control ${isRTL ? Styles.alignRight : Styles.alignLeft}`}
                rows="3"
                placeholder={`${t('namePlaceholder')}\n${t('agePlaceholder')}\n${t('phonePlaceholder')}`}
              />
            ) : (
              <div className={Styles.personalInfoDisplay}>
                {personalInfo || (
                  <>
                    {t('namePlaceholder')}
                    <br />
                    {t('agePlaceholder')}
                    <br />
                    {t('phonePlaceholder')}
                  </>
                )}
              </div>
            )}
            {isEditing ? (
                <button onClick={handleSaveClick} className={`${Styles.updateBtn} ${isRTL ? Styles.rtlButton : Styles.ltrButton}`} style={isRTL ? {left: '15px'} : {right: '0'}}>
                {t('save')}
              </button>
            ) : (
              <button onClick={handleUpdateClick} className={`${Styles.updateBtn} ${isRTL ? Styles.rtlButton : Styles.ltrButton}`} style={isRTL ? {left: '0'} : {right: '5px'}}>
                {t('update')}
              </button>
            )}
          </div>
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
          <label htmlFor="inputGroupSelect02" className={Styles.lableOpt}>
            {t('lableOptPlace')}
          </label>
          <select className="form-select" id="inputGroupSelect02">
            <option className={Styles.opt} value="1">{t('opt1')}</option>
            <option className={Styles.opt} value="2">{t('opt2')}</option>
            <option className={Styles.opt} value="3">{t('opt3')}</option>
          </select>
        </div>

        <div className={Styles.inputgroup}>
          <label htmlFor="inputGroupSelect03" className={Styles.theServe}>
            {t('lableOptServe')}
          </label>
          <select className="form-select" id="inputGroupSelect03">
            <option className={Styles.opt} value="1">{t('opt4')}</option>
            <option className={Styles.opt} value="2">{t('opt5')}</option>
            <option className={Styles.opt} value="3">{t('opt5')}</option>
          </select>
        </div>

        <button className={`${Styles.serveBtnNow}`}>{t('serveBtnNow')}</button>
      </div>
    </div>
  );
};

export default Reserve;
