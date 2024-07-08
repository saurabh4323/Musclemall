import React from "react";
import "./Register.scss";

import { SignIn } from "@clerk/clerk-react";
import Nav from "../Hero/Nav";

const Register = () => {
  return (
    <>
      <Nav></Nav>
      <div className="ce">
        <div className="si">
          <SignIn></SignIn>
        </div>
      </div>
    </>
  );
};

export default Register;
