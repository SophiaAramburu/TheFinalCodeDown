import * as React from "react";
export default function Login() {
    
        return (
            <div className="inner-container">
            <input id="input-01" type="text" ref={e1 => this.input1 = e1}/>
            <input id="input-02" type="text" ref={e2 => this.input2 = e2}/>
        </div>);
    
    // require email
    //email() {
        // Input.createInput({
        //     element: this.input1,
        //     properties: {
        //         placeholder: 'Enter email address'
        //     }
        // });
        // Input.createInput({
        //     buttons: ['e-input-group-icon e-input-down'],
        //     element: this.input2,
        //     properties: {
        //         placeholder: 'Enter Value'
        //     }
        // });
    }
    // password
    // password() {
    //     Input.createInput({
    //         element: this.input1,
    //         properties: {
    //             placeholder: 'Enter Password'
    //         }
    //     });
    //     Input.createInput({
    //         buttons: ['e-input-group-icon e-input-down'],
    //         element: this.input2,
    //         properties: {
    //             placeholder: 'Enter Value'
    //         }
    //     });
    // }


// ReactDOM.render(<Default />, document.getElementById('input-container'));

