import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Input extends Component{
    constructor(props){
        super(props);
        this.state ={
            tasks : []
        }
    }
    enterKey = ((e) => {if(e.keyCode === 13){e.preventDefault();this.state.tasks.push();}});
    render(){
        return(
            <input type="text" onKeyDown={this.enterKey} placeholder="Please enter your task"/>
        );
    }
}

export default Input;