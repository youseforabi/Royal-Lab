import React from 'react';
import Styles from './Cart.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('shoppingCart')}</h1>

      <div className={`container ${Styles.first} mx-auto`}>

          <div className='row'>
              <div className='col-lg-4 col-md-5'>
                <img className='w-100' src="https://almokhtabar.com/wp-content/themes/hello-elementor/assets/images/cart-side-banner.jpg" alt="withUs" />
              </div>


              <div className={`${Styles.all} col-lg-8 col-md-7 d-flex align-items-start justify-content-center`}>
                <Link to={'/royal'} className={Styles.addBtn}>{t('addMoreBaqat')}</Link>

                <p className={`${Styles.cartPara} d-flex align-items-center justify-content-center py-2 px-2`}>{t('theAll')}</p>

                <button className={` ${Styles.payBtn}`}>{t('payBtn')}</button>



              </div>



          </div>

      </div>


      

    </div>
  );
};

export default Cart;
