import React from 'react'
import {Table} from 'react-bootstrap'
export const TicketTable = ({tickets}) => {
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
  <td>{row.Subjects}</td>
  <td>{row.Status}</td>
  <td> {row.OpenDate}</td>
  </tr> ))) : (
      <tr>
  <td colspan="4" className="text-center">no data given </td>
  {/* <td>ssl issue</td>
  <td>client response pending</td>
  <td>2022-02-14</td> */}
  </tr>)
  }
  </tbody>
  </Table>
    
  )
}
