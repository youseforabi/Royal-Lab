import React, { useEffect } from 'react';
import Styles from './Services.module.css'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../features/servicesSlice';
import { API } from '../../features/globals';

const Services = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);  

  useEffect(() => {
    dispatch(fetchServices(1));
  }, [dispatch]);
  

  return (
    <div dir={i18n.dir(i18n.language)}>

    <div className=''>
     <h1 className={`${Styles.main} mt-4`}>{t('tahalilAndBaqat')}</h1>

    </div>

    <div className='row mt-5 mx-5'>

        <div className="col-md-8">


          <input type="text" placeholder={t('ElbahsAnTahalih')} className='w-100 form-control py-3 rounded rounded-4 my-2' />

      </div>

      <div className="col-md-4">


        <input type="text" placeholder={t('UploadWasfa')} className='w-100 form-control py-3 rounded rounded-4 my-2' />

      </div>

    </div>

    <h1 className={Styles.Baqat}>{t('Baqat')}</h1>

    <div className="row mx-5 mt-5 mb-3 ">



        <div className="col-lg-3 col-md-6  pb-5">

            <div className={`${Styles.servicesCards}`}>
              <img height={200} className={Styles.blooadPhoto} src="https://s3-alpha-sig.figma.com/img/13ef/632d/9ffe01ddb16bdcef28aef4d6f9bdb403?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoY9uhWrgQE6kCBCAOdD-3vTpmfwhyPuMBrT4kaHXDPXVxmwDOFQZDkMNQgebL6Gg7m7Y~EXjeft1fN9RfXSFhaQjxvXEchc6pOaYxqCNTVsSqu2OOhvIZhe6VNWfv-mdLnyXqc2aDNFDvRwEct70tD62iKh-35MgKDnsiRSSJqXQVz~s1fWkSYUOJ5IysovjxmbZhnyIWna9I~W1Gltwnclkxc-O3icdQkWE7PH8dLM0AhqxZgWDmppF2laQv6JgV-FYWk8LwwmhM5GcnXDtBb26PYY4zteovaTAHpR7oSK5jdc4bhlwv-t-RuCca2oFWyIJeXzL-miNDgGMc4Rwg__" alt="" />

              <p>{t('Enzem')}</p>
              <p>{t('heartEnzem')}</p>
              <p>{t('price')}</p>


              <button className={`${Styles.buttonCart} my-3`}>{t('addToCar')}</button>

            </div>

        </div>

        <div className="col-lg-3 col-md-6  pb-5">

              <div className={`${Styles.servicesCards}`}>
              <img  className={Styles.blooadPhoto} src="https://s3-alpha-sig.figma.com/img/13ef/632d/9ffe01ddb16bdcef28aef4d6f9bdb403?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoY9uhWrgQE6kCBCAOdD-3vTpmfwhyPuMBrT4kaHXDPXVxmwDOFQZDkMNQgebL6Gg7m7Y~EXjeft1fN9RfXSFhaQjxvXEchc6pOaYxqCNTVsSqu2OOhvIZhe6VNWfv-mdLnyXqc2aDNFDvRwEct70tD62iKh-35MgKDnsiRSSJqXQVz~s1fWkSYUOJ5IysovjxmbZhnyIWna9I~W1Gltwnclkxc-O3icdQkWE7PH8dLM0AhqxZgWDmppF2laQv6JgV-FYWk8LwwmhM5GcnXDtBb26PYY4zteovaTAHpR7oSK5jdc4bhlwv-t-RuCca2oFWyIJeXzL-miNDgGMc4Rwg__" alt="" />

                <p>{t('Enzem')}</p>
                <p>{t('heartEnzem')}</p>
                <p>{t('price')}</p>


                <button className={`${Styles.buttonCart} my-3`}>{t('addToCar')}</button>

              </div>

        </div>

        <div className="col-lg-3 col-md-6  pb-5">

          <div className={`${Styles.servicesCards}`}>
          <img height={200} className={Styles.blooadPhoto} src="https://s3-alpha-sig.figma.com/img/13ef/632d/9ffe01ddb16bdcef28aef4d6f9bdb403?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoY9uhWrgQE6kCBCAOdD-3vTpmfwhyPuMBrT4kaHXDPXVxmwDOFQZDkMNQgebL6Gg7m7Y~EXjeft1fN9RfXSFhaQjxvXEchc6pOaYxqCNTVsSqu2OOhvIZhe6VNWfv-mdLnyXqc2aDNFDvRwEct70tD62iKh-35MgKDnsiRSSJqXQVz~s1fWkSYUOJ5IysovjxmbZhnyIWna9I~W1Gltwnclkxc-O3icdQkWE7PH8dLM0AhqxZgWDmppF2laQv6JgV-FYWk8LwwmhM5GcnXDtBb26PYY4zteovaTAHpR7oSK5jdc4bhlwv-t-RuCca2oFWyIJeXzL-miNDgGMc4Rwg__" alt="" />

            <p>{t('Enzem')}</p>
            <p>{t('heartEnzem')}</p>
            <p>{t('price')}</p>


            <button className={`${Styles.buttonCart} my-3`}>{t('addToCar')}</button>

          </div>

        </div>
        
        <div className="col-lg-3 col-md-6  pb-5">

          <div className={`${Styles.servicesCards}`}>
          <img height={200} className={Styles.blooadPhoto} src="https://s3-alpha-sig.figma.com/img/13ef/632d/9ffe01ddb16bdcef28aef4d6f9bdb403?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoY9uhWrgQE6kCBCAOdD-3vTpmfwhyPuMBrT4kaHXDPXVxmwDOFQZDkMNQgebL6Gg7m7Y~EXjeft1fN9RfXSFhaQjxvXEchc6pOaYxqCNTVsSqu2OOhvIZhe6VNWfv-mdLnyXqc2aDNFDvRwEct70tD62iKh-35MgKDnsiRSSJqXQVz~s1fWkSYUOJ5IysovjxmbZhnyIWna9I~W1Gltwnclkxc-O3icdQkWE7PH8dLM0AhqxZgWDmppF2laQv6JgV-FYWk8LwwmhM5GcnXDtBb26PYY4zteovaTAHpR7oSK5jdc4bhlwv-t-RuCca2oFWyIJeXzL-miNDgGMc4Rwg__" alt="" />

            <p>{t('Enzem')}</p>
            <p>{t('heartEnzem')}</p>
            <p>{t('price')}</p>


            <button className={`${Styles.buttonCart} my-3`}>{t('addToCar')}</button>

          </div>

        </div>






    </div>


    <h1 className="mx-5">{t('tahalilhLists')}</h1>

    <div className="pb-5">
      <div className="row mx-5 my-5 pb-5">
        {
          services && services.length > 0 && (
            services.map(service => (
              <div className="col-lg-3 col-md-6 pb-5">
                  <div className={`${Styles.servicesCards}`}>
                  <img height={200} className={Styles.blooadPhoto} src={API + service.main_image} alt="" />

                    <p>{ service.name }</p>
                    <p>{service.description.length > 60 ? service.description.substring(0, 60) + "..." : service.description}</p>
                    <p>{service.price}</p>


                    <button className={`${Styles.buttonCart} my-3`}>{t('addToCar')}</button>

                  </div>

              </div>
            ))
          )
        }

      </div>

     
    </div>



    
    </div>
  );
};

export default Services;
