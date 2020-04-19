import React, { Component } from 'react';
import {
  Icon, Divider, ProgressBar,
  Collection, CollectionItem,
  Parallax, Card, Button,
} from 'react-materialize';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';
import { isAuthenticated } from '../../services/auth';

import OrdersGallery from '../Orders/OrdersGallery';

import hospitalImg from '../../assets/hospital.jpg';
import './styles.css';

class Hospital extends Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    const paramsString = location.search;
    const params = new URLSearchParams(paramsString);
    const hospitalId = params.get('id');
    const orderId = params.get('orderId');

    this.state = {
      name: '',
      city: '',
      uf: '',
      street: '',
      orders: [],
      orderItens: [],
      orderTitle: '',
      orderDesc: '',
    };

    this.getInformation = async () => {
      const response = await api({
        method: 'GET',
        url: `/hospital/${hospitalId}`,
      });

      const hospital = response.data;
      const { endereco, nome, pedidos } = hospital;
      const { cidade, rua, estado } = endereco;

      this.setState({
        name: nome,
        city: cidade,
        uf: estado,
        street: rua,
        orders: pedidos,
      });
    };

    this.getOrder = async () => {
      const response = await api({
        method: 'GET',
        url: `/getOrder/${orderId}`,
      });

      const { descricao, titulo } = response.data;

      this.setState({
        orderTitle: titulo,
        orderDesc: descricao,
      });
    };

    this.getOrders = async () => {
      const response = await api({
        method: 'GET',
        url: '/getAllOrders/',
      });
      const allOrders = response.data;

      const { orders, orderItens } = this.state;

      for (let i = 0; i < orders.length; i++) {
        const id = orders[i];
        allOrders.map((item) => {
          if (item.id === id) orderItens.push(item);
          return item;
        });
      }
      this.setState({ orderItens });
    };
  }

  componentDidMount() {
    this.getInformation();
    this.getOrder();
    this.getOrders();
  }

  render() {
    const {
      name, city, uf, street, orderItens, orderTitle, orderDesc,
    } = this.state;

    return (
      isAuthenticated()
        ? (
          name
            ? (
              <div>
                <Parallax
                  image={<img alt="hospital" className="background-image" src={hospitalImg} />}
                  options={{
                    responsiveThreshold: 600,
                  }}
                >
                  <div className="hospion-home-slogan-container">
                    <div className="hospion-home-slogan">
                      <Icon large>business</Icon>
                      <p>{name}</p>
                    </div>
                  </div>
                </Parallax>

                <div className="actual-order">
                  <h3>Essa foi a sua ajuda selecionada.</h3>
                  <Card title={orderTitle}>
                    {orderDesc}
                    <Button className="green darken-4" onClick={() => window.open('https://api.whatsapp.com/send?phone=5583986665607')}>
                      Doar
                    </Button>
                  </Card>
                </div>

                <Divider />

                {
                  orderItens.length > 1
                    ? (
                      <section className="others-background">
                        <div className="actual-order">
                          <h3>
                            Todos os pedidos de
                            {' '}
                            {name}
                          </h3>
                          <OrdersGallery orders={orderItens} />
                        </div>
                      </section>
                    )
                    : ''
                }

                <section className="adress-background">

                  <div className="adress">
                    <div className="adress-title">
                      <Icon large>map</Icon>
                      <h2>Onde os encontrar?</h2>
                    </div>
                    <Collection>
                      <CollectionItem>
                        Estado:
                        {' '}
                        {uf}
                      </CollectionItem>
                      <CollectionItem>
                        Cidade:
                        {' '}
                        {city}
                      </CollectionItem>
                      <CollectionItem>
                        Rua:
                        {' '}
                        {street}
                      </CollectionItem>
                    </Collection>
                  </div>
                </section>


                <Divider />

                <div className="other-orders" />

              </div>
            )
            : <ProgressBar style={{ margin: 'auto 0' }} />
        )
        : (<Redirect to="/login" />)
    );
  }
}

export default Hospital;
