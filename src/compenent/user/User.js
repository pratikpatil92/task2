import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class User extends Component {
    onLogout=()=>{
        localStorage.removeItem('user')
        this.props.history.push('/Login');
    }

    render() {
        const user = JSON.parse(localStorage.getItem('user'));

        console.log(user)
        return (
            <div className="container">
                <p>Email: {user.email}</p>
                <p className="text-password" type="password">Password: {user.password}</p>
                <Link className="btn btn-primary" to="/change-password">change password</Link>
                <Link className="btn btn-primary ml-1" to="/Login" onClick={this.onLogout}>Logout</Link>
                
            </div>
        )
    }
}
