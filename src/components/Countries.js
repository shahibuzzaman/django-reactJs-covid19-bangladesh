import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const Districts = () => {
  const [districts, setDistricts] = useState([]);

  const getDistrictData = async () => {
    try {
      const data = await axios.get('https://corona.lmao.ninja/v2/countries');
      console.log(data);
      setDistricts(data.data.sort((a, b) => b.cases - a.cases));
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    { dataField: 'country', text: 'Country Name', filter: textFilter() },
    { dataField: 'cases', text: 'Cases' },
    { dataField: 'deaths', text: 'Deaths' },
    { dataField: 'recovered', text: 'Recovered' },
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
    <div className='text-center'>
      <BootstrapTable
        keyField='country'
        data={districts}
        columns={columns}
        pagination={paginationFactory(options)}
        filter={filterFactory()}
      />
    </div>
  );
};

export default Districts;
