import React, { Component } from 'react'

export default class ViewTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            item:[],
            isLoaded:false,
            title:"",
        }
    }
    async componentDidMount(){
        const url = "http://jsonplaceholder.typicode.com/todos";
        const res = await fetch(url);
        const data = await res.json()
        // console.log(data)
        this.setState({item:data, isLoaded:true});
    }
    handleChange = (e)=>{
        this.setState({title:e.target.value})
    }
    onSubmit=()=>{
        const obj ={
            id:this.state.item.length+1,
            title:this.state.title,
            completed:false,
        }
        this.setState({item:[...this.state.item,obj]})
    }

    onDelete = (id)=>{
        // console.log(id)
        const newTask = this.state.item.filter((it,index) => {
            
            return index !== id;
          });
          this.setState({item:newTask});
    }
    render() {
        var {isLoaded, item, title} = this.state;
        console.log("len",item.length)
        if(!isLoaded){
            return(
                <div>is loding</div>
            )
        }else{
        return (
            <div className="container">
                <form className="form-inline mr-auto my-3">
                <div className="form-group">
                    <input type="text" name="title" className="form-control" onChange={this.handleChange} value={title}></input>
                </div>
                <button className="btn btn-primary" onClick={this.onSubmit}>AddTask</button>
                </form>
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>completed</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((d, i) => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.title}</td>
                            <td>{d.completed.toString()}</td>
                            <td><button className="btn btn-danger" onClick={(e)=>{this.onDelete(d.id)}} key={d.id}>delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )}
    }
}
