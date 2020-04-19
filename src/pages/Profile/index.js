import React, { useState, useEffect } from 'react';
import {
  Container, Divider, Collapsible, CollapsibleItem,
  Icon, Button, TextInput, Modal,
} from 'react-materialize';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { logout, getUser, getToken } from '../../services/auth';

import OrdersGallery from '../Orders/OrdersGallery';

import avatar from '../../assets/avatar.png';
import './styles.css';

function Profile() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [modal, setModal] = useState(false);
  const [orders, setOrders] = useState([]);
  const user = getUser();

  const userInfos = [
    { header: 'Seu nome.', icon: 'person', content: user.name },
    { header: 'O Nome.', icon: 'business', content: user.namePj },
    { header: 'Seu e-mail para contato.', icon: 'email', content: user.email },
  ];

  const history = useHistory();

  const handleOrder = async () => {
    await api({
      method: 'POST',
      url: '/addOrder/',
      headers: {
        authorization: getToken(),
      },
      data: {
        titulo: title,
        descricao: desc,
      },
    });

    setModal(true);
  };

  useEffect(() => {
    (async () => {
      let response = await api({
        method: 'GET',
        url: '/getAllHospital',
      });
      const hospitals = response.data;
      let hospitalId;
      for (let i = 0; i < hospitals.length; i++) {
        if (user.namePj === hospitals[i].nome) { hospitalId = hospitals[i].id; }
      }

      response = await api({
        method: 'GET',
        url: `/hospital/${hospitalId}`,
      });

      const { pedidos } = response.data;

      response = await api({
        method: 'GET',
        url: '/getAllOrders/',
      });
      const allOrders = response.data;

      const orderItens = [];
      for (let i = 0; i < pedidos.length; i++) {
        const id = pedidos[i];
        allOrders.map((item) => {
          if (item.id === id) orderItens.push(item);
          return item;
        });
      }
      setOrders(orderItens);
    })();
  }, []);

  return (
    <Container className="center profile-container">
      <div className="profile-section">

        <div className="profile-avatar">
          {
            user.type === 'pf'
              ? (<img className="circle responsive-img" src={getUser().picture} alt="Profile Avatar" />)
              : (<img className="circle responsive-img" src={avatar} alt="Profile Avatar" />)
          }
          <h3>Informações Pessoais</h3>
        </div>
        <Divider />

        <Collapsible
          accordion
          popout
          className="profile-infos"
        >
          {
            userInfos.map((info) => (
              info.content
                ? (
                  <CollapsibleItem
                    expanded={false}
                    header={info.header}
                    icon={<Icon>{info.icon}</Icon>}
                    node="div"
                    key={info.icon}
                  >
                    {info.content}
                  </CollapsibleItem>
                )
                : ''
            ))
          }
        </Collapsible>
      </div>

      {
        user.type === 'hp'
          ? (
            <>

              <Container className="signup-pj-form profile-section">
                <div className="orders-form-title">
                  <h1 style={{ fontSize: '340%' }}>Para Organizações</h1>
                </div>
                <h3 style={{ color: '#006633', fontWeight: 'bolder' }}>Faça um novo pedido por aqui.</h3>
                <TextInput
                  id="ip3"
                  icon="title"
                  className="signup-input"
                  onChange={(e) => setTitle(e.target.value)}
                  label="Título do seu pedido"
                />
                <TextInput
                  id="ip4"
                  icon="description"
                  className="signup-input green-text"
                  onChange={(e) => setDesc(e.target.value)}
                  label="Descrição da problemática"
                />
                <div className="row pj-buttons">
                  <Button className="green darken-3" onClick={handleOrder}>Adicionar novo pedido</Button>
                </div>
              </Container>

              <section className="others-background profile-section">
                <div className="actual-order">
                  <h3>
                    Todos os seus pedidos
                  </h3>
                  <OrdersGallery orders={orders} />
                </div>
              </section>

              <Button
                onClick={() => {
                  window.open('https://api.whatsapp.com/send?phone=5583986665607');
                }}
                className="green darken-4 profile-logout"
              >
                Confirmar recebimento de doações

              </Button>

              <Modal
                actions={[
                  <Button flat modal="close" node="button" waves="green">Ok</Button>,
                ]}
                fixedFooter
                header="Pedido Adicionado!"
                id="Modal-0"
                open={modal}
              >
                <p>
                  Seu pedido foi Adicionado à plataforma.
                </p>
              </Modal>
            </>
          )
          : ''
      }

      <Button
        onClick={() => {
          logout();
          localStorage.clear();
          history.push('/');
        }}
        className="red profile-logout"
      >
        Encerrar Sessão

      </Button>
    </Container>
  );
}

export default Profile;
