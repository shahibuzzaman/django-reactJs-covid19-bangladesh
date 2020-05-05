import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export class TopBar extends Component {
  render() {
    return (
      <div>
        <Navbar color='white' light expand='md'>
          <NavbarBrand
            href='/'
            style={{ marginLeft: '570px', marginTop: '-5px' }}
          >
            <strong>
              কোভিড-১৯ আপডেট{' '}
              <p
                style={{
                  fontSize: '14px',
                  marginBottom: '-10px',
                  marginLeft: '',
                }}
              >
                Coronavirus
              </p>
            </strong>
          </NavbarBrand>
        </Navbar>
        <hr />
      </div>
    );
  }
}

export default TopBar;
