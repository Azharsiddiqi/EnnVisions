import React, { Component } from 'react';
import Form1 from './CreateAdmin/form1';
import Form2 from './CreateAdmin/form2';
import Form3 from './CreateAdmin/form3';

class createAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            formShow: 0
        };
    }

    formShowHandler = (num) =>{
        console.log("checking number: ", num);
        this.setState({
            formShow: num
        });
    }
    render() { 
        console.log("checking number in render: ", this.state.formShow);
        return ( 
            <React.Fragment>
                {this.state.formShow === 0 && 
                <Form1  formShowHandler={(num) => this.formShowHandler(num)} />
                }
                {this.state.formShow === 1 && 
                <Form2 formShowHandler={(num) => this.formShowHandler(num)}/>
                }
                {this.state.formShow === 2 && 
                <Form3 formShowHandler={(num) => this.formShowHandler(num)}/>
                }
            </React.Fragment>
         );
    }
}
 
export default createAdmin;