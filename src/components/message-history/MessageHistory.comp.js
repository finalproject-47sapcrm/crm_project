import React from "react";
import PropTypes from "prop-types";
import "./message-history.style.css";

export const MessageHistory = ({ msg }) => {
  /* return(
    <div className ="message-history" >
    <div className ="send">
     <div className ="sender">cccxb</div>
     <div className ="date">zdhhtj</div>

    </div>
    <div className ="message">sfccew5ryt</div>
    </div>




  ) */
  if (!msg) return null;

  return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.messageBy}</div>
        <div className="date">
          {row.msgAt && new Date(row.date).toLocaleString()}
        </div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
};

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};