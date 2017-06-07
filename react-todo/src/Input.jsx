import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Input extends Component{
    constructor(props){
        super(props);
        this.state ={
            tasks : [],
            key: 1
        }
    }
    enterKey = ((e) => {
        if(e.keyCode === 13){
        e.preventDefault();
        this.setState({tasks: this.state.tasks.concat(<li key={this.state.key}>{e.target.value}</li>)});
        this.setState({key: this.state.key + 1});
}});
    render(){
        return(
            <div className="todo">
                <input type="text" id="task" onKeyDown={this.enterKey} placeholder="Please enter your task"/>
                <ul>
                    {this.state.tasks}
                </ul>
            </div>
        );
    }
}

export default Input;