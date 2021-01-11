import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super();
        this.state ={
            username:"",
            password:"",
            username_error:"",
            password_error:"",
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onLogin=()=>{
        const user = {
            username:this.state.username,
            password:this.state.password
        }
        if(this.state.username==""){
            this.setState({username_error:"this field can not blank"})
        }else if(this.state.password==""){
            this.setState({password_error:"this field can not blank"})
        }else{
        
        this.setState({username:this.state.username, password:this.state.password, username_error:"", password_error:""})
        localStorage.setItem("user", JSON.stringify(user))
        this.props.history.push('/');}
    }


    render() {
        const {username, password,username_error,password_error} = this.state;
        return (
            <div className="container">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange}></input>
                    {username_error?<span className="text-danger">{username_error}</span>:null}
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
