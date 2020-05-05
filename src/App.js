import React, { Component } from 'react';
import MapContainer from './components/map/MapContainer';
import { Container, Row, Col, Button } from 'reactstrap';
import BangladeshInfo from './components/BangladeshInfo';
import WorldInfo from './components/WorldInfo';
import TopBar from './components/TopBar';
import DailyChart from './components/DailyChart';
import Districts from './components/Districts';
import Countries from './components/Countries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export class App extends Component {
  state = {
    all: [],
    getData: [],
    loading: false,
  };

  getAll = async () => {
    this.setState({ loading: true });

    const res = await axios.get('https://corona.lmao.ninja/v2/all');

    this.setState({ all: res.data, loading: false });
  };

  getBangladeshData = async () => {
    this.setState({ loading: true });

    const res = await axios.get(
      'http://127.0.0.1:8000/api/bangladesh/?format=json'
    );

    this.setState({
      getData: res.data,
      loading: false,
    });
  };

  async componentDidMount() {
    this.getAll();
    this.getBangladeshData();
  }

  render() {
    const { all, loading, getData } = this.state;

    return (
      <div>
        <TopBar />
        <Container fluid>
          <Row
            className=''
            style={{ marginLeft: '20px', marginRight: '20px', height: '660px' }}
          >
            <Col xs='3' style={{ height: '100%' }}>
              <BangladeshInfo getData={getData} loading={loading} />
            </Col>
            <Col xs='6'></Col>
            <Col xs='3'>
              <Districts />
            </Col>
          </Row>
          <MapContainer />
          <Row
            className=''
            style={{
              height: '',
              marginTop: '',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            <Col></Col>
            <Col sm='12' md={{ size: 9 }}>
              <DailyChart />
            </Col>
            <Col></Col>
          </Row>
          <div style={{ marginLeft: '200px' }}>
            <h4>
              <FontAwesomeIcon icon={faGlobe} /> সারাবিশ্বের কোভিড-১৯ আপডেট
            </h4>
          </div>
          <Row
            className=''
            style={{
              height: '',
              marginTop: '40px',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            <Col xs='3'>
              <WorldInfo all={all} loading={loading} />
            </Col>
            <Col xs='9'>
              <Countries />
            </Col>
          </Row>
          <hr />
          <Row style={{ height: '40px', textAlign: 'center' }}>
            <Col sm={3}></Col>
            <Col sm={6}>
              Developed by{' '}
              <a href='https://github.com/shahibuzzaman'> Shahibuzzaman</a>
            </Col>
            <Col sm={3}>
              <div>
                {/* <Button
                  outline
                  color='info'
                  size='sm'
                  onClick={() => {
                    let win = window.open('');
                    win.location.replace(
                      'https://github.com/shahibuzzaman/covid19-tracker-reactJS'
                    );
                  }}
                >
                  Fork on Github
                </Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
