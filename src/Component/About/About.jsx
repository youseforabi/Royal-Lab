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
        <p className={Styles.secPara}>{t('after')}</p>
        <ul>
          <li>{t('firstLi')}</li>
          <li>{t('secondLi')}</li>
          <li>{t('theThirdLi')}</li>
        </ul>
      </div>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('ourMission')}</h1>
        <p className={Styles.thirdPara}>{t('thirdPara')}</p>
        <p className={Styles.thirdPara}>{t('after')}</p>
        <ul>
          <li>{t('firLi')}</li>
          <li>{t('secLi')}</li>
          <li>{t('thirdLi')}</li>
          <li>{t('fourthLi')}</li>
          <li>{t('fifthLi')}</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
