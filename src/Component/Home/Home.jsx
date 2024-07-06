import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Styles from './Home.module.css';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Carousel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API } from '../../features/globals';
import { api } from '../../API';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from "swiper/modules";

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

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const [value, setValue] = React.useState('1');
  const [msg, setMsg] = React.useState('');
  const [comments, setComments] = React.useState();
  const [loader, setLoader] = React.useState(false);
  const [showMore, setShowMore] = React.useState({});

  const handleShowMore = (index) => {
    setShowMore(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeMsg = (event) => {
    setMsg(event.target.value);
  };

  const submitComment = async () => {
    setLoader(true);
    if (!msg) {
      showErrorMessage(t("commentCantBeEmpty"));
      setLoader(false);
    }  else {
      try {
        const formData = new FormData();
        formData.append('comment', msg);

        const res = await api.post(API + '/api/comment/put', formData,);

        setLoader(false);
        if (res.data.status === true) {
          showSuccessMsg(t("commentRecievedSuccessfuly"));
          setMsg('');
        }
      } catch (err) {
        setLoader(false);
        console.error('Error submitting form:', err);
        showErrorMessage(t("submissionFailed"));
      }
    }
  };

  useEffect(() => {
    const getComments = async () => {
        try {
          const res = await axios.get(API + '/api/comments/get');
          setComments(res.data)
        } catch (err) {
          setLoader(false);
          console.error('Error submitting form:', err);
        }
    };
    getComments();

  }, [])

  return (
    <div dir={i18n.dir(i18n.language)}>
      <div className='position-relative'>
        <div className={Styles.layer}></div>


        
        <Carousel 
        controls={false}
        interval={1500}
        > 
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/premium-photo/medicine-medical-hand-research-science-test-biotechnology-tube-laboratory-experiment-generative-ai_163305-233875.jpg?w=996"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/premium-photo/cybersecurity-privacy-concepts-protect-data-lock-icon-internet-network-security-technology-businessman-protecting-personal-data-smart-phone-with-virtual-screen-interfaces_265022-3740.jpg?w=996"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/premium-photo/science-chemistry-biology-people-concept-close-up-scientist-hand-with-microscope-green-leaf-making-research-clinical-laboratory_380164-96024.jpg?w=996"
                  alt="Slide 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/premium-photo/science-medicine-research-medical-laboratory-test-hand-tube-biotechnology-experiment-generative-ai_163305-224853.jpg?w=996"
                  alt="Slide 4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/premium-photo/science-biotechnology-hand-test-medicine-medical-experiment-laboratory-research-tube-generative-ai_163305-233877.jpg?w=996"
                  alt="Slide 5"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/premium-photo/science-biotechnology-hand-test-medicine-medical-experiment-laboratory-research-tube-generative-ai_163305-233877.jpg?w=996"
                  alt="Slide 6"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/premium-photo/science-biotechnology-hand-test-medicine-medical-experiment-laboratory-research-tube-generative-ai_163305-233877.jpg?w=996"
                  alt="Slide 7"
                />
              </Carousel.Item>


              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/premium-photo/science-biotechnology-hand-test-medicine-medical-experiment-laboratory-research-tube-generative-ai_163305-233877.jpg?w=996"
                  alt="Slide 8"
                />
              </Carousel.Item>


                <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/premium-photo/science-biotechnology-hand-test-medicine-medical-experiment-laboratory-research-tube-generative-ai_163305-233877.jpg?w=996"
                  alt="Slide 9"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/free-photo/doctor-performing-medical-research-lab_23-2149335672.jpg?t=st=1720266872~exp=1720270472~hmac=e63314f6f7c3b78cf3b99e601db9085b039032d53f1e529d9f1661ef0e96fadc&w=996"
                  alt="Slide 10"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/free-photo/hands-with-protective-glove-holding-covid-vaccine_23-2148958370.jpg?t=st=1720266726~exp=1720270326~hmac=b06545ed6fe8da494756d71b999b1ccbe6cc9e45b8ba3d7ba9d590cf4b29189d&w=740"
                  alt="Slide 11"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-covid-test_23-2148958350.jpg?t=st=1720266956~exp=1720270556~hmac=5718e198cdeccc29663c7c552d317cb9688ddfb6c5268874533488012f41c147&w=1380"
                  alt="Slide 12"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/free-photo/woman-working-laborator_23-2148824177.jpg?t=st=1720266960~exp=1720270560~hmac=8b2d26f732cf2f494d632a4332699d520e6645b504365df9f7479c7dabd4a911&w=996"
                  alt="Slide 13"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  style={{objectFit: 'cover', minHeight: "calc(100vh - 80px)"}}
                  src="https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958362.jpg?t=st=1720266963~exp=1720270563~hmac=76fd875319446239c6f10166b2aa7a9f4bc33e93188d7d21ae392d6892ecc320&w=360"
                  alt="Slide 14"
                />
              </Carousel.Item>
            </Carousel>
        <h1 className={Styles.welcome}>{t('welcome')}</h1>
        <h1 className={Styles.welcome2}>{t('welcome2')}</h1>
        <Link className={`${Styles.buttonHome}`} to="/service">{t('buttonHome')}</Link>

        <div>
          {/* <p className={Styles.contactHome} style={{ [isRTL ? 'left' : 'right']: '220px', [isRTL ? 'right' : 'left']: 'auto' }}>{t('Contact Us')}</p> */}
          {/* <div className={Styles.line} style={{ [isRTL ? 'left' : 'right']: '220px', [isRTL ? 'right' : 'left']: 'auto' }}></div> */}

          <div className={Styles.icons} style={{ [isRTL ? 'left' : 'right']: '200px', [isRTL ? 'right' : 'left']: 'auto' }}>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className={Styles.fixedSocial}>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-solid fa-phone"></i>
          </div>
        </div>
      </div>

    
    <div className="d-flex justify-content-center">
        <ul className="nav nav-tabs  mt-4" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              {t('elafrad')}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              {t('companies')}
            </button>
          </li>
        </ul>
      </div>
      <div className="thewholeCards">
      <div className="tab-content my-4" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className=" text-decoration-none text-black" to={"./recipeMedical"}>
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-capsules mb-3 fs-2"></i>
                <h5 className="mt-2 text-center">{t('recipeMedical')}</h5>
                </div>
                </Link>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className=" text-decoration-none text-black" to={'./medicalTests'}>

                <div className={Styles.cardHome}>
                <i className="fa-solid fa-droplet mb-3 fs-2"></i>
                <h5 className="mt-2 text-center">{t('bloodAnalysis')}</h5>
                </div>
                </Link>

              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className=" text-decoration-none text-black" to={'./homeVisit'}>
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-home mb-3 fs-2"></i>
                  <h5 className="mt-2 text-center">{t('homeVisit')}</h5>
                </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className=" text-decoration-none text-black" to={'/branches'}>
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-location-dot mb-3 fs-2"></i>
                <h5 className="mt-2 text-center">{t('Branches')}</h5>
                </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className=" text-decoration-none text-black" to={'./Insurances'}>

                <div className={Styles.cardHome}>
                <i className="fa-solid fa-scroll mb-3 fs-2"></i>
                <h5 className="mt-2 text-center">{t('Insurances')}</h5>
                </div>
                </Link>

              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className=" text-decoration-none text-black" to={'/doctor'}>
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-phone mb-3 fs-2"></i>
                <h5 className="mt-2 text-center">{t('consultation')}</h5>
                </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className=" text-decoration-none text-black" to={'/Vaccinations'}>

                <div className={Styles.cardHome}>
                <i className="fa-solid fa-syringe mb-3  fs-2"></i>
                <h5 className="mt-2 text-center">{t('Vaccinations')}</h5>
                </div>
                </Link>

              </div>
              
            </div>









           




          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <div className="container">


          <div className="row justify-content-center">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className="col-md-2 text-decoration-none text-black" to={'/foodAnalysis'}>

                <div className={Styles.cardHome}>
                <i className="fa-solid fa-apple-whole mb-3 fs-2"></i>
                <h3 className='mt-2 text-center'>{t('tahalilElgezaa')}</h3>
                  </div>
                </Link>  
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className="col-md-2 text-decoration-none text-black " to={'/waterAnalysis'}>

                <div className={Styles.cardHome}>
                <i className="fa-solid fa-hand-holding-medical fs-2 mb-3"></i>
                <h5 className="mt-2 text-center">{t('waterAnalysis')}</h5>
                </div>
                </Link>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className="col-md-2 text-decoration-none text-black" to={'/pharmaAnalysis'}>
                <div className={Styles.cardHome}>
                <VaccinesIcon className='fs-2 mb-3' />
                <h5 className="mt-2 text-center">{t('pharmaAnalysis')}</h5>
                </div>
                </Link>
              </div>
            </div>




          </div>
        </div>
      </div>

      </div>
      {
      (comments && comments.length > 0) && (

        <div className={Styles.clients}>
          <h2 className='py-4'>{t('araClients')}</h2>
          <div className="row">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            freeMode={true}
            className="mySwiper"
            modules={[Navigation, FreeMode]}>
              {
                  comments.map((comment, index) => (
                  <SwiperSlide className="col-lg-6 col-md-12 gy-3 mb-2 h-100" style={{  height: "calc(100% - 20px)",
                    boxSizing: "border-box"}}>
                    <div className={Styles.clientCard} style={{  height: "calc(100% - 16px)",
                    boxSizing: "border-box"}}>
                      <i className="fa-solid fa-user fs-1 px-3"></i>
                      <div className={Styles.clientOpinion}>
                        <p className={Styles.name}>{comment.name}</p>
                        <p>
                        {comment.comment.length > 200 && (!showMore[index]) 
                          ? comment.comment.slice(0, 200) + " ..." 
                          : comment.comment}
                        {(comment.comment.length > 200) && (
                          <button 
                            onClick={() => handleShowMore(index)} 
                            style={{ background: 'transparent', border: 'none', color: '#b39330', fontWeight: 600 }}
                          >
                            {showMore[index] ? t('showLess') : t('showMore')}
                          </button>
                        )}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  ))
              }
            </Swiper>
          </div>
        </div>
        )
      }
      
      <div className={`${Styles.comment_wrapper} ${Styles.clients}`}>
          <label htmlFor="totla">{t('leavuscomment')}</label>
          <textarea onChange={handleChangeMsg} value={msg} className='form-controle' placeholder={t("yourMsg")}></textarea>
          {loader ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <button onClick={submitComment}>{t('send')}</button>
        )}
      </div>

      <div className={Styles.tech}>
        <div className="row">
          <div className="col-md-4">
            <i className={`${Styles.icona} fa-solid fa-vial-virus py-5`}></i>
            <h3 className='pb-3'>{t('technical')}</h3>
            <p>{t('techLorem')}</p>
          </div>
          <div className="col-md-4">
            <i className={`${Styles.icona} fa-solid fa-vial-virus py-5`}></i>
            <h3 className='pb-3'>{t('technical2')}</h3>
            <p>{t('techLorem')}</p>
          </div>
          <div className="col-md-4">
            <i className={`${Styles.icona} fa-solid fa-vial-virus py-5`}></i>
            <h3 className='pb-3'>{t('technical3')}</h3>
            <p>{t('techLorem')}</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
