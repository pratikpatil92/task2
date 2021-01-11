import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super();
        this.state ={
            email:"",
            password:"",
            email_error:"",
            password_error:"",
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onLogin=()=>{
        const user = {
            email:this.state.email,
            password:this.state.password
        }
        if(this.state.email==""){
            this.setState({email_error:"this field can not blank"})
        }else if(this.state.password==""){
            this.setState({password_error:"this field can not blank"})
        }else{
        
        this.setState({email:this.state.email, password:this.state.password, email_error:"", password_error:""})
        localStorage.setItem("user", JSON.stringify(user))
        this.props.history.push('/');}
    }


    render() {
        const {email, password,email_error,password_error} = this.state;
        return (
            <div className="container">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange}></input>
                    {email_error?<span className="text-danger">{email_error}</span>:null}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange}></input>
                    {password_error?<span className="text-danger">{password_error}</span>:null}
                </div>
                <button className="btn btn-primary" onClick={this.onLogin}>Login</button>
                
            </div>
        )
    }
}
