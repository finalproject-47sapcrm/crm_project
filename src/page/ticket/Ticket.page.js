import React,{ useState ,useEffect} from 'react'
import {Container, Row , Col, Button} from 'react-bootstrap'
import { PageBreadcrum } from "../../components/breadcrum/Breadcrum.comp";
import tickets from "../../assets/data/dummy-tickets.json"
import {MessageHistory} from "../../components/message-history/MessageHistory.comp"
import {UpdateTicket} from "../../components/update-ticket/UpdateTicket.comp";
import { useParams } from 'react-router-dom';



//const ticket= tickets[0]
export const Ticket = () => {
  const {tid} =useParams();
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");
  useEffect(() =>{
    for (let index = 0; index < tickets.length; index++) {
      if(tickets[index].id == tid)
      {
        setTicket(tickets[index]);
        continue;
      }
      
    }

  },[message,tid]);
  const handleOnChange = e => {
    setMessage(e.target.value);
  } ;

  const handleOnSubmit =e  => {
 alert("commited")
  }
  return (
    
    <Container>
      <Row>
      <Col> 
      
      <PageBreadcrum  page= "Ticket" />
      </Col>
      </Row>
      <Row>
      
      <Col className="text-weight-bolder text-secondary"> 
      
      <div className ="subject">Subject: {ticket.Subjects}</div>
      <div className ="date">Date: {ticket.OpenDate}</div>
      <div className ="status">Status:{ticket.Status}</div>
      
      </Col>
      <Col className="text-right"> 
      <Button variant= "outline-info">Close Ticket </Button>
      
      </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          {ticket.history && <MessageHistory msg ={ticket.history} />}
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket msg= {message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
        </Col>
      </Row>
    </Container>
  )
}

