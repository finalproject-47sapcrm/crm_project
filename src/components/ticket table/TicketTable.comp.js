import React from 'react'
import {Table} from 'react-bootstrap'
import PropTypes from 'prop-types'
//import tickets from "../../assets/data/dummy-tickets.json"
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const TicketTable = ({tickets}) => {
  if(tickets.length)
  return (<Table striped border hover>   
  <thead>  
  <tr>  
  <th>#</th>
  <th>Subjects</th>
  <th>Status</th>
  <th>Opened Date</th>
  </tr>
  </thead>
  <tbody>  
  {tickets.length ?  (tickets.map((row) =>
 ( <tr key ={row.id}>  
  <td>{row.id}</td>
  <td><Link to ={`/ticket/${row.id}`}>{row.Subjects}</Link></td>
  <td>{row.Status}</td>
  <td> {row.OpenDate}</td>
  </tr> ))) : (
      <tr>
  <td colspan="4" className="text-center">no data given </td>
  {/* <td>ssl issue</td>
  <td>client response pending</td>
  <td>2022-02-14</td>*/}
 </tr> )
  }
  </tbody>
  </Table>
    
  )
}
TicketTable.propTypes=
{tickets: PropTypes.array.isRequired,}
 
/* export const TicketTable = () => {
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );
  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {searchTicketList.length ? (
          searchTicketList.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                <Link to={`/ticket/${row._id}`}>{row.subject}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.openAt && new Date(row.openAt).toLocaleString()}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show{" "}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}; */