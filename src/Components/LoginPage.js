import React from 'react';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

import './LoginPage.css';

class LoginForm extends React.Component{
    state = { email: 'eve.holt@reqres.in', password:'cityslicka',showError:false};
    
    onFormSubmit = event =>{
        event.preventDefault();

        this.doLogin();
    }

    doLogin = async () =>{
        try{
            const {email,password} = this.state;
            const {data} = await axios.post('https://reqres.in/api/login',{
                email,password

            });

            localStorage.setItem('token',data.token);

            this.props.history.push('/');
        }
        catch(e){
            console.log(e);
            this.setState({showError:true});
        }
    }

    render(){
        return (
            <div className="center-div">
                <div className="container" style={{padding:"30px"}}>
                     <h4 className="text-center">Hello World Login</h4>
                    {this.state.showError
                        ? <ErrorMessage message="Login Failed"/>
                        : null
                    }
                    <form  onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email" 
                                value={ this.state.email } 
                                onChange={e => this.setState({ email:e.target.value })}
                                required autoFocus/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" 
                                        value={ this.state.password } 
                                        onChange={e => this.setState({ password:e.target.value })} required/>
                        </div>
                       
                    
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;