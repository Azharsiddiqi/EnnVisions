import React, {useState} from 'react';
import Form1 from './CreateAdmin/form1.jsx';
import Form2 from './CreateAdmin/form2.jsx';
import Form3 from './CreateAdmin/form3.jsx';

export default () => {
    const [formShow, setFormShow] = useState(0); 
    
    console.log("checking formShow: ", formShow);
    return ( 
        <React.Fragment>
            {formShow === 0 && 
            <Form1  formShowHandler={(num) => setFormShow(num)} />
            }
            {formShow === 1 && 
            <Form2 formShowHandler={(num) => setFormShow(num)}/>
            }
            {formShow === 2 && 
            <Form3 formShowHandler={(num) => setFormShow(num)}/>
            }
        </React.Fragment>
    );
}