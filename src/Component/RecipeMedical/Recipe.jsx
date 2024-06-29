import React, { useContext, useEffect, useState } from 'react';
import Styles from './Recipe.module.css';
import { useTranslation } from 'react-i18next';
import { API } from '../../features/globals';
import axios from 'axios';
import { AppContext } from '../../Context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [loader, setLoader] = useState(false);
  const {  userToken } = useContext(AppContext); // Assuming you have setUser and userToken in AppContext

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleChangeNotes = (e) => {
    setNotes(e.target.value);
  };

  const handleOnsubmit = async () => {
    setLoader(true)
    if (!file) {
      showErrorMessage(t("chooseFileRecipe"))
      setLoader(false)
    } else {
      try {
        const res = await axios.post(API + "/api/prescription/put", {
          file: file
        }, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          }
        });
        setLoader(false)
        if (res.data.status === true) {
          showSuccessMsg(t("fileUploadedSuccessfully"));
          setNotes("")
          setFile(null)
        }
      } catch (err) {
        setLoader(false)
        console.error('Error fetching user data:', err);
      }

    }
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('medicalPrescription')}</h1>
      <ToastContainer />
      <div className={Styles.upload}>
        {
          loader ? (
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <>
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
            </>
          )
        }
      </div>
    </div>
  );
};

export default Recipe;
