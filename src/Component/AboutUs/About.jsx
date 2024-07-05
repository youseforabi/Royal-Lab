import React from 'react';
import Styles from './About.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('About')}</h1>

      <div className={`${Styles.first} mx-auto`}>
        <h2>{t('aboutUsHeading')}</h2>
        <p className={Styles.secPara}>{t('aboutUsParagraph1')}</p>
        <p className={Styles.secPara}>{t('aboutUsParagraph1')}</p>
      </div>
    </div>
  );
};

export default AboutUs;
