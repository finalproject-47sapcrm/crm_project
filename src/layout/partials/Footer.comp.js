import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';

export const Footer = () => {
  return (<MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
  <section className=  ' mb-4'>
    <div className='ms  container p-4 pb-0'>
    Get connected with us on social networks:
    <a
            className='btn btn-primary  btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
            
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: 'black' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
    
    
        

       
      
    </div>
  </section>

  <section className=''>
    <div className='container text-center text-md-start mt-5'>
      <div className='row mt-3'>
        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
          <h6 className='text-uppercase fw-bold mb-4'>
            <i className='fas fa-gem me-3'></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>

        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
          <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
          <p>
            <a href='#!' className='text-reset'>
              Angular
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
              React
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
              Vue
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
              Laravel
            </a>
          </p>
        </div>

        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
          <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
          <p>
            <a href='#!' className='text-reset'>
              Pricing
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
              Settings
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
              Orders
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
              Help
            </a>
          </p>
        </div>

        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
          <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
          <p>
            <i className='fas fa-home me-3'></i> New York, NY 10012, US
          </p>
          <p>
            <i className='fas fa-envelope me-3'></i>
            info@example.com
          </p>
          <p>
            <i className='fas fa-phone me-3'></i> + 01 234 567 88
          </p>
          <p>
            <i className='fas fa-print me-3'></i> + 01 234 567 89
          </p>
        </div>
      </div>
    </div>
  </section>

  <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    © 2022 Copyright:CRM  portal. All rights reserved
  </div> 
</MDBFooter> 
      
    
  );
};
