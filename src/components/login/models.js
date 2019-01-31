import React, {Component} from 'react';
import * as Contracts from "./allfiles";

export class LoginErrorData extends Component {
    constructor(prps) {
        super(props)
        this.state={
          identifier : "",
          password : "",
          newPassword : "",
          confirmPassword : "",
          email : "",
         smsphone : "",
        }
       
    }
}


export class LoginData extends Component {
    constructor(props) {
        super(props)
        this.state= {
        identifier : "",
        password : "",
        newPassword : "",
        confirmPassword: "",
        email : "",
        smsphone : "",
        pin : ""

        }
        
    }
}
export const LoginType={
    Start : 0,
    Password : 1,
    ContactInfo : 2,
    ResetPass : 3
}