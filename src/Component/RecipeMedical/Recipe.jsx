import React, { useContext, useState } from 'react';
import Styles from './Recipe.module.css';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../features/globals';
import axios from 'axios';
import { AppContext } from '../../Context/userContext';

const showSuccessMsg = (msg) => {
  toast.success(msg, {
    position: 'top-right',
  });
};

const showErrorMessage = (msg) => {
  toast.error(msg, {
    position: 'top-right',
  });
};

const Recipe = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState("");
  const {  userToken } = useContext(AppContext); // Assuming you have setUser and userToken in AppContext

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleChangeNotes = (e) => {
    setNotes(e.target.value);
  };

  const handleOnsubmit = async () => {
    if (!file) {
      showErrorMessage(t("chooseFileRecipe"))
    } else {
      try {
        const res = await axios.post(API + "/api/prescription/put", {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        });
        if (res.data.status === true) {
          showSuccessMsg(t("fileUploadedSuccessfully"));
          setNotes("")
          setFile(null)
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
      }

    }
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('medicalPrescription')}</h1>
      <ToastContainer />

      <div className={Styles.upload}>
        <label htmlFor="imageUpload" className={Styles.fileLabel}>{t('chooseFile')}</label>
        <input
          type="file"
          id="imageUpload"
          name="imageUpload"
          onChange={handleChangeFile}
          accept="image/*"
          className={Styles.fileInput}
        />

        <label htmlFor="notes" className={`${Styles.label} my-2`}>{t('notesLabel')}</label>
        <textarea
          id="notes"
          name="notes"
          value={notes}
          onChange={handleChangeNotes}
        ></textarea>

        <button onClick={handleOnsubmit} className={`${Styles.uploadBtn} mx-auto`}>{t('uploadBtn')}</button>
      </div>
    </div>
  );
};

export default Recipe;
