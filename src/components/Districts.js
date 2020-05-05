import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const Districts = () => {
  const [districts, setDistricts] = useState([]);

  const getDistrictData = async () => {
    try {
      const data = await axios.get('http://127.0.0.1:8000/api/district/');
      console.log(data);
      setDistricts(data.data.sort((a, b) => b.totalCases - a.totalCases));
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    { dataField: 'districtName', text: 'জেলার নাম', filter: textFilter() },
    { dataField: 'totalCases', text: 'মোট শনাক্ত' },
  ];

  const options = {
    // pageStartIndex: 0,
    sizePerPage: 8,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
  };

  useEffect(() => {
    getDistrictData();
  }, []);

  return (
    <div
      className='text-center'
      style={{ width: '118%', height: '100%', marginLeft: '-35px' }}
    >
      <BootstrapTable
        wrapperClasses='boo'
        keyField='districtName'
        data={districts}
        columns={columns}
        pagination={paginationFactory(options)}
        filter={filterFactory()}
      />
    </div>
  );
};

export default Districts;
