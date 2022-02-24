import React from 'react';//rafc
import PropTypes from 'prop-types';

import {Container,Row, Col,Form, Button} from 'react-bootstrap';
export const LoginForm = ({handleOnChange , email, frmSwitcher,pas,handleOnSubmit }) => {
  return (
<Container>
<Row>
<Col> 
  <h1 className="text-info text-center">Client Login</h1>  
  <hr />
  <Form autocomplete="off" onSubmit={handleOnSubmit} >
  <Form.Group>
      <Form.Label> Subject</Form.Label>
      <Form.Control 
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder=" Enter Email"
          required
          

      />
  </Form.Group>
  <Form.Group>
      <Form.Label> Password</Form.Label>
      <Form.Control 
          type="date"
          name="issuedate"
          value={pas}
          onChange={handleOnChange}
          placeholder=" Enter password"
          required
          

      />
      </Form.Group>
  
  
  <div className =" text-center  mt-3">
  <Button  type="submit">Login</Button>
  </div>


  </Form>

<hr />
</Col>

</Row>
<Row>
    <Col>
        <a href="#!" onClick={()=>frmSwitcher("reset")}>Forget password</a>
    </Col>
</Row>

</Container>
    
  );
};
LoginForm.propTypes = {// parameters  checking for having  definite datatype
  handleOnChange:PropTypes.func.isRequired,
  handleOnSubmit:PropTypes.func.isRequired,
  email:PropTypes.string.isRequired,
  frmSwitcher:PropTypes.string.isRequired,
  pas:PropTypes.string.isRequired,

};
