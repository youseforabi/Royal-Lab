import React from 'react';
import Styles from './Results.module.css'
import { useTranslation } from 'react-i18next';

const Results = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('Results')}</h1>


      <div className={`${Styles.first} my-5`}>

        
      <p>{t('servicesp1')}</p>
      <p>{t('servicesp2')}</p>
      <p>{t('servicesp3')}</p>
      <button className={Styles.uploadPdf}>{t('updloadPdf')}</button>
          

      </div>

    </div>
  );
};

export default Results;
