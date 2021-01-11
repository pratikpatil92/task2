import React, { Component } from 'react'

export default class ChangePassword extends Component {
    constructor(props){
        super(props)
        const user = JSON.parse(localStorage.getItem('user'));
            this.state={
                email:user.email,
                password:user.password

            }
        
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onUpdate=()=>{
        const user = {
            email:this.state.email,
            password:this.state.password
        }
        
        localStorage.setItem("user", JSON.stringify(user))
        this.props.history.push('/User');
    }
    render() {
        const{email, password}=this.state
        return (
            <div className="container">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" name="password" value={password} onChange={this.handleChange}></input>
                </div>
                <button className="btn btn-primary" onClick={this.onUpdate}>Update</button>
                </div>
        )
    }
}
