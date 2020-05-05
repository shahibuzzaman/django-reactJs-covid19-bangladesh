import React, { Component } from 'react';
import { Card, Row, Col, CardBody } from 'reactstrap';
import axios from 'axios';

const BangladeshInfo = ({ getData }) => {
  const date = new Date();
  const casesTodayConvert = getData.map(({ casesToday }) => casesToday);
  const casesTotalConvert = getData.map(({ totalCases }) => totalCases);
  const casesTodayPercentage = (
    (casesTodayConvert / casesTotalConvert) *
    100
  ).toLocaleString('bn-BD', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const deathsTodayConvert = getData.map(({ deathsToday }) => deathsToday);
  const deathsTotalConvert = getData.map(({ totalDeaths }) => totalDeaths);
  const deathsTodayPercentage = (
    (deathsTodayConvert / deathsTotalConvert) *
    100
  ).toLocaleString('bn-BD', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const deathsTotalPercentage = (
    (deathsTotalConvert / casesTotalConvert) *
    100
  ).toLocaleString('bn-BD', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const recoveredTodayConvert = getData.map(
    ({ RecoveredToday }) => RecoveredToday
  );
  const recoveredTotalConvert = getData.map(
    ({ totalRecovered }) => totalRecovered
  );
  const recoveredTodayPercentage = (
    (recoveredTodayConvert / recoveredTotalConvert) *
    100
  ).toLocaleString('bn-BD', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const recoveredTotalPercentage = (
    (recoveredTotalConvert / casesTotalConvert) *
    100
  ).toLocaleString('bn-BD', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  //Test
  const testTodayConvert = getData.map(({ testsToday }) => testsToday);
  const testTotalConvert = getData.map(({ totalTests }) => totalTests);
  const testTodayPercentage = (
    (testTodayConvert / testTotalConvert) *
    100
  ).toLocaleString('bn-BD', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div>
      <Card style={{ borderColor: 'white' }}>
        <Row style={{ marginTop: '' }}>
          <Col className=''>
            <Card
              style={{
                borderColor: 'white',
                width: '119%',
                marginLeft: '-18px',
                textAlign: 'center',
              }}
            >
              <h5>
                <strong>বাংলাদেশের কোভিড-১৯ আপডেট </strong>{' '}
              </h5>
              <p style={{ fontSize: '12px', marginLeft: '60px' }}>
                সর্বশেষ আপডেটঃ {date.toLocaleString('bn-BD')}{' '}
              </p>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '' }}>
          <Col>
            <Card
              style={{
                width: '119%',
                height: '120px',
                borderColor: '#0060B0',
                marginLeft: '-18px',
                textAlign: 'center',
              }}
              className='shadow-sm'
            >
              <CardBody>
                <Row>
                  <Col xs='6'>
                    {' '}
                    <h4 style={{ marginTop: '-10px', color: 'black' }}>
                      {casesTodayConvert.toLocaleString('bn-BD')}
                    </h4>
                    <p style={{ marginLeft: '-10px' }}>
                      ২৪ ঘন্টায় (+{casesTodayPercentage}%)
                    </p>
                  </Col>
                  <div
                    style={{
                      borderLeft: '1px solid #0060B0',
                      height: '100px',
                      marginLeft: '-1px',
                      marginTop: '-20px',
                    }}
                  ></div>
                  <Col xs='6'>
                    <h4 style={{ marginTop: '-10px', marginRight: '' }}>
                      {casesTotalConvert.toLocaleString('bn-BD')}
                    </h4>
                    <p>মোট</p>
                  </Col>
                </Row>
              </CardBody>

              <CardBody
                style={{
                  backgroundColor: '#0060B0',
                  color: 'white',
                  height: '5px',
                  marginLeft: '50px',
                  marginRight: '50px',
                  borderRadius: '20px 20px 0px 0px',
                }}
              >
                <h5 style={{ marginTop: '-15px' }}>
                  <strong>আক্রান্ত</strong>{' '}
                </h5>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col>
            <Card
              style={{
                width: '119%',
                height: '120px',
                borderColor: '#C60A0A',
                marginLeft: '-18px',
                textAlign: 'center',
              }}
              className='shadow-sm'
            >
              <CardBody>
                <Row>
                  <Col xs='6'>
                    {' '}
                    <h4 style={{ marginTop: '-10px' }}>
                      {deathsTodayConvert.toLocaleString('bn-BD')}
                    </h4>
                    <p style={{ marginLeft: '-10px' }}>
                      ২৪ ঘন্টায় (+{deathsTodayPercentage}%)
                    </p>
                  </Col>
                  <div
                    style={{
                      borderLeft: '1px solid #C60A0A',
                      height: '100px',
                      marginLeft: '-1px',
                      marginTop: '-20px',
                    }}
                  ></div>
                  <Col xs='6'>
                    <h4 style={{ marginTop: '-10px' }}>
                      {deathsTotalConvert.toLocaleString('bn-BD')}
                    </h4>
                    <p>মোট ({deathsTotalPercentage}%)</p>
                  </Col>
                </Row>
              </CardBody>

              <CardBody
                style={{
                  backgroundColor: '#C60A0A',
                  color: 'white',
                  height: '5px',
                  marginLeft: '50px',
                  marginRight: '50px',
                  borderRadius: '20px 20px 0px 0px',
                }}
              >
                <h5 style={{ marginTop: '-15px' }}>
                  <strong>মৃত্যু</strong>{' '}
                </h5>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col>
            <Card
              style={{
                width: '119%',
                height: '120px',
                borderColor: '#348110',
                marginLeft: '-18px',
                textAlign: 'center',
              }}
              className='shadow-sm'
            >
              <CardBody>
                <Row>
                  <Col xs='6'>
                    {' '}
                    <h4 style={{ marginTop: '-10px' }}>
                      {recoveredTodayConvert.toLocaleString('bn-BD')}
                    </h4>
                    <p style={{ marginLeft: '-10px' }}>
                      ২৪ ঘন্টায় (+{recoveredTodayPercentage}%)
                    </p>
                  </Col>
                  <div
                    style={{
                      borderLeft: '1px solid #348110',
                      height: '100px',
                      marginLeft: '-1px',
                      marginTop: '-20px',
                    }}
                  ></div>
                  <Col xs='6'>
                    <h4 style={{ marginTop: '-10px' }}>
                      {recoveredTotalConvert.toLocaleString('bn-BD')}
                    </h4>
                    <p>মোট ({recoveredTotalPercentage}%)</p>
                  </Col>
                </Row>
              </CardBody>

              <CardBody
                style={{
                  backgroundColor: '#348110',
                  color: 'white',
                  height: '5px',
                  marginLeft: '50px',
                  marginRight: '50px',
                  borderRadius: '20px 20px 0px 0px',
                }}
              >
                <h5 style={{ marginTop: '-15px' }}>
                  <strong>সুস্থ্য</strong>{' '}
                </h5>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col>
            <Card
              style={{
                width: '119%',
                height: '120px',
                borderColor: 'rgb(255,140,0)',
                marginLeft: '-18px',
                textAlign: 'center',
              }}
              className='shadow-sm'
            >
              <CardBody>
                <Row>
                  <Col xs='6'>
                    {' '}
                    <h4 style={{ marginTop: '-10px' }}>
                      {testTodayConvert.toLocaleString('bn')}
                    </h4>
                    <p style={{ marginLeft: '-10px' }}>
                      ২৪ ঘন্টায় (+{testTodayPercentage}%)
                    </p>
                  </Col>
                  <div
                    style={{
                      borderLeft: '1px solid rgb(255,140,0)',
                      height: '100px',
                      marginLeft: '-1px',
                      marginTop: '-20px',
                    }}
                  ></div>
                  <Col xs='6'>
                    <h4 style={{ marginTop: '-10px' }}>
                      {testTotalConvert.toLocaleString('bn')}
                    </h4>
                    <p>মোট</p>
                  </Col>
                </Row>
              </CardBody>

              <CardBody
                style={{
                  backgroundColor: 'rgb(255,140,0)',
                  color: 'white',
                  height: '5px',
                  marginLeft: '50px',
                  marginRight: '50px',
                  borderRadius: '20px 20px 0px 0px',
                }}
              >
                <h5 style={{ marginTop: '-10px' }}>
                  <strong>শনাক্তকরণ পরীক্ষা</strong>{' '}
                </h5>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default BangladeshInfo;
