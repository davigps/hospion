import React, { Component } from 'react';
import {
  Container, Icon, Divider, ProgressBar,
  Row, Col, Collection, CollectionItem,
  Parallax, Card, Button,
} from 'react-materialize';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';
import { isAuthenticated } from '../../services/auth';

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
  }

  componentDidMount() {
    this.getInformation();
    this.getOrder();
  }

  render() {
    const {
      name, city, uf, street, orders, orderTitle, orderDesc,
    } = this.state;

    return (
      isAuthenticated()
        ? (
          name
            ? (
              <Container>
                <Parallax
                  image={<img alt="hospital" className="background-image" src={hospitalImg} />}
                  options={{
                    responsiveThreshold: 600,
                  }}
                >
                  <div className="hospion-home-slogan-container">
                    <div className="hospion-home-slogan">
                      <Icon large>business</Icon>
                      <h1>{name}</h1>
                    </div>
                  </div>
                </Parallax>

                <Row>
                  <Col
                    m={6}
                    s={12}
                  >
                    <h2>Endereço</h2>
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
                  </Col>
                </Row>

                <Divider />

                <div className="actual-order">
                  <h3>Pedido Selecionado</h3>
                  <Card title={orderTitle}>
                    {orderDesc}
                    <Button className="green darken-4">
                      Doar
                    </Button>
                  </Card>
                </div>

              </Container>
            )
            : <ProgressBar />
        )
        : (<Redirect to="/login" />)
    );
  }
}

export default Hospital;
