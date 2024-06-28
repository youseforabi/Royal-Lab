import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../../Context/userContext'; // Adjust the path as per your context setup

const Profile = () => {
  const { t, i18n } = useTranslation();
  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1>{t('Profile')}</h1>
  
    </div>
  );
};

export default Profile;
