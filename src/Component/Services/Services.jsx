import React, { useEffect, useState } from 'react';
import Styles from './Services.module.css'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackages, fetchServices, searchServices } from '../../features/servicesSlice';
import { API } from '../../features/globals';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Services = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);  
  const totalPages = useSelector((state) => state.services.totalPages);  
  const currentPage = useSelector((state) => state.services.currentPage);  
  const search_results = useSelector((state) => state.services.search_results);  
  const search_totalPages = useSelector((state) => state.services.search_totalPages);  
  const search_currentPage = useSelector((state) => state.services.search_currentPage);  
  const packages = useSelector((state) => state.services.packages);  
  const packages_totalPages = useSelector((state) => state.services.packages_totalPages);  
  const packages_currentPage = useSelector((state) => state.services.packages_currentPage);  
  const [search_text, setSearch_text] = useState("")

  const handleChange = (value) => {
    dispatch(fetchServices({page: value, per_page: 20}));
  };

  const handleChangePackages = (value) => {
    dispatch(fetchPackages({packages_page: value, packages_per_page: 20}));
  };

  const handleChangeSearch = (value) => {
    dispatch(searchServices({ query: search_text, page: value, per_page: 20}));
  };
  const handleChangeSearchText = (e) => {
    setSearch_text(e.target.value)
    handleChangeSearch(1)
  };

  useEffect(() => {
    dispatch(fetchServices({page: 1, per_page: 20}));
    dispatch(fetchPackages({packages_page: 1, packages_per_page: 20}));
    console.log(packages);
  }, [dispatch]);
  

  return (
    <div dir={i18n.dir(i18n.language)}>

    <div className=''>
     <h1 className={`${Styles.main} mt-4`}>{t('tahalilAndBaqat')}</h1>

    </div>

    <div className='row mt-5 mx-5'>

        <div className="col-md-8">


          <input type="text" placeholder={t('ElbahsAnTahalih')} value={search_text} onChange={handleChangeSearchText} className='w-100 form-control py-3 rounded rounded-4 my-2' />

      </div>

      <div className="col-md-4">


        <input type="text" placeholder={t('UploadWasfa')} className='w-100 form-control py-3 rounded rounded-4 my-2' />

      </div>

    </div>

    <h1 className={Styles.Baqat}>{t('Baqat')}</h1>

    <div className="row mx-5 mt-5 mb-3 ">
    {
          packages && packages.length > 0 && (
            packages.map(service => (
              <div className="col-lg-3 col-md-6 pb-5">
                  <div className={`${Styles.servicesCards}`}>
                  <img height={200} className={Styles.blooadPhoto} src={API + service.main_image} alt="" />

                    <p>{ currentLanguage == "ar" ? service.name_ar : service.name }</p>
                    <p>{currentLanguage == "ar" ? (service.description_ar.length > 60 ? service.description_ar.substring(0, 60) + "..." : service.description_ar) : (service.description.length > 60 ? service.description.substring(0, 60) + "..." : service.description)}</p>
                    <p>{service.price + " " + t("EGP")}</p>


                    <button className={`${Styles.buttonCart} my-3`}>{t('addToCar')}</button>

                  </div>

              </div>
            ))
          )
        }

    </div>
    <div style={{margin: "auto", display: "block", marginBottom: 16, width: "max-content"}}>
          {packages_totalPages  && packages_totalPages > 1 ? (
            <Stack spacing={2} dir="ltr" style={{width: "max-content"}}>
              <Pagination count={packages_totalPages} page={packages_currentPage} onChange={(e, value) => handleChangePackages(value)}  variant="outlined" color='primary' shape="rounded" />
            </Stack>
          ) : (
            <></>
          )}
      </div>


    <h1 className="mx-5">{t('tahalilhLists')}</h1>

      {
        !search_text && (
          <div className="pb-5">
            <div className="row mx-5 my-5 pb-5">
              {
                services && services.length > 0 && (
                  services.map(service => (
                    <div className="col-lg-3 col-md-6 pb-5">
                        <div className={`${Styles.servicesCards}`}>
                        <img height={200} className={Styles.blooadPhoto} src={API + service.main_image} alt="" />

                          <p>{ currentLanguage == "ar" ? service.name_ar : service.name }</p>
                          <p>{currentLanguage == "ar" ? (service.description_ar.length > 60 ? service.description_ar.substring(0, 60) + "..." : service.description_ar) : (service.description.length > 60 ? service.description.substring(0, 60) + "..." : service.description)}</p>
                          <p>{service.price + " " + t("EGP")}</p>


                          <button className={`${Styles.buttonCart} my-3`}>{t('addToCar')}</button>

                        </div>

                    </div>
                  ))
                )
              }

            </div>

            <div style={{margin: "auto", display: "block", marginBottom: 16, width: "max-content"}}>
                {totalPages  && totalPages > 1 ? (
                  <Stack spacing={2} dir="ltr" style={{width: "max-content"}}>
                    <Pagination count={totalPages} page={currentPage} onChange={(e, value) => handleChange(value)}  variant="outlined" color='primary' shape="rounded" />
                  </Stack>
                ) : (
                  <></>
                )}
            </div>

          </div>
        )
      }

      {
        search_text && (
          <div className="pb-5">
            <div className="row mx-5 my-5 pb-5">
              {
                search_results && search_results.length > 0 && (
                  search_results.map(service => (
                    <div className="col-lg-3 col-md-6 pb-5">
                        <div className={`${Styles.servicesCards}`}>
                        <img height={200} className={Styles.blooadPhoto} src={API + service.main_image} alt="" />

                          <p>{ currentLanguage == "ar" ? service.name_ar : service.name }</p>
                          <p>{currentLanguage == "ar" ? (service.description_ar.length > 60 ? service.description_ar.substring(0, 60) + "..." : service.description_ar) : (service.description.length > 60 ? service.description.substring(0, 60) + "..." : service.description)}</p>
                          <p>{service.price + " " + t("EGP")}</p>


                          <button className={`${Styles.buttonCart} my-3`}>{t('addToCar')}</button>

                        </div>

                    </div>
                  ))
                )
              }

            </div>

            <div style={{margin: "auto", display: "block", marginBottom: 16, width: "max-content"}}>
                {search_totalPages  && search_totalPages > 1 ? (
                  <Stack spacing={2} dir="ltr" style={{width: "max-content"}}>
                    <Pagination count={search_totalPages} page={search_currentPage} onChange={(e, value) => handleChangeSearch(value)}  variant="outlined" color='primary' shape="rounded" />
                  </Stack>
                ) : (
                  <></>
                )}
            </div>

          </div>
        )
      }



    
    </div>
  );
};

export default Services;
