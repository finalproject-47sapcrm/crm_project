import React from "react";
import PropTypes from "prop-types";
//import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";


export const UpdateTicket = ({  msg,handleOnChange,handleOnSubmit}) => {
  /* const dispatch = useDispatch();
  const {
    user: { name },
  } = useSelector((state) => state.user); */
 /*  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault(); */

    /* const msgObj = {
      message,
      sender: name,
    }; */

    /* dispatch(replyOnTicket(_id, msgObj));
    setMessage(""); */
  

  return (
    <div>
       <Form onSubmit={handleOnChange}>
        <Form.Label>Reply</Form.Label>
        <Form.Text>
          Please reply your message here or update the ticket
        </Form.Text>
        <Form.Control
          value={msg}
          onChange={handleOnChange}
          as="textarea"
          row="5"
          name="detail"
        />
        <div className="text-right mt-3 mb-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
    </Form> 
    </div>
  );
};

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange:PropTypes.func.isRequired,
  handleOnSubmit:PropTypes.func.isRequired,
};