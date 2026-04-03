import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.css';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name ="email" 
                type="email" 
                handleChange = {this.handleChange}
                value={this.state.email} 
                label="email"
                required />
                {/* <label>Email</label> */}

                <FormInput 
                name ="password" 
                type="password" 
                value={this.state.email}  
                handleChange={this.handleChange} 
                label="password"
                required />
                {/* <label>Password</label> */}

                <input type='submit' value='submit Form' />
            </form>
        </div>
        );
    }
}

export default SignIn;
    
// require is a native htmal attribute
//import that in sign in page.

//replacing Form into FormInput after import form-input.
//replace onchange into Handlechange.
//that's the name we decide to call our property.

