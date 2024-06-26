import React from 'react';
import Styles from './Navbar.module.css'
import { useTranslation } from 'react-i18next';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link , useLocation} from 'react-router-dom';
import i18n from '../../i18n'; // Adjust the path as per your project structure
const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    
    <BootstrapNavbar expand="lg" className={i18n.language === 'ar' ? 'text-right' : 'text-left' }>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars"></i> 
                </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <div className={`${Styles.buttonsContainer}`} >
        <Link className={`${Styles.button2}`} to="/register" >{t('Create Account') }</Link>
        <Link className={` ${Styles.button1}`} to="/login" >{t('Login')}</Link>

      </div>
      
      
      <Nav className={`${Styles.linksContainer} mx-3 w-100 px-4`}>
        <Nav.Link className={`${Styles.navLink}  px-4`} as={Link} to="/">{t('Home')}</Nav.Link>
        <Nav.Link className={`${Styles.navLink}  px-4`} as={Link} to="/service">{t('Services')}</Nav.Link>
        <Nav.Link className={`${Styles.navLink}  px-4`} as={Link} to="/results">{t('Results')}</Nav.Link>
        <Nav.Link className={`${Styles.navLink}  px-4`} as={Link} to="/reserve">{t('Reserve')}</Nav.Link>

        <Nav.Link className={`${Styles.navLink}  px-4`} as={Link} to="/about">{t('About')}</Nav.Link>
        <Nav.Link className={`${Styles.navLink} px-4`} onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}>
          {t('Switch Language')}

        </Nav.Link>
      </Nav>
      </div>

      <div className='d-flex justify-content-center w-25'> 
        <img className={`${Styles.imgLogo}`} src="https://s3-alpha-sig.figma.com/img/c9f2/1532/92806cf6a99896c4e83cd8212d1b5593?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g0yk1oq7zMqMGTSVRNMB4aHF0j3k9hPnoa-0M-zQDJaLiS4B93XtVsrWTbX6pOYQOapSUnMGHzIg-nADRYOW7lyQpb0Kc1vJDWz7gNJlQT9UfhusDCdnxc2Gf5nwAmfnQEDvUFhodiICtoJP4O8ydob-yscRJrnEX1UJy15xA0rzzF1Bj-9sPtCWZV24fkVPEBooonW89ICPiHRYbWw1zzwJQp5DpcwPFaDwgCRrFxU4H-BQGZAnvCnACy71eEEWOOmPZ563XMcONTAocId1hmBy4awl4-m00vumUU-2~4O4Sgdhk2TmJGODA5i00PSpG~YklqW2VaR3upLmeY0~hA" alt="logo" />
      </div>
      



    </BootstrapNavbar>
  );
};

export default Navbar;
