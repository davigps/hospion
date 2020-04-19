import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import nurse from '../../assets/nurse.jpg';

import './styles.css';

import OrdersGallery from './OrdersGallery';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api({
        method: 'GET',
        url: '/getAllOrders',
      });

      setOrders(response.data);
    })();

    return () => setOrders([]);
  }, []);

  return (
    <div>
      <div className="orders-title">
        <img src={nurse} alt="Nurse" className="responsive-img" />
        <div>
          <h3>Pedidos Pendentes</h3>
        </div>
      </div>

      <OrdersGallery orders={orders} />
    </div>
  );
}

export default Orders;
