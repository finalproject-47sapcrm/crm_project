import React from 'react';//rafc
import PropTypes from 'prop-types';

import {Container,Row, Col,Form, Button} from 'react-bootstrap';
export const ResetPasswordForm = ({handleOnChange , email,frmSwitcher,handleOnResetSubmit }) => {
  return (
<Container>
<Row>
<Col> 
  <h1 className="text-info text-center">Reset Password</h1>  
  <hr />
  <Form autocomplete="off" onSubmit={handleOnResetSubmit} >
  <Form.Group>
      <Form.Label> Email Address</Form.Label>
      <Form.Control 
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder=" Enter Email"
          required
          

      />
  </Form.Group>
  {/* <Form.Group>
      <Form.Label> Password</Form.Label>
      <Form.Control 
          type="password"
          name="password"
          value={pas}
          onChange={handleOnChange}
          placeholder=" Enter password"
          required
          

      />
  </Form.Group> */}
  <div className =" text-center  mt-3">
  <Button  type="submit">Reset Password</Button>
  </div>


  </Form>

<hr />
</Col>

</Row>
<Row>
    <Col>
        <a href="#!" onClick={()=>frmSwitcher('login')}>Loging Now!</a>
    </Col>
</Row>

</Container>
    
  );
};
ResetPasswordForm.prototype={// parameters  checking for having  definite datatype
  handleOnChange:PropTypes.func.isRequired,
  handleOnResetSubmit:PropTypes.func.isRequired,
  frmSwitcher:PropTypes.string.isRequired,
  //pas:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
};
