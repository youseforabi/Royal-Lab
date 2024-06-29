import React, { useContext } from 'react';
import Styles from './Navbar.module.css'
import { useTranslation } from 'react-i18next';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link , useLocation, useNavigate} from 'react-router-dom';
import Dropdown from 'react-multilevel-dropdown';
import i18n from '../../i18n'; // Adjust the path as per your project structure
import { border, margin, padding, positions, textAlign, width } from '@mui/system';
import { AppContext, AppProvider } from '../../Context/userContext'; // Import AppContext

const Navbar = () => {

  const navigate = useNavigate(); // Ensure useNavigate is called

  let {userToken , setUserToken} = useContext(AppContext)



  const dropdownToggleStyle = {
    textAlign : 'start',
    margin : '15px',
    backgroundColor: 'transparent',
    width : '100%' , 
    color: 'black', 
    border : 'none',
    
    // Add any other styles as needed
  };

  const DropdownItem = {
    // padding : '0px',
    
    // margin : ' 0px'
  }
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';
  const isENng = i18n.language === 'en';



  // const doSomething = () => {
  // }
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const logOut = () => {
    localStorage.setItem('userToken', null);
    setUserToken(null);
    navigate('/login');
  };
  return (
    
    <BootstrapNavbar expand="lg" className={i18n.language === 'ar' ? 'text-right' : 'text-left' }>

      <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars"></i>
                      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    {userToken === null ? (
            <div className={`${Styles.buttonsContainer}`}>
              <Link className={`${Styles.button2}`} to="/register">
                {t('Create Account')}
              </Link>
              <Link className={`${Styles.button1}`} to="/login">
                {t('Login')}
              </Link>
            </div>
          ) : (
            <div className={`${Styles.buttonsContainer}`}>

                <Link className={Styles.profile} to={'/profile'}>
                  <div>
                  <img className='w-100' src="https://s3-alpha-sig.figma.com/img/64a9/5e8e/2ee1032d7bce0a70110220749b65f0f7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cf~Zzab9YDViW2oQfjrUq9I2Y3-hh5QNs7WZFiph3WodJbGsj10p08p~uw~esH8xiE~aJq4pei0~mHqxNFmeks-shJy47uq8hs2Pbt9DSrOHmXuanNiRXiM7MMozIi84yUjYAQHZ78OBIvULUhcMEmptaB62XohvdZl7kN1F9SSkouAVsgQLT6DaUs7NgjirLNe~26LROAU~YForMz27seHPBQcVR9n1Fsdc~zgujFFfngN1IV9CQlIACcYuN5E74abAQhVP0Q77YH8VmCCfBwy0POrXfE1VfhIYDwpAO5LofjKb72Ws-Fp7e9lsWIjaTXxCgW4T1fiRMPH6TWieTg__" alt="logoProfile" />
                  </div>

                  

                </Link>

            <button className={`${Styles.button2} border-0 w-50 mx-4`} onClick={logOut}>
              {t('logOut')}
            </button>
            </div>

          )} 
      
      
      
      <Nav className={`${Styles.linksContainer} mx-3 w-100 px-4 d-flex`}>
      <Nav.Link className={`${Styles.navLink}  px-4 my-2`} as={Link} to="/">{t('Home')}</Nav.Link>


      <Dropdown style={dropdownToggleStyle}
      position={isArabic ?  'left' : 'right'}
      title={<>{t('Services')} <i class="fa-sharp fa-solid fa-arrow-down pe-1"></i></>}
      className={isArabic ?  'left' : 'right'}
  >
    <Dropdown.Item >    
    {t('elafrad')} <i className={`px-2 fa-solid ${isArabic ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
    <Dropdown.Submenu  
      openOnHover = 'true'
      position={isArabic ?  'left' : 'right'}>
 <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={'/recipeMedical'}>{t('recipeMedical')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black">{t('bloodAnalysis')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={'/homeVisit'}>{t('homeVisit')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black">{t('Branches')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black">{t('Insurances')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={'/doctor'}>{t('consultation')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black">{t('Vaccinations')}</Link>
        </Dropdown.Item>


        
      </Dropdown.Submenu>
    </Dropdown.Item>


    <Dropdown.Item>
      {t('companies')}<i className={`px-2 fa-solid ${isArabic ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
        <Dropdown.Submenu 
          openOnHover = 'true'
      
      position={isArabic ?  'left' : 'right'}>

<Dropdown.Item >
          <Link className="col-md-2 text-decoration-none text-black" to={'/foodAnalysis'}>{t('tahalilElgezaa')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={'/waterAnalysis'}>{t('waterAnalysis')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={'/pharmaAnalysis'}>{t('pharmaAnalysis')}</Link>
        </Dropdown.Item>




       
      </Dropdown.Submenu>
    </Dropdown.Item>
  </Dropdown>

      <Nav.Link className={`${Styles.navLink}  px-4 my-2`} as={Link} to="/results">{t('Results')}</Nav.Link>
      <Nav.Link className={`${Styles.navLink}  px-4 my-2`} as={Link} to="/reserve">{t('Reserve')}</Nav.Link>

      <Nav.Link className={`${Styles.navLink}  px-4 my-2`} as={Link} to="/about">{t('About')}</Nav.Link>
      <Nav.Link className={`${Styles.navLink} px-4 my-2`} onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}>
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
