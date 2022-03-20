import React, { useState ,useEffect} from "react";
//import { useDispatch } from "react-redux";
//import { fetchAllTickets } from "./ticketsAction";

import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrum } from "../../components/breadcrum/Breadcrum.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json"
import { Link } from "react-router-dom";

export const TicketLists = () => {

  const [str,setStr]= useState("");
  const [dispTicket, setdispTicket]= useState(tickets);
  useEffect(()=>{},[str,dispTicket]

  );
  const handleOnChange=e => {
    const { value }= e.target;
    setStr(value);
    searchTicket(value);
    //console.log(e.target)

  };
 /*  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]); */
  const searchTicket = strr => {
    const displayTickets = tickets.filter(row=> row.Subjects.toLowerCase().includes(strr.toLowerCase()))
    setdispTicket(displayTickets);
  }
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrum page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/new-ticket">
            <Button variant="info">Add New Ticket</Button>
         </Link> 
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};