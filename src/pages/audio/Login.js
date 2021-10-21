import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';
import React, { useState } from 'react';
import { Row, Col, CardBody, Card, Alert, Container, Button } from 'reactstrap';
// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import './Login.scss';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import Audio from './Audio';

const Login = props => {
  // handleValidSubmit
  const [recordState, setRecordState] = useState(null);
  const [status, setStatus] = useState(false);
  const [linkAudio, setLinkAudio] = useState(null);

  const start = () => {
    setStatus(true);
    setRecordState(RecordState.START);
  };

  const stop = () => {
    setStatus(false);
    setRecordState(RecordState.STOP);
  };

  const onStop = audioData => {
    console.log('audioData', audioData);
    setLinkAudio(audioData.url)
  };

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse

  return (
    <React.Fragment>
      <MetaTags>
        <title>AUDIO | FDM</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5 login-page">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <CardBody className="pt-0">
                  <div className="d-flex header">
                    <div className="item">
                      <div>Mua/Bán</div>
                      <div style={{ marginTop: 5 }}>Mua</div>
                    </div>
                    <div className="item">
                      <div>Mã cổ phiếu</div>
                      <div style={{ marginTop: 5 }}>FPT</div>
                    </div>
                    <div className="item">
                      <div>Giá</div>
                      <div style={{ marginTop: 5 }}>10000đ</div>
                    </div>
                    <div className="item">
                      <div>Khối lượng</div>
                      <div style={{ marginTop: 5 }}>10</div>
                    </div>
                  </div>
                  <div className="text-value">
                    <textarea value="Tôi muốn mua cổ phiếu fpt giá 10000đ"></textarea>
                  </div>
                  <AudioReactRecorder
                    canvasWidth={411}
                    canvasHeight={200}
                    backgroundColor="#f8f8fb"
                    state={recordState}
                    onStop={onStop}
                  />
                  <Audio linkAudio={linkAudio} />
                  <div className="action">
                    <Button color="info" className="btn-action" onClick={!status ? start : stop}>
                      {!status ? 'Start Record' : 'Stop Record'}
                    </Button>
                    <div className="text-note">Mời bạn bấm nút để đặt lệnh giọng nói</div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { error } = state.Login;
  return { error };
};

export default withRouter(connect(mapStateToProps, null)(Login));

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func
};
