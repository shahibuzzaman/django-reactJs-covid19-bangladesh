import React, { useState, useEffect } from 'react';
import { fetchDaily } from './api/index';
import Chart from 'react-apexcharts';

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => setDailyData(await fetchDaily());
    fetchAPI();
  }, []);

  // if (!dailyData?.length)
  //   return (
  //     <div className='text-center'>
  //       <Spinner />
  //     </div>
  //   );

  const lineChart = dailyData?.length ? (
    <Chart
      options={{
        xaxis: {
          type: 'datetime',
          categories: dailyData.map(({ date }) => date),
        },

        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },

        dataLabels: {
          enabled: true,
        },

        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },

        stroke: {
          curve: 'smooth',
        },
        colors: ['#2E93fA', '#f36', '#008000'],
        legend: {
          show: true,
          fontSize: '20px',
          itemMargin: {
            horizontal: 10,
            vertical: 25,
          },
        },
      }}
      series={[
        {
          name: 'আক্রান্ত',
          data: dailyData.map(({ confirmed }) => confirmed),
        },
        { name: 'মৃত্যু', data: dailyData.map(({ deaths }) => deaths) },
        { name: 'সুস্থ্য', data: dailyData.map(({ recovered }) => recovered) },
      ]}
      type='line'
    />
  ) : null;

  return (
    <div className=''>
      <h4 style={{ marginLeft: '' }}>সর্বশেষ ৩০ দিনের তথ্য</h4>
      <div>{lineChart}</div>
    </div>
  );
};

export default Charts;
