import React from 'react';
import Styles from './Recipe.module.css';
import { useTranslation } from 'react-i18next';

const Recipe = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('medicalPrescription')}</h1>

      <div className={Styles.upload}>
        <label htmlFor="imageUpload" className={Styles.fileLabel}>{t('chooseFile')}</label>
        <input type="file" id="imageUpload" name="imageUpload" accept="image/*" className={Styles.fileInput} />

        <label htmlFor="notes" className={`${Styles.fileLabe1l} my-2`}>{t('notesLabel')}</label>
        <textarea id="notes" name="notes" ></textarea>

        <button className={`${Styles.uploadBtn} mx-auto`}>{t('uploadBtn')}</button>
      </div>
    </div>
  );
};

export default Recipe;
