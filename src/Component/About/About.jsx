import React from 'react';
import Styles from './About.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('aboutUs')}</h1>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('aboutUs')}</h1>
        <p className={Styles.firstPara}>{t('firstPara')}</p>
        <Link to={'/royal'} className={Styles.readeBtn}>{t('readeBtn')}</Link>
      </div>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('ourVision')}</h1>
        <p className={Styles.secPara}>{t('secPara')}</p>
   
      </div>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('ourMsg')}</h1>
        <p className={Styles.secPara}>{t('ourMsg1')}</p>
   
      </div>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('ourValue')}</h1>
        <p className={Styles.secPara}>{t('ourValue1')}</p>
   
      </div>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('Ourgoals')}</h1>
        <ul>
          <li>{t('Ourgoals1')}</li>
          <li>{t('Ourgoals2')}</li>
          <li>{t('Ourgoals3')}</li>
          <li>{t('Ourgoals4')}</li>
          <li>{t('Ourgoals5')}</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
