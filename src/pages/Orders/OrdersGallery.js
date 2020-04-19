import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, Button, ProgressBar,
} from 'react-materialize';

import api from '../../services/api';

import './styles.css';

function OrderCard({ order }) {
  const history = useHistory();

  const [hospital, setHospital] = useState('');

  useEffect(() => {
    (async () => {
      const response = await api({
        method: 'GET',
        url: `/hospital/${order.hospitalID}`,
      });

      setHospital(response.data);
    })();

    return () => setHospital('');
  }, [order.hospitalID]);

  return (
    <Card
      actions={[
        <Button
          key="1"
          onClick={() => history.push(`/hospital?id=${order.hospitalID}&orderId=${order.id}`)}
          className="white-text green darken-3"
        >
          Saber mais
        </Button>,
      ]}
      className="grey lighten-4 order-card hoverable center"
      textClassName="green-text text-darken-4"
      title={order.titulo}
      key={order.id}
    >
      <p>
        {order.descricao}
        <br />
        <br />
        <strong>
          {hospital.nome}
        </strong>
      </p>
    </Card>
  );
}

function OrdersGallery({ orders }) {
  return (
    <>
      {
      orders.length === 0
        ? (
          <>
            <ProgressBar />
            <div className="order-not-found">
              <i className="fa fa-exclamation-triangle" />
              <p>Procurando Pedidos...</p>
            </div>
          </>
        )
        : (
          <div className="orders-gallery">
            {
              orders.map((order) => <OrderCard order={order} key={order.id} />)
            }
          </div>
        )
    }
    </>
  );
}

export default OrdersGallery;
