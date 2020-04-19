import React from 'react';

import nurse from '../../assets/nurse.jpg';

import './styles.css';

import OrdersGallery from './OrdersGallery';

function Orders() {
  return (
    <div>
      <div className="orders-title">
        <img src={nurse} alt="Nurse" className="responsive-img" />
        <div>
          <h3>Pedidos Pendentes</h3>
        </div>
      </div>

      <OrdersGallery />
    </div>
  );
}

export default Orders;
