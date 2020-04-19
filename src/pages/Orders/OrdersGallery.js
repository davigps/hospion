import React, { useState, useEffect } from 'react';
import {
  Card, Button, Modal, Icon,
} from 'react-materialize';

import api from '../../services/api';

import './styles.css';

function OrderCard({ order }) {
  const [hospital, setHospital] = useState('');
  const [modal, setModal] = useState(false);

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
          to={`/hospital?id=${order.hospitalID}`}
          className="white-text green darken-4"
        >
          Saber mais
        </Button>,
      ]}
      className="green order-card hoverable center"
      textClassName="white-text"
      title={order.titulo}
      key={order.id}
    >
      <p>
        {order.descricao}
        <br />
        <br />
        <strong>
          Instituição:
          {' '}
          {hospital.nome}
        </strong>
      </p>

      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green" onClick={() => setModal(false)}>Fechar</Button>,
        ]}
        fixedFooter
        header="Doação aprovada!"
        className="center"
        open={modal}
      >
        <Icon large>check</Icon>
        <p>
          A sua solicitação de doação foi aprovada, nós iremos informar a
          a instituição escolhida!
          {' '}
          <br />
          {' '}
          Em breve, entraremos em contato com você via
          e-mail.
        </p>
      </Modal>
    </Card>
  );
}

function OrdersGallery() {
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
    <>
      {
      orders.length === 0
        ? (
          <div className="order-not-found">
            <i className="fa fa-exclamation-triangle" />
            <p>Procurando Pedidos...</p>
          </div>
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
