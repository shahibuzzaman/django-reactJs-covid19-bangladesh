import React, { Fragment } from 'react';
import { Card, CardBody, Container, Row, Col } from 'reactstrap';
import Chart from 'react-google-charts';
import CountUp from 'react-countup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// import GlobalDailyData from './GlobalDailyData';

const Total = ({ all }) => {
  return (
    <div style={{ marginLeft: '-30px' }}>
      <Container>
        <Row className='text-center' style={{ marginTop: '5px' }}>
          <Col sm={6}>
            <Card
              style={{
                width: '150px',
                height: '90px',
                borderColor: '#0060B0',
                marginLeft: '',
                textAlign: 'center',
              }}
              className='shadow-sm'
            >
              <CardBody>
                <h5 style={{ marginTop: '-10px', marginLeft: '-6px' }}>
                  {all?.cases ? (
                    <Fragment>
                      <CountUp
                        formattingFn={(num) => num.toLocaleString('bn-BD')}
                        end={all?.cases}
                        duration={2.3}
                        separator={','}
                      />{' '}
                    </Fragment>
                  ) : (
                    <p>Loading . . .</p>
                  )}
                </h5>
              </CardBody>

              <CardBody
                style={{
                  backgroundColor: '#0060B0',
                  color: 'white',
                }}
              >
                <h6 style={{ marginTop: '-10px' }}>
                  {' '}
                  <FontAwesomeIcon icon={faGlobe} /> আক্রান্ত
                </h6>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
            <Card
              style={{
                width: '150px',
                height: '90px',
                borderColor: '#B40000',
                marginLeft: '',
                textAlign: 'center',
              }}
              className='shadow-sm '
            >
              <CardBody>
                <h5 style={{ marginTop: '-10px' }}>
                  {all?.deaths ? (
                    <Fragment>
                      <CountUp
                        formattingFn={(num) => num.toLocaleString('bn-BD')}
                        end={all?.deaths}
                        duration={2.3}
                        separator={','}
                      />{' '}
                    </Fragment>
                  ) : (
                    <p>Loading . . .</p>
                  )}
                </h5>
              </CardBody>

              <CardBody
                style={{
                  backgroundColor: '#B40000',
                  color: 'white',
                }}
              >
                <h6 style={{ marginTop: '-10px' }}>
                  {' '}
                  <FontAwesomeIcon icon={faGlobe} /> মৃত্যু
                </h6>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '15px' }}>
          <Col sm={6}>
            <Card
              style={{
                width: '150px',
                height: '90px',
                borderColor: '#248C1B',
                marginLeft: '',
                textAlign: 'center',
              }}
              className='shadow-sm '
            >
              <CardBody>
                <h5 style={{ marginTop: '-10px' }}>
                  {all?.recovered ? (
                    <Fragment>
                      <CountUp
                        formattingFn={(num) => num.toLocaleString('bn-BD')}
                        end={all?.recovered}
                        duration={2.3}
                        separator={','}
                      />{' '}
                    </Fragment>
                  ) : (
                    <p>Loading . . .</p>
                  )}
                </h5>
              </CardBody>

              <CardBody
                style={{
                  backgroundColor: '#248C1B',
                  color: 'white',
                }}
              >
                <h6 style={{ marginTop: '-10px' }}>
                  {' '}
                  <FontAwesomeIcon icon={faGlobe} /> সুস্থ্য
                </h6>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
            <Card
              style={{
                width: '150px',
                height: '90px',
                borderColor: 'rgb(255,140,0)',
                marginLeft: '',
                textAlign: 'center',
              }}
              className='shadow-sm '
            >
              <CardBody>
                <h5 style={{ marginTop: '-10px' }}>
                  {all?.active ? (
                    <Fragment>
                      <CountUp
                        formattingFn={(num) => num.toLocaleString('bn-BD')}
                        end={all?.active}
                        duration={2.3}
                        separator={','}
                      />{' '}
                    </Fragment>
                  ) : (
                    <p>Loading . . .</p>
                  )}
                </h5>
              </CardBody>

              <CardBody
                style={{
                  backgroundColor: 'rgb(255,140,0)',

                  color: 'white',
                }}
              >
                <h6 style={{ marginTop: '-10px' }}>
                  {' '}
                  <FontAwesomeIcon icon={faGlobe} /> চিকিৎসাধীন
                </h6>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <Row style={{ marginTop: '20px' }}>
            <Col sm={2}></Col>
            <Col sm={8}>
              <GlobalDailyData />
            </Col>
            <Col sm={2}></Col>
          </Row> */}
      </Container>

      <Row>
        <Col className='' style={{ height: '275px', marginTop: '30px' }}>
          <Chart
            width={'300px'}
            height={'300px'}
            style={{ marginLeft: '30px' }}
            chartType='PieChart'
            loader={<div style={{ marginTop: '60px' }}>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['', ''],
              ['মৃত্যু', all.deaths],
              ['চিকিৎসাধীন', all.active],
              ['সুস্থ্য', all.recovered],
            ]}
            options={{
              title: 'শতকরা হিসাবে কোভিড-১৯',
              chartArea: { width: '95%' },
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
};
export default Total;
