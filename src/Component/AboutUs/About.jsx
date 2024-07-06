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
        {/* <h2>{t('aboutUsHeading')}</h2> */}
        <p className={Styles.secPara}>{t('aboutUsParagraph1')}</p>
        <p className={Styles.secPara}>{t('docName')}</p>
        <p className={Styles.secPara}>{t('doc1')}</p>

        <p className={Styles.secPara}>{t('doc2')}</p>
        <p className={Styles.secPara}>{t('doc3')}</p>
        <p className={Styles.secPara}>{t('doc4')}</p>
        <p className={Styles.secPara}>{t('doc5')}</p>
        <p className={Styles.secPara}>{t('doc6')}</p>
        <p className={Styles.secPara}>{t('doc7')}</p>
        <p className={Styles.secPara}>{t('doc8')}</p>
        <p className={Styles.secPara}>{t('doc9')}</p>
        <p className={Styles.secPara}>{t('doc10')}</p>

        {/* <p className={Styles.secPara}>{t('aboutUsParagraph1')}</p> */}
      </div>
    </div>
  );
};

export default AboutUs;
