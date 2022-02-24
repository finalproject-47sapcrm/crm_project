
import React,{useEffect, useState } from 'react'
import {Container,Row, Col} from 'react-bootstrap';
import {PageBreadcrum} from "../../components/breadcrum/Breadcrum.comp";
import { AddTicketForm } from '../../components/add.ticket.form/AddTicketForm.comp';
import {shortText} from '../../utils/validation'

const initFromDt={subjects: "", issuedate:" ",details:""};
const initFromDtErr={subjects: false, issuedate:false,details:false};

export const AddTicket = () => {

const [frmData, setFrmData]= useState(initFromDt);
const [frmDataErr, setFrmDataErr]= useState(initFromDtErr);

 useEffect(()=> {},[frmData, frmDataErr]); 
        


    const handleOnChange = e =>
    {
        const{name,value} =e.target;
       
        setFrmData({
            ...frmData,[name]:value
        });
    };

    const handleOnSubmit= async (e) => {
        e.preventDefault();
        setFrmDataErr(initFromDtErr);
        setFrmData(initFromDt);
        const isValid = await shortText(frmData.subjects);
        setFrmDataErr({...initFromDtErr,subjects:!isValid});
    };
  return (
    <Container> 
    <Row>
        <Col>
        <PageBreadcrum page="  NEW TICKET" />

        </Col>
    </Row>
    <Row>
        <Col>
             <AddTicketForm handleOnChange={handleOnChange}
              frmDt={frmData}
                  handleOnSubmit={handleOnSubmit}
                  frmDataErr={frmDataErr}
              />
        </Col>
    </Row>
</Container>
  )
}
