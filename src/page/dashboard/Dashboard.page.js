

import React from 'react';
import {Container,Row, Col,Button} from 'react-bootstrap';
import { TicketTable } from '../../components/ticket table/TicketTable.comp';
import tickets from "../../assets/data/dummy-tickets.json";
import {PageBreadcrum} from "../../components/breadcrum/Breadcrum.comp";

import {Link

}from "react-router-dom";



export const Dashboard = () => {
  return (
    <div><Container> 
    <Row> 
    <Col>  
    <PageBreadcrum page="Dashboard" />
    </Col>
    </Row>
    <Row>  
    <Col classsName="text-center mt-5 mb-2">  
    <div className =" text-center  mt-3"> 
     <Link to ="new-ticket">
    <Button variant ="dark" style={{'font-size':'2rem','padding':'10px 30px'}} >  Add a new ticket.


    </Button>
    </Link>
    </div>
    </Col>   
    </Row>
    <Row>  
    <Col classsName ="text-center mb-2 ">    
       <div className =" text-center mt-3 ">   Total Tickets :500</div> 
          <div className =" text-center mt-3 "> Pending Ticket:50
       </div>
    </Col>   
    </Row>
    <Row>  
    <Col classsName=" text-center mt-5">    
       <div>  Recently Added Tickets</div> 
       
    </Col>   
    </Row>
    <Row>  
    <Col classsName=" recent-ticket mt-10 ">    
       <div className =" text-center mt-15"><TicketTable  tickets={tickets} /> </div> 
    
    </Col>   
    </Row>
    </Container>
    </div>

  )
}
