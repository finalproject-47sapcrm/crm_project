import React from 'react';
import {Form, Button, Row , Col} from "react-bootstrap";
import PropTypes from 'prop-types';
import './add-ticket-form.style.css';


export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmDt,frmDataErr}) => {
    console.log(frmDt);
    return (
      
    <div className="body">
    <div className = "container-tablet bg-transparent text-dark p-5 mt-3 add-new-ticket">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <Form autocomplete="off" onSubmit={handleOnSubmit} >
  <Form.Group as ={Row}>
      <Form.Label column sm={3}> Subjects</Form.Label>
      <Col sm={9}>
      <Form.Control 
          type="text"
          name="subjects"
          //minlength="3"
          maxlength="34"
          value={frmDt.subjects}
          onChange={handleOnChange}
          placeholder=" Enter subject"
          required
          

      />
      <Form.Text className="text-danger">
          {frmDataErr.subjects && "subject is required" }
      </Form.Text>
      </Col>
  </Form.Group>
  <Form.Group as ={Row} >
      <Form.Label column sm={3}> Issue At</Form.Label>
      <Col sm={9}>


      <Form.Control className="mt-2"
          type="date"
          name="issuedate"
          value={frmDt.issuedate}
          onChange={handleOnChange}
          placeholder=" Enter password"
          required
          

      /></Col>
  </Form.Group><Form.Group as ={Row}>
      <Form.Label column sm={3} >Details</Form.Label>
      <Col sm={9}>
      <Form.Control className="mt-2"
          as= "textarea"
          name="details"
          rows ='8'
          value={frmDt.details}
          onChange={handleOnChange}
          placeholder=" Explain the issue"
          required
          

      />
      </Col>
  </Form.Group>
  <div className =" text-center  mt-3  ">
  <Button className="block" type="submit" variant="dark" >Login</Button>
  </div>


  </Form>

    </div>
    </div>
  );
};
AddTicketForm.propTypes=
{handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange:PropTypes.func.isRequired,
    frmDt:PropTypes.object.isRequired,
    frmDataErr:PropTypes.object.isRequired,

};
