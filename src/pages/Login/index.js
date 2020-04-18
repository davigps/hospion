import React from 'react';
import i18n from 'i18next';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import avatar from '../../assets/avatar.png';
import api from '../../services/api';

import { login } from '../../services/auth';

import './styles.css';

function Login() {
  const history = useHistory();

  const handleSocialMedia = async (media, accessToken, name, email, picture) => {
    const response = await api({
      method: 'POST',
      url: `/auth?by=${media}`,
      headers: {
        accessToken,
      },
      data: {
        email,
      },
    });

    let { user } = response.data;
    user = {
      picture,
      ...user,
    };
    const { token } = response.data;

    login(token, user);

    history.push('/');
  };

  const handleFacebook = ({
    accessToken, name, email, picture,
  }) => {
    console.log(accessToken);
    handleSocialMedia('facebook', accessToken, name, email, picture.data.url);
  };

  const handleGoogle = (response) => {
    console.log(response);
    const { accessToken, Pt } = response;
    const { Ad: name, yu: email, fL: picture } = Pt;

    handleSocialMedia('google', accessToken, name, email, picture);
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <img src={avatar} alt="Avatar" />
        <h1>{i18n.t('loginTitle')}</h1>
        <button
          type="button"
          className="login-about"
          onClick={() => history.push('/about')}
        >
          {i18n.t('loginAboutButton')}
        </button>
      </div>

      <div className="social-area">
        <div className="login-info">
          <h2>{i18n.t('loginFormTitle')}</h2>
          <p>{i18n.t('loginFormDesc')}</p>
        </div>
        <div>
          <FacebookLogin
            appId="993558481041548"
            fields="name,email,picture"
            callback={handleFacebook}
            language="pt_BR"
            textButton={i18n.t('loginFacebook')}
            icon="fa-facebook-square"
            cssClass="social-button facebook"
          />
          <GoogleLogin
            clientId="634100878772-u3qlrt4jbmn2c8av80i8rsrvr08rt7e5.apps.googleusercontent.com"
            buttonText={i18n.t('loginGoogle')}
            onSuccess={handleGoogle}
            onFailure={handleGoogle}
            autoLoad={false}
            render={
              (renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="social-button google"
                >
                  <i className="fa fa-google" />
                  {i18n.t('loginGoogle')}
                </button>
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
