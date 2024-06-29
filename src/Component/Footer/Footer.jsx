import React from 'react';
import { useTranslation } from 'react-i18next';

import Styles from './Footer.module.css';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <footer className={Styles.footer}>
      <div className={Styles.layer}>
        <div className="col-md-3">
          <img 
            src="https://s3-alpha-sig.figma.com/img/c9f2/1532/92806cf6a99896c4e83cd8212d1b5593?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kp4m0y3aSbasx24ygsomMAzvujvt37I-zo9HPXx8tKvi7iTbtDYPlEkRZrLc8tGPxOjCp6y5oxPH5hHkAvvFrdhzmlL~AV5eDKaBVk7qWiXiqL4JggMDmTT0wMsDAUVQ40jLyTjxuWKnT~AN7v~OovoohRtYW5N5OstkGiCfugUMghxTtwfHmWmvcf7u604L9g5EEPeaKoUebPbUjKqOSF4REaPSoFV9rnzV2XK8O0kBKSn-sN5jRTLvumUdZ9IFOcAFiUnlmCDshMRL0A351QPoqFzwmv6R9JzBnsM9L4m--hWhPPZ6MauPd0JxVOXsOMWCqnL6uhVuMwxOnmyVQw__"
            alt="Logo"
            className={Styles.logo}
          />
        </div>
        <div className="container ">
          <div className={`row  ${isArabic ? Styles.alignRight : ''}`}>
            <div className="col-md-3">
              <p>{t('TradeAssurance')}</p>
              <ul>
                <li>{t('TradeAssuranceli1')}</li>
                <li>{t('TradeAssuranceli2')}</li>
                <li>{t('TradeAssuranceli3')}</li>
                <li>{t('TradeAssuranceli4')}</li>
                <li>{t('TradeAssuranceli5')}</li>
              </ul>
            </div>
            <div className="col-md-3">
              <p>{t('knowus')}</p>
              <ul>
                <li>{t('knowusl1')}</li>
                <li>{t('knowusl2')}</li>
                <li>{t('knowusl3')}</li>
                <li>{t('knowusl4')}</li>
              </ul>
            </div>
            <div className="col-md-3">
              <p>{t('Getsupport')}</p>
              <ul>
                <li>{t('Getsupportl1')}</li>
                <li>{t('Getsupportl2')}</li>
                <li>{t('Getsupportl3')}</li>
                <li>{t('Getsupport4')}</li>
                <li>{t('Getsupport5')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='text-center py-4'>
        <p>Powered by <a className={Styles.webbing} href="http://webbing-agency.com/">webbing agency</a></p>
        </div>
        
      </div>
      

      
    </footer>

    
    
  );
};

export default Footer;
