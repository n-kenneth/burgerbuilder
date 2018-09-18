<<<<<<< HEAD
import React from 'react';

const modal = (props) => (

);

export default modal;
=======
import React from "react";
import classes from "./Modal.css";
import Auxs from "../../../hoc/Auxs";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <Auxs>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  </Auxs>
);

export default modal;
>>>>>>> 05b575e9cfd4c37e528fc92bbac9b1b61975364a
