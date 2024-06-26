import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Styles from './Home.module.css';
import VaccinesIcon from '@mui/icons-material/Vaccines';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <div className='position-relative'>
        <div className={Styles.layer}></div>
        <img className='w-100' height={600} src="https://s3-alpha-sig.figma.com/img/3c4d/67c1/9692c73c9d23a3407ad6b2df32e28e52?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCITkHr5E2blUUF2phF6~khiUZDB-f5aliJdgc7~Gx3CLog3OEKtAwsn2PCKo5kVKKohFtps2FEn4oqQJDvQVHNJJL-8lHJdO~KlOqc8EfloAdPKWl8Ri2nuwOS9dJa0~fo3GGZTTEOMOWWGkakbFyNQnpyipJh8XrjEXIcNSm0IaAmx42cQZd57oDaKkCLMEcQKteUgqGCbmDesGRD0SB6G0C-jDN8ghUkNaF~eyNb9rZFhohNR7SpP5qKjmNEg7QIovflafiNGm01~7rhDYz1CJi3ko8YTi4u5P~vxg1YHw1vlrZIbM9phlcfgSfZ23vEr5jjb-LMzp1L6sUH4Uw__" alt="Home image" />
        <h1 className={Styles.welcome}>{t('welcome')}</h1>
        <h1 className={Styles.welcome2}>{t('welcome2')}</h1>
        <Link className={`${Styles.buttonHome}`} to="">{t('buttonHome')}</Link>

        <div>
          {/* <p className={Styles.contactHome} style={{ [isRTL ? 'left' : 'right']: '220px', [isRTL ? 'right' : 'left']: 'auto' }}>{t('Contact Us')}</p> */}
          {/* <div className={Styles.line} style={{ [isRTL ? 'left' : 'right']: '220px', [isRTL ? 'right' : 'left']: 'auto' }}></div> */}

          <div className={Styles.icons} style={{ [isRTL ? 'left' : 'right']: '200px', [isRTL ? 'right' : 'left']: 'auto' }}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-solid fa-location-dot"></i>
            <i className="fa-solid fa-phone"></i>
          </div>
        </div>
      </div>

      <Box sx={{
  width: '100%',
  typography: 'body1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px'
}}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label={t('elafrad')} value="1" className={`${Styles.firstOpt} ${value === '1' ? Styles.activeTab : ''}`} />
        <Tab label={t('companies')} value="2" className={`${Styles.secondOpt} ${value === '2' ? Styles.activeTab : ''}`} />
      </TabList>
    </Box>
    <TabPanel value="1" className={Styles.TabPanel} style={{ padding: 0 }}>
      <div className={` ${Styles.theCard1} row`} style={{ margin: 0 }}>
        <Link className="col-md-2 text-decoration-none text-black" to={'/foodAnalysis'}>
          <div className={`${Styles.cardHome1}`}>
            <i className="fa-solid fa-apple-whole mb-3 fs-2"></i>
            <h3 className='mt-2 text-center'>{t('tahalilElgezaa')}</h3>
          </div>
        </Link>

        <Link className="col-md-2 text-decoration-none text-black" to={'/waterAnalysis'}>
          <div className={`${Styles.cardHome1}`}>
            <i className="fa-solid fa-hand-holding-medical fs-2 mb-3"></i>
            <h3 className='mt-2 text-center'>{t('waterAnalysis')}</h3>
          </div>
        </Link>

        <Link className="col-md-2 text-decoration-none text-black" to={'/pharmaAnalysis'}>
          <div className={`${Styles.cardHome1}`}>
            <VaccinesIcon className='fs-2 mb-3' />
            <h3 className='mt-2 text-center'>{t('pharmaAnalysis')}</h3>
          </div>
        </Link>
      </div>
    </TabPanel>
    <TabPanel value="2" className={Styles.TabPanel} style={{ padding: 0 }}>
      <div className={` ${Styles.theCard} row`} style={{ margin: 0 }}>
        <Link className="col-md-2 text-decoration-none text-black" to={"./recipeMedical"}>
          <div className={`${Styles.cardHome}`}>
            <i className="fa-solid fa-capsules mb-3 fs-2"></i>
            <h3 className='mt-2 text-center'>{t('recipeMedical')}</h3>
          </div>
        </Link>
        <div className="col-md-2">
          <div className={`${Styles.cardHome}`}>
            <i className="fa-solid fa-droplet mb-3 fs-2"></i>
            <h3 className='mt-2 text-center'>{t('bloodAnalysis')}</h3>
          </div>
        </div>
        <Link className="col-md-2 text-decoration-none text-black" to={'./homeVisit'}>
          <div className={`${Styles.cardHome}`}>
            <i className="fa-solid fa-home mb-3 fs-2"></i>
            <h3 className='mt-2 text-center'>{t('homeVisit')}</h3>
          </div>
        </Link>
        <div className="col-md-2">
          <div className={`${Styles.cardHome}`}>
            <i className="fa-solid fa-location-dot mb-3 fs-2"></i>
            <h3 className='mt-2 text-center'>{t('Branches')}</h3>
          </div>
        </div>
        <div className="col-md-2">
          <div className={`${Styles.cardHome}`}>
            <i className="fa-solid fa-scroll mb-3 fs-2"></i>
            <h5 className='mt-2 text-center'>{t('Insurances')}</h5>
          </div>
        </div>
        <Link className="col-md-2 text-decoration-none text-black" to={'/doctor'}>
          <div className={`${Styles.cardHome}`}>
            <i className="fa-solid fa-phone mb-3 fs-2"></i>
            <h6 className='mt-2 text-center'>{t('consultation')}</h6>
          </div>
        </Link>
        <div className="col-md-2">
          <div className={`${Styles.cardHome}`}>
            <i className="fa-solid fa-syringe mb-3  fs-2"></i>
            <h6 className='mt-2 text-center'>{t('Vaccinations')}</h6>
          </div>
        </div>
      </div>
    </TabPanel>
  </TabContext>
</Box>


      <div className={Styles.clients}>
        <h2 className='py-4'>{t('araClients')}</h2>
        <div className="row">
          <div className="col-lg-6 col-md-12 gy-3">
            <div className={Styles.clientCard}>
              <i className="fa-solid fa-user fs-1 px-3"></i>
              <div className={Styles.clientOpinion}>
                <p className={Styles.name}>{t('torki')}</p>
                <p>{t('lorem')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 gy-3">
            <div className={Styles.clientCard}>
              <i className="fa-solid fa-user fs-1 px-3"></i>
              <div className={Styles.clientOpinion}>
                <p className={Styles.name}>{t('torki')}</p>
                <p>{t('lorem')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.tech}>
        <div className="row">
          <div className="col-md-4">
            <i className={`${Styles.icona} fa-solid fa-vial-virus py-5`}></i>
            <h3>{t('technical')}</h3>
            <p>{t('techLorem')}</p>
          </div>
          <div className="col-md-4">
            <i className={`${Styles.icona} fa-solid fa-vial-virus py-5`}></i>
            <h3>{t('technical')}</h3>
            <p>{t('techLorem')}</p>
          </div>
          <div className="col-md-4">
            <i className={`${Styles.icona} fa-solid fa-vial-virus py-5`}></i>
            <h3>{t('technical')}</h3>
            <p>{t('techLorem')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
